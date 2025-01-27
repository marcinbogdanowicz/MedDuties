import re

from django.core.exceptions import ValidationError
from django.db import models


def integer_list_max_min_validator(value, min_value, max_value):

    if any(item < min_value or item > max_value for item in value):
        raise ValidationError(f"All items must be between {min_value}", f"and {max_value}, inclusive.")


class IntegerListField(models.CharField):
    """
    Stores integer list as space-separeted string.
    """

    def __init__(self, *args, **kwargs):
        kwargs['default'] = ''
        super().__init__(*args, **kwargs)

    def deconstruct(self):
        name, path, args, kwargs = super().deconstruct()
        del kwargs['default']
        return name, path, args, kwargs

    def get_prep_value(self, value):
        return " ".join(list(map(str, value)))

    def from_db_value(self, value, expression, connection):
        if not value:
            return []
        return list(map(int, value.split()))

    def to_python(self, value):
        if isinstance(value, list):
            return value

        if not value:
            return []

        return list(map(int, value.split()))


def validate_lenght(value):
    if len(value) != 2:
        raise ValidationError('Zbyt wiele elementów.')


def validate_integers(value):
    forbidden_values = []
    for item in value:
        if not isinstance(item, int):
            forbidden_values.append(item)
    if forbidden_values:
        raise ValidationError(f'Elementy: {forbidden_values} nie są liczbami całkowitymi.')


def validate_positive(value):
    forbidden_values = []
    for item in value:
        if item < 0:
            forbidden_values.append(item)
    if forbidden_values:
        raise ValidationError(f'Elementy: {forbidden_values} są ujemne.')


def validate_month(value):
    month = value[0]
    if month not in range(1, 13):
        raise ValidationError(f'{month} nie jest numerem miesiąca.')


def validate_year(value):
    year = value[1]
    digits = len(str(year))
    if digits != 4:
        raise ValidationError(f'Rok powienien mieć dokładnie 4 cyfry - podano {digits}.')


def validate_monthyear(value):
    if isinstance(value, str):
        regex = re.compile(r'^[\[|\(]\d{1,2}\,\s{0,1}\d{4}[\]|\)]$')
        match = regex.match(value)
        if match:
            value = re.findall(r'\d+', value)
            value = list(map(int, value))

    validate_lenght(value)
    validate_integers(value)
    validate_positive(value)
    validate_month(value)
    validate_year(value)


class MonthAndYearField(models.CharField):
    """
    Takes as argument a list or a tuple,
    where first element is month in range 1 - 12
    and second element is year of 4 digits.
    """

    def __init__(self, *args, **kwargs):
        kwargs['validators'] = [validate_monthyear]
        kwargs['max_length'] = 10
        super().__init__(*args, **kwargs)

    def deconstruct(self):
        name, path, args, kwargs = super().deconstruct()
        del kwargs['validators']
        del kwargs['max_length']
        return name, path, args, kwargs

    def get_prep_value(self, value):
        return "/".join(list(map(str, value)))

    def from_db_value(self, value, expression, connection):
        if not value:
            return None
        return list(map(int, value.split(sep='/')))

    def to_python(self, value):
        if isinstance(value, (tuple, list)):
            return value

        if isinstance(value, str):
            regex = re.compile(r'^[\[|\(]\d{1,2}\,\s{0,1}\d{4}[\]|\)]$')
            match = regex.match(value)
            if match:
                value = re.findall(r'\d+', value)
                value = list(map(int, value))
                return value
            return None

        if not value:
            return None

        return list(map(int, value.split(sep='/')))
