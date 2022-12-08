from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import AbstractUser
from algorithm.constants import *
from .custom_fields import IntegerListField, MonthAndYearField
from django.db.utils import IntegrityError


class User(AbstractUser):
    is_head_doctor = models.BooleanField(blank=True, default=False)
    unit = models.ForeignKey('Unit', on_delete=models.CASCADE, 
                             related_name='users', blank=True, null=True)
    # owned_unit (Unit 1to1)
    # owned_doctors (Doctor)
    # my_doctor (Doctor 1to1)
    # owned_doctors_monthly_data (DoctorMonthlyData)
    # owned_monthly_duties (MonhtlyDuties)
    # owned duties (Duty)

    def __str__(self):
        return f'{self.username}'


class Unit(models.Model):
    name = models.CharField(max_length=20)
    duty_positions = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(3)]) 
    owner = models.OneToOneField('User', on_delete=models.CASCADE,
                                 related_name='owned_unit')
    # doctors (Doctor)
    # monthly_duties (MonthlyDuties)
    # users (User)

    def __str__(self):
        return f'{self.name}'


class Doctor(models.Model):
    name = models.CharField(max_length=100)
    unit = models.ForeignKey(
        'Unit', on_delete=models.CASCADE, related_name='doctors')
    impersonated_user = models.OneToOneField('User', related_name='my_doctor',
                              on_delete=models.CASCADE, blank=True, null=True)
    owner = models.ForeignKey('User', on_delete=models.CASCADE,
                               related_name='owned_doctors')
    # monthly_data (DoctorsMonthlyData)
    # duties (Duty)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['name', 'unit'],
                name='unit-unique-doctor-names',
            )
        ]


class DoctorMonthlyData(models.Model):
    doctor = models.ForeignKey(
        'Doctor', on_delete=models.CASCADE, related_name='monthly_data')
    monthly_duties = models.ForeignKey(
        'MonthlyDuties', on_delete=models.CASCADE, related_name='doctor_data')
    strain = models.PositiveIntegerField(default=0, blank=True)
    max_number_of_duties = models.PositiveIntegerField(
        default=MAX_NUMBER_OF_DUTIES_PER_MONTH, blank=True)
    exceptions = IntegerListField(max_length=90, default=[], blank=True)
    preferred_days = IntegerListField(max_length=90, default=[], blank=True)
    preferred_weekdays = IntegerListField(max_length=60, default=[], blank=True)
    preferred_positions = IntegerListField(max_length=10, default=[], blank=True)
    locked = models.BooleanField(default=False, blank=True)
    owner = models.ForeignKey('User', on_delete=models.CASCADE,
                              related_name='owned_doctors_monthly_data')

    def __str__(self):
        return f'{self.doctor} for {self.monthly_duties}'

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['monthly_duties', 'doctor'],
                name='one-settings-per-monthlyduties',
            )
        ]


class MonthlyDuties(models.Model):
    monthandyear = MonthAndYearField()
    number_of_days = models.PositiveIntegerField(
        validators=[MaxValueValidator(31)])
    first_weekday = models.PositiveIntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(6)])
    duty_positions = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(3)])
    unit = models.ForeignKey(
        'Unit', on_delete=models.CASCADE, related_name='monthly_duties')
    owner = models.ForeignKey('User', on_delete=models.CASCADE,
                              related_name='owned_monthly_duties')
    # doctor_data (DoctorMonthlyData)
    # duties (Duty)

    def __str__(self):
        return f'{self.monthandyear[0]}/{self.monthandyear[1]}'

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['monthandyear', 'unit'],
                name='one-monthlyduties-per-month',
            )
        ]


class Duty(models.Model):
    day = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(31)])
    position = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(3)])
    strain_points = models.PositiveIntegerField()
    doctor = models.ForeignKey('Doctor', on_delete=models.CASCADE, 
                               related_name='duties', blank=True, null=True)
    monthly_duties = models.ForeignKey(
        'MonthlyDuties', on_delete=models.CASCADE, related_name='duties')
    owner = models.ForeignKey('User', on_delete=models.CASCADE,
                              related_name='owned_duties')
    user_set = models.BooleanField(default=False)

    def __str__(self):
        return (f'{self.doctor} on {self.day}/' + 
            f'{self.monthly_duties.monthandyear[0]}/' +
            f'{self.monthly_duties.monthandyear[1]}, pos. {self.position}')

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['day', 'position', 'monthly_duties'],
                name='no-duplicate-duties',
            )
        ]
