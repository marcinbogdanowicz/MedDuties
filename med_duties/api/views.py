from django.shortcuts import get_object_or_404
from django.utils.translation import gettext as _
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import permissions, status, exceptions
from rest_framework.views import APIView
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView, 
    RetrieveUpdateAPIView,
)
from rest_framework.response import Response
from .serializers import (
    UserSerializer,
    UnitSerializer,
    DoctorSerializer,
    MonthlyDutiesSerializer,
    MonthlyDutiesListSerializer,
    DoctorMonthlyDataSerializer,
    DutySerializer
)
from .models import (
    User,
    Unit,
    Doctor,
    MonthlyDuties,
    DoctorMonthlyData,
    Duty
)
from . import custom_permissions


class ObtainTokenPairView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = TokenObtainPairSerializer


class CreateUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserDetailView(RetrieveUpdateDestroyAPIView):
    """
    Returns details of a single user.
    Accessible by that user only.
    """
    permission_classes = (custom_permissions.IsUser, permissions.IsAuthenticated)

    queryset = User.objects.all()
    serializer_class = UserSerializer


class UnitListView(ListCreateAPIView):
    """
    Lists all units user belongs to.
    """
    serializer_class = UnitSerializer

    def get_queryset(self):
        if self.request.user.unit is not None:
            return Unit.objects.filter(owner=self.request.user.unit.owner)
        raise exceptions.PermissionDenied('User does not belong to any Unit.')


class UnitDetailView(RetrieveUpdateAPIView):
    """
    Returns details of single unit.
    Accessible by unit members only.
    """
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer

    def get_object(self):
        obj = get_object_or_404(Unit, pk=self.kwargs['unit_pk'])
        self.check_object_permissions(self.request, obj)
        return obj


class DoctorListView(ListCreateAPIView):
    """
    Returns a list of all unit doctors.
    Accessible by unit members only.
    """
    serializer_class = DoctorSerializer

    def get_queryset(self):
        if self.request.user.unit is not None:
            unit = get_object_or_404(Unit, pk=self.kwargs['unit_pk'], 
                                     owner=self.request.user.unit.owner)
            return Doctor.objects.filter(unit=unit)
        raise exceptions.PermissionDenied('User does not belong to any unit.')


class DoctorDetailView(RetrieveUpdateDestroyAPIView):
    """
    Returns details of a single doctor.
    Accessible by unit members only.
    """
    permission_classes = (permissions.IsAuthenticated, 
                          custom_permissions.IsOwnerOrIsImpersonatedDoctor)
    serializer_class = DoctorSerializer

    def get_queryset(self):
        unit = get_object_or_404(Unit, pk=self.kwargs['unit_pk'])
        return Doctor.objects.filter(unit=unit)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), pk=self.kwargs['doctor_pk'])
        self.check_object_permissions(self.request, obj)
        return obj


class MonthlyDutiesListView(ListCreateAPIView):
    """
    Returns all unit's monthly duties objects.
    Accessible only by unit members.
    """
    def get_serializer_class(self):
        if self.request.method == "POST":
            return MonthlyDutiesSerializer
        elif self.request.method == "GET":
            return MonthlyDutiesListSerializer

    def get_queryset(self):
        if self.request.user.unit is not None:
            unit = get_object_or_404(Unit, pk=self.kwargs['unit_pk'], 
                                     owner=self.request.user.unit.owner)
            return MonthlyDuties.objects.filter(unit=unit)
        raise exceptions.PermissionDenied('User does not belong to any unit.')


class MonthlyDutiesDetailView(RetrieveUpdateDestroyAPIView):
    """
    Returns monthly duties object.
    Accessible only by  unit members.
    """
    serializer_class = MonthlyDutiesSerializer

    def get_queryset(self):
        unit = get_object_or_404(Unit, pk=self.kwargs['unit_pk'])
        return MonthlyDuties.objects.filter(unit=unit)

    def get_object(self):
        monthandyear = [self.kwargs['month'], self.kwargs['year']]
        obj = get_object_or_404(self.get_queryset(), monthandyear=monthandyear)
        self.check_object_permissions(self.request, obj)
        return obj

    # Exclude PATCH method
    def patch(self, request, *args, **kwargs):
        raise exceptions.MethodNotAllowed(request.method)


