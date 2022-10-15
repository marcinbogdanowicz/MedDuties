from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import User, Unit


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)
        token['is_head_doctor'] = user.is_head_doctor
        return token


class CreateUserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(min_length=8, write_only=True)
    unit = serializers.CharField()

    class Meta:
        model = User
        fields = ('username', 'password', 'is_head_doctor', 'unit')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        unit_name = validated_data.pop('unit')

        password = validated_data.pop('password', None)
        user = self.Meta.model(**validated_data)
        if password is not None:
            user.set_password(password)
        user.save()

        unit = Unit(name=unit_name, owner=user)
        unit.save()

        return user


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        min_length=8, 
        write_only=True
    )
    unit = serializers.HyperlinkedRelatedField(
        many=False, 
        view_name='unit-detail'
    )
    doctors = serializers.HyperlinkedRelatedField(
        many=True, 
        view_name='doctor-detail', 
        allow_null=True
    )

    class Meta:
        model = User
        fields = ('username', 'password', 'is_head_doctor', 'unit', 'doctors')
        extra_kwargs = {'password': {'write_only': True}}


class UnitSerializer(serializers.ModelSerializer):
    ...


"""
TODO: find the best way to represent data.
Maybe: 
Unit with all its Doctors (nested relationship).

MonthlyDuties with all MonthlyData and Duties (nested relationship).

Doctor with no nesting, MonthlyData represented by monthandyear.

MonthlyData with no nesting, Doctor represented by name, MonthlyDuties
represented by monthandyear, duties represented by day.

Duty with no nesting, MonthlyData represented by Doctor (name), MonthlyDuties
represented by monthandyear.
"""
