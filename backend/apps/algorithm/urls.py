from apps.algorithm.views import SetDutiesView, ValidateDutiesCanBeSetView
from django.urls import path

urlpatterns = [
    path('set_duties/', SetDutiesView.as_view(), name='set_duties'),
    path('validate_duties_can_be_set/', ValidateDutiesCanBeSetView.as_view(), name='validate_duties_can_be_set'),
]
