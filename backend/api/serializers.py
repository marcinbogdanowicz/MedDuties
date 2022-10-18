from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import User, Unit, Doctor, MonthlyDuties, DoctorMonthlyData, Duty
from . import custom_serializer_fields


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)
        token['is_head_doctor'] = user.is_head_doctor
        return token


class CreateUserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'is_head_doctor', 'unit')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = self.Meta.model(**validated_data)
        if password is not None:
            user.set_password(password)
        user.save()

        return user


class UnitSerializer(serializers.ModelSerializer):
    
    monthly_duties = custom_serializer_fields.MonthlyDutiesListHyperlink(
        read_only=True, required=False, view_name='monthly-duties-list')

    class Meta:
        model = Unit
        fields = ('pk', 'name', 'monthly_duties')


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(min_length=8, write_only=True)
    unit = UnitSerializer(read_only=True, required=False)
    doctors = custom_serializer_fields.DoctorsListHyperlink(
        read_only=True, required=False, view_name='doctor-list')
    
    class Meta:
        model = User
        fields = ('pk', 'username', 'password', 
                  'is_head_doctor', 'unit', 'doctors')
        extra_kwargs = {'password': {'write_only': True}}


class DoctorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Doctor
        fields = ('pk', 'name', 'unit', 'owner')
        extra_kwargs = {'owner': {'write_only': True}}


class MonthlyDutiesSerializer(serializers.ModelSerializer):

    doctor_data = custom_serializer_fields.MonthlyDataListHyperlink(
        required=False, read_only=True, view_name='doctor-monthly-data-list')
    duties = custom_serializer_fields.DutyListHyperlink(
        required=False, read_only=False, view_name='duty-list')
    monthandyear = custom_serializer_fields.MonthAndYearField()

    class Meta:
        model = MonthlyDuties
        fields = ('pk', 'monthandyear', 'number_of_days', 
                  'first_weekday', 'duty_positions', 'unit',
                  'doctor_data', 'duties')


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


class DutySerializer(serializers.ModelSerializer):

    class Meta:
        model = Duty
        fields = ('pk', 'day', 'position', 'person', 'monthly_duties')
