from calendar import monthrange
from django.db.utils import IntegrityError
from rest_framework import serializers, exceptions
from .models import User, Unit, Doctor, MonthlyDuties, DoctorMonthlyData, Duty
from . import custom_serializer_fields


class UnitSerializer(serializers.ModelSerializer):
    
    monthly_duties = custom_serializer_fields.MonthlyDutiesListHyperlink(
        read_only=True, required=False, view_name='monthly-duties-list')
    doctors = custom_serializer_fields.DoctorsListHyperlink(
        read_only=True, required=False, view_name='doctor-list')

    class Meta:
        model = Unit
        fields = ('pk', 'name', 'duty_positions', 'monthly_duties', 'doctors')

    def create(self, validated_data):
        request = self.context['request']
        instance = Unit.objects.create(owner=request.user, **validated_data)
        instance.full_clean()
        instance.save()
        return instance


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(min_length=8, write_only=True)
    unit = UnitSerializer(required=False)
    
    class Meta:
        model = User
        fields = ('pk', 'username', 'password', 'is_head_doctor',
                  'unit', 'my_doctor')
        extra_kwargs = {'my_doctor': {'read_only': True}}

    def create(self, validated_data):
        unit_data = validated_data.pop('unit', None)

        password = validated_data.pop('password', None)
        user = User.objects.create(**validated_data)
        if password is not None:
            user.set_password(password)
        user.save()
        
        unit = Unit.objects.create(owner=user, **unit_data)
        unit.full_clean()
        unit.save()

        user.unit = unit
        user.save()

        return user

    def update(self, instance, validated_data):
        request = self.context['request']
        if ((request.method == 'PUT' or request.method == 'PATCH')
                and validated_data.get('unit', False)
                and instance.unit is not None):
            raise exceptions.PermissionDenied(
                "User's unit cannot be changed after assignment.")        

        return super().update(instance, validated_data)


class DoctorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Doctor
        fields = ('pk', 'name', 'unit', 'impersonated_user')
        extra_kwargs = {'unit': {'read_only': True}}

    def create(self, validated_data):
        # Set user as object owner. Add unit and user from request.
        request = self.context['request']
        owner = request.user
        unit = request.user.unit
        instance = Doctor.objects.create(owner=owner, unit=unit, **validated_data)
        instance.full_clean()
        instance.save()
        return instance

    def validate(self, attrs):
        validated_data = attrs

        # Check permissions if request is given.
        # Standard validation will handle 'required' requirement.
        request = self.context.get('request', None)
        if request:

            if not request.user.is_head_doctor:
                raise exceptions.PermissionDenied(
                    "Only head users can create and modify doctors.")

            impersonated_user = validated_data.get('impersonated_user', None)
            if (impersonated_user is not None 
                    and impersonated_user.unit != request.user.unit):
                raise exceptions.PermissionDenied(
                    ("User who doctor instance is representing "+
                    "cannot be of another unit."))

        return validated_data


class DoctorMonthlyDataSerializer(serializers.ModelSerializer):

    exceptions = custom_serializer_fields.IntegerListField(
        required=False)
    preferred_days = custom_serializer_fields.IntegerListField(
        required=False)
    preferred_weekdays = custom_serializer_fields.IntegerListField(
        required=False)
    preferred_positions = custom_serializer_fields.IntegerListField(
        required=False)

    class Meta:
        model = DoctorMonthlyData
        fields = ('pk', 'doctor', 'monthly_duties', 'strain', 
                  'max_number_of_duties', 'exceptions', 'preferred_days',
                  'preferred_weekdays', 'preferred_positions', 'locked')
    
    def create(self, validated_data):
        # Set user as object owner.
        request = self.context['request']
        instance = DoctorMonthlyData.objects.create(
            owner=request.user.unit.owner, **validated_data)
        instance.full_clean()
        instance.save()
        return instance

    def validate(self, attrs):
        validated_data = super().validate(attrs)

        # Check permissions if request is given.
        # Standard validation will handle 'required' requirement.
        request = self.context.get('request', None)
        if request:

            doctor = validated_data.get('doctor', None)
            monthly_duties = validated_data.get('monthly_duties', None)

            # Get values not given with PATCH request from instance.
            if request.method == 'PATCH':
                doctor = doctor or self.instance.doctor
                monthly_duties = monthly_duties or self.instance.monthly_duties

                
            if (not request.user.is_head_doctor 
                    and request.user != doctor.impersonated_user):
                raise exceptions.PermissionDenied(
                    ("Only head users and user who is represented "+
                    "by the doctor instance can create and modify "+
                    "doctors settings."))
            
            if request.user.unit.owner != doctor.owner:
                raise exceptions.PermissionDenied(
                    ("User can create or modify monthly settings "+
                    "only for doctors of his unit."))

            
            if monthly_duties.owner != request.user.unit.owner:
                raise exceptions.PermissionDenied(
                    ("User can create or modify doctor settings "+
                    "only for schedules for his unit."))

        return validated_data


