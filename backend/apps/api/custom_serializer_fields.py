import re

from apps.api.models import Unit
from django.http import Http404
from rest_framework import serializers
from rest_framework.reverse import reverse


class DoctorsListHyperlink(serializers.HyperlinkedIdentityField):

    def get_url(self, obj, view_name, request, format):
        url_kwargs = {
            'unit_pk': obj.pk,
        }
        return reverse(view_name, kwargs=url_kwargs, request=request, format=format)


class MonthlyDutiesListHyperlink(serializers.HyperlinkedIdentityField):

    def get_url(self, obj, view_name, request, format):
        url_kwargs = {
            'unit_pk': obj.pk,
        }
        return reverse(view_name, kwargs=url_kwargs, request=request, format=format)


class MonthlyDataListHyperlink(serializers.HyperlinkedIdentityField):

    def get_url(self, obj, view_name, request, format):
        url_kwargs = {
            'unit_pk': obj.unit.pk,
            'month': obj.monthandyear[0],
            'year': obj.monthandyear[1],
        }
        return reverse(view_name, kwargs=url_kwargs, request=request, format=format)


class DutyListHyperlink(serializers.HyperlinkedIdentityField):

    def get_url(self, obj, view_name, request, format):
        url_kwargs = {
            'unit_pk': obj.unit.pk,
            'month': obj.monthandyear[0],
            'year': obj.monthandyear[1],
        }
        return reverse(view_name, kwargs=url_kwargs, request=request, format=format)

    def get_object(self, view_name, view_args, view_kwargs):
        try:
            unit = Unit.objects.get(pk=view_kwargs['unit_pk'])
        except Unit.DoesNotExist:
            raise Http404

        lookup_kwargs = {'monthly_duties__unit': unit, 'position': view_kwargs['position'], 'day': view_kwargs['day']}
        return self.get_queryset().get(**lookup_kwargs)


class IntegerListField(serializers.Field):
    """
    Stores integer list as space-separeted string.
    """

    def to_representation(self, value):
        return " ".join(list(map(str, value)))

    def to_internal_value(self, data):
        if isinstance(data, str):
            regex = re.compile('^(\d{1,2} )*(\d{1,2}){0,1}$')
            match = regex.match(data)
            if match:
                data = re.findall('\d{1,2}', data)
                data = list(map(int, data))
                return data
        raise serializers.ValidationError('Nieprawidłowy format danych. Oczekiwano: "1 2 7 ... 10 26..."')


class MonthAndYearField(serializers.Field):
    """
    Takes as argument a list or a tuple,
    where first element is month in range 1 - 12
    and second element is year of 4 digits.
    """

    def to_representation(self, value):
        return "/".join(list(map(str, value)))

    def to_internal_value(self, data):
        if isinstance(data, str):
            regex = re.compile('^\d{1,2}\/\d{4}$')
            match = regex.match(data)
            if match:
                data = re.split('/', data)
                data = list(map(int, data))
                return data
        raise serializers.ValidationError('Nieprawidłowy format danych. Oczekiwano: "MM/YYYY"')