class DoctorMonthlyDataListView(ListCreateAPIView):
    """
    Returns list of doctors' settings for given month.
    Single doctor can only view his settings.
    Head doctor can view all doctors' settings.
    """
    serializer_class = DoctorMonthlyDataSerializer

    def get_queryset(self):
        if self.request.user.unit is not None:
            unit = get_object_or_404(Unit, pk=self.kwargs['unit_pk'], 
                                     owner=self.request.user.unit.owner)

            monthandyear = [self.kwargs['month'], self.kwargs['year']]
            monthly_duties = get_object_or_404(MonthlyDuties,
                                               monthandyear=monthandyear, 
                                               unit=unit,
                                               owner=self.request.user.unit.owner)

            # For users who are head doctors, return all unit doctors' monthly data.
            if self.request.user.is_head_doctor:
                return DoctorMonthlyData.objects.filter(
                    monthly_duties=monthly_duties, owner=self.request.user)

            # For users who are doctors, return their monthly data only.            
            if self.request.user.my_doctor is not None:
                return DoctorMonthlyData.objects.filter(
                    monthly_duties=monthly_duties, doctor=self.request.user.my_doctor)

            raise exceptions.PermissionDenied('User is neither a doctor nor unit head.')

        raise exceptions.PermissionDenied('User does not belong to any unit.')


class DoctorMonthlyDataDetailView(RetrieveUpdateDestroyAPIView):
    """
    Returns single doctor's settings for one month.
    Accessible only by doctor and unit head.
    """
    permission_classes = (permissions.IsAuthenticated, 
                          custom_permissions.IsOwnerOrIsImpersonatedDoctor)
    serializer_class = DoctorMonthlyDataSerializer

    def get_queryset(self):
        unit = get_object_or_404(Unit, pk=self.kwargs['unit_pk'])
        monthandyear = [self.kwargs['month'], self.kwargs['year']]
        monthly_duties = get_object_or_404(MonthlyDuties, 
                                        monthandyear=monthandyear, unit=unit)
        return DoctorMonthlyData.objects.filter(monthly_duties=monthly_duties)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), 
            pk=self.kwargs['doctor_monthly_data_pk'])
        self.check_object_permissions(self.request, obj)
        return obj


class DutyListView(ListCreateAPIView):
    """
    Returns list of duties for given month.
    Accessible only be unit members.
    """
    serializer_class = DutySerializer

    def get_queryset(self):
        if self.request.user.unit is not None:
            unit = get_object_or_404(Unit, pk=self.kwargs['unit_pk'])
            monthandyear = [self.kwargs['month'], self.kwargs['year']]
            monthly_duties = get_object_or_404(MonthlyDuties, 
                monthandyear=monthandyear, unit=unit)
            return Duty.objects.filter(monthly_duties=monthly_duties,
                                       owner=self.request.user.unit.owner)
        raise exceptions.PermissionDenied('User does not belong to any unit.')


class DutyDetailView(RetrieveUpdateDestroyAPIView):
    """
    Returns a single duty.
    Accessible only by unit members.
    """
    serializer_class = DutySerializer

    def get_queryset(self):
        unit = get_object_or_404(Unit, pk=self.kwargs['unit_pk'])
        monthandyear = [self.kwargs['month'], self.kwargs['year']]
        monthly_duties = get_object_or_404(
            MonthlyDuties, monthandyear=monthandyear, unit=unit)
        return Duty.objects.filter(monthly_duties=monthly_duties)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), 
                                day=self.kwargs['day'], 
                                position=self.kwargs['position'])
        self.check_object_permissions(self.request, obj)
        return obj
