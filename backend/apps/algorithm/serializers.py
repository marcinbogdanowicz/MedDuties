from django.conf import settings
from rest_framework import serializers


class DayNumberField(serializers.IntegerField):
    def __init__(self, **kwargs):
        super().__init__(min_value=1, max_value=31, **kwargs)


class PositionField(serializers.IntegerField):
    def __init__(self, **kwargs):
        super().__init__(min_value=1, max_value=3, **kwargs)


class DoctorPreferencesSerializer(serializers.Serializer):
    exceptions = serializers.ListField(child=DayNumberField(), allow_empty=True)
    requested_days = serializers.ListField(child=DayNumberField(), allow_empty=True)
    preferred_weekdays = serializers.ListField(
        child=serializers.IntegerField(min_value=0, max_value=6), allow_empty=True
    )
    preferred_positions = serializers.ListField(child=PositionField(), allow_empty=True)
    maximum_accepted_duties = serializers.IntegerField(min_value=1, max_value=settings.MAX_DUTIES_PER_MONTH)

    class Meta:
        fields = [
            'exceptions',
            'requested_days',
            'preferred_weekdays',
            'preferred_positions',
            'maximum_accepted_duties',
        ]


class DoctorSerializer(serializers.Serializer):
    pk = serializers.IntegerField(min_value=1)
    name = serializers.CharField(max_length=30)
    last_month_duties = serializers.ListField(child=DayNumberField(), allow_empty=True)
    next_month_duties = serializers.ListField(child=DayNumberField(), allow_empty=True)
    preferences = DoctorPreferencesSerializer()

    class Meta:
        fields = ['pk', 'name', 'last_month_duties', 'next_month_duties', 'preferences']


class DutySerializer(serializers.Serializer):
    pk = serializers.IntegerField(min_value=1, required=False, allow_null=True)
    doctor_pk = serializers.IntegerField(min_value=1)
    day = DayNumberField()
    position = PositionField()
    strain_points = serializers.IntegerField(min_value=0)
    set_by_user = serializers.BooleanField(default=False)

    class Meta:
        fields = ['pk', 'doctor_pk', 'day', 'position', 'strain_points', 'set_by_user']


class SetDutiesInputSerializer(serializers.Serializer):
    year = serializers.IntegerField(min_value=2000, max_value=2050)
    month = serializers.IntegerField(min_value=1, max_value=12)
    doctors_per_duty = PositionField()
    doctors = DoctorSerializer(many=True)
    duties = DutySerializer(many=True)

    class Meta:
        fields = ['year', 'month', 'doctors_per_duty', 'doctors', 'duties']
