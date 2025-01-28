from apps.algorithm.views import SetDutiesView
from django.urls import path

urlpatterns = [
    path('set_duties/', SetDutiesView.as_view(), name='set_duties'),
]
