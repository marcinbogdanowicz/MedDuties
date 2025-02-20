from apps.api.views import (
    CreateUserView,
    DoctorDetailView,
    DoctorDutiesListView,
    DoctorListView,
    DoctorMonthlyDataDetailView,
    DoctorMonthlyDataListView,
    DutyDetailView,
    DutyListView,
    LogoutAndBlacklistRefreshTokenForUserView,
    MonthlyDutiesDetailView,
    MonthlyDutiesListView,
    ObtainTokenPairView,
    UnitDetailView,
    UnitListView,
    UserDetailView,
)
from django.urls import path
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('user/create/', CreateUserView.as_view(), name='create_user'),
    path('user/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('token/obtain/', ObtainTokenPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),
    path('unit/', UnitListView.as_view(), name='unit-list'),
    path('unit/<int:unit_pk>/', UnitDetailView.as_view(), name='unit-detail'),
    path('unit/<int:unit_pk>/doctors/', DoctorListView.as_view(), name='doctor-list'),
    path('unit/<int:unit_pk>/doctors/<int:doctor_pk>/', DoctorDetailView.as_view(), name='doctor-detail'),
    path(
        'unit/<int:unit_pk>/doctors/<int:doctor_pk>/duties/', DoctorDutiesListView.as_view(), name='doctor-duties-list'
    ),
    path('unit/<int:unit_pk>/duties/', MonthlyDutiesListView.as_view(), name='monthly-duties-list'),
    path(
        'unit/<int:unit_pk>/duties/<int:year>/<int:month>/',
        MonthlyDutiesDetailView.as_view(),
        name='monthly-duties-detail',
    ),
    path(
        'unit/<int:unit_pk>/duties/<int:year>/<int:month>/settings/',
        DoctorMonthlyDataListView.as_view(),
        name='doctor-monthly-data-list',
    ),
    path(
        'unit/<int:unit_pk>/duties/<int:year>/<int:month>/settings/<int:doctor_monthly_data_pk>/',
        DoctorMonthlyDataDetailView.as_view(),
        name='doctor-monthly-data-detail',
    ),
    path('unit/<int:unit_pk>/duties/<int:year>/<int:month>/duty/', DutyListView.as_view(), name='duty-list'),
    path(
        'unit/<int:unit_pk>/duties/<int:year>/<int:month>/duty/<int:position>/<int:day>/',
        DutyDetailView.as_view(),
        name='duty-detail',
    ),
]