class DutySerializer(serializers.ModelSerializer):

    class Meta:
        model = Duty
        fields = ('pk', 'day', 'position', 'strain_points', 'doctor', 'monthly_duties', 'user_set')

    def create(self, validated_data):
        # Set user as owner during creation.
        request = self.context['request']
        instance = Duty.objects.create(owner=request.user, **validated_data)
        instance.full_clean()
        instance.save()
        return instance

    def validate(self, attrs):
        validated_data = super().validate(attrs)

        # Check permissions if request is given.
        # Standard validation will handle 'required' requirement.
        request = self.context.get('request', None)
        if request:

            if not request.user.is_head_doctor:
                raise exceptions.PermissionDenied(
                    ("Only head doctors can create or modify "+
                    "duties."))

            doctor = validated_data.get('doctor', None)
            if doctor is not None and doctor.owner != request.user:
                raise exceptions.PermissionDenied(
                    ("User cannot create nor modify duties "+
                    "for doctor he does not own."))

            monthly_duties = validated_data.get('monthly_duties', None)
            if monthly_duties is not None and monthly_duties.owner != request.user:
                raise exceptions.PermissionDenied(
                    ("User cannot create nor modify duties "+
                    "for schedule he does not own."))

        return validated_data


class DutyNestedSerializer(DutySerializer):

    class Meta:
        model = Duty
        fields = ('pk', 'day', 'position', 'doctor', 'strain_points', 'monthly_duties', 'owner', 'user_set')
        extra_kwargs = {
            'pk': {'read_only': False, 'required': False},
            'owner': {'write_only': True, 'required': False},
            'monthly_duties': {'required': False}
        }
    
    def validate(self, attrs):
        validated_data = attrs

        # Check permissions if request is given.
        # Standard validation will handle 'required' requirement.
        request = self.context.get('request', None)
        if request:

            doctor = validated_data.get('doctor', None)
            if doctor is not None and doctor.owner != request.user:
                raise exceptions.PermissionDenied(
                    ("User cannot create or modify duties "+
                    "for doctor he does not own."))

        return validated_data


class DoctorMonthlyDataNestedSerializer(DoctorMonthlyDataSerializer):

    class Meta:
        model = DoctorMonthlyData
        fields = ('pk', 'doctor', 'monthly_duties', 'strain', 
                  'max_number_of_duties', 'exceptions', 'preferred_days',
                  'preferred_weekdays', 'preferred_positions', 'locked', 
                  'owner')
        extra_kwargs = {
            'pk': {'read_only': False, 'required': False},
            'owner': {'write_only': True, 'required': False},
            'impersonated_user': {'write_only': True},
            'monthly_duties': {'required': False}}
    
    def validate(self, attrs):
        validated_data = attrs

        # Check permissions if request is given.
        # Standard validation will handle 'required' requirement.
        request = self.context.get('request', None)
        if request:

            doctor = validated_data.get('doctor', None)
            if doctor is not None and request.user.unit.owner != doctor.owner:
                raise exceptions.PermissionDenied(
                    ("User can create or modify monthly settings "+
                    "only for doctors of his unit."))

        return validated_data


class MonthlyDutiesSerializer(serializers.ModelSerializer):
    """
    Data input format: 
    {"monthandyear":"10/2022", 
        //  optional:
    "doctor_data":[
        {"doctor":1,
            //optional:
        "strain":0, "max_number_of_duties":15,"exceptions":"1 3 11",
        "preferred_days":"","preferred_weekdays":"","preferred_positions":"1",
        "locked":false},
        {"doctor":2, ...}
    ],
    "duties":[
        {"day":15,"position":1,"doctor":1,"user_set":false},
        {"day":12, ...},
    ]}
    """

    doctor_data = DoctorMonthlyDataNestedSerializer(many=True, required=False)
    duties = DutyNestedSerializer(many=True, required=False)
    monthandyear = custom_serializer_fields.MonthAndYearField()

    class Meta:
        model = MonthlyDuties
        fields = ('pk', 'monthandyear', 'number_of_days', 
                  'first_weekday', 'duty_positions', 'unit', 
                  'doctor_data', 'duties')
        extra_kwargs = {
            'number_of_days': {'read_only': True},
            'first_weekday': {'read_only': True},
            'unit': {'read_only': True},
            'duty_positions': {'read_only': True},
        }

    def create(self, validated_data):
        # Check if doctor_data and duties are provided.
        # If so, extract them from validated_data.
        doctors_data = validated_data.get('doctor_data', None)
        if doctors_data:
            doctors_data = validated_data.pop('doctor_data')
        duties = validated_data.get('duties', None)
        if duties:
            duties = validated_data.pop('duties')

        # Create month's schedule with additional data.
        request = self.context['request']
        owner = request.user

        month, year = validated_data['monthandyear']
        first_weekday, number_of_days = monthrange(year, month)

        unit = request.user.unit
        duty_positions = unit.duty_positions
         
        monthly_duties = MonthlyDuties.objects.create(
            owner=owner, 
            first_weekday=first_weekday, 
            number_of_days=number_of_days,
            unit=unit,
            duty_positions=duty_positions,
            **validated_data
        )
        monthly_duties.full_clean()
        monthly_duties.save()

        # Create doctor_data and duties if they are provided.
        if doctors_data is not None:
            for doctor_data in doctors_data:
                doctor_data['owner'] = monthly_duties.owner
                doctor_data['monthly_duties'] = monthly_duties
                instance = DoctorMonthlyData.objects.create(**doctor_data)
                instance.full_clean()
                instance.save()            
        if duties is not None:
            for duty in duties:
                duty['owner'] = monthly_duties.owner
                duty['monthly_duties'] = monthly_duties
                instance = Duty.objects.create(**duty)
                instance.full_clean()
                instance.save()

        return monthly_duties

    def update(self, instance, validated_data):
        # Check if doctor_data and duties are provided.
        # If so, extract them from validated_data.
        doctors_data = validated_data.get('doctor_data', None)
        if doctors_data:
            doctors_data = validated_data.pop('doctor_data')
        duties = validated_data.get('duties', None)
        if duties:
            duties = validated_data.pop('duties')

        # Update month's schedule with additional data.
        request = self.context['request']
        validated_data['owner'] = request.user

        month, year = validated_data['monthandyear']
        validated_data['first_weekday'], validated_data['number_of_days'] = (
            monthrange(year, month))

        validated_data['unit'] = request.user.unit
        validated_data['duty_positions'] = request.user.unit.duty_positions

        for name, attr in validated_data.items():
            setattr(instance, name, attr)
        instance.full_clean()
        instance.save()

        # Create or update doctor_data and duties if they are provided.
        if doctors_data is not None:
            for doctor_data in doctors_data:
                doctor_data['owner'] = instance.owner
                doctor_data['monthly_duties'] = instance
                pk = doctor_data.pop('pk', None)
                try:
                    dd_instance = DoctorMonthlyData.objects.get(pk=pk)
                    print(doctor_data.items())
                    for name, attr in doctor_data.items():
                        setattr(dd_instance, name, attr)
                except DoctorMonthlyData.DoesNotExist:
                    dd_instance = DoctorMonthlyData.objects.create(
                        **doctor_data)
                dd_instance.full_clean()
                dd_instance.save()

        if duties is not None:
            for duty in duties:
                duty['owner'] = instance.owner
                duty['monthly_duties'] = instance
                pk = duty.pop('pk', None)
                try:
                    duty_instance = Duty.objects.get(pk=pk)
                    for name, attr in duty.items():
                        setattr(duty_instance, name, attr)
                except Duty.DoesNotExist:
                    duty_instance = Duty.objects.create(**duty)
                duty_instance.full_clean()
                duty_instance.save()

        return instance

    def validate(self, attrs):
        validated_data = super().validate(attrs)

        # Check permissions if request is given.
        # Standard validation will handle 'required' requirement.
        request = self.context.get('request', {})
        if request:
        
            if not request.user.is_head_doctor:
                raise exceptions.PermissionDenied(
                    ("Only head doctors can create or modify "+
                    "new duty schedules."))
        
        return validated_data


class MonthlyDutiesListSerializer(serializers.ModelSerializer):

    class Meta:
        model = MonthlyDuties
        fields = ('pk', 'monthandyear',)
