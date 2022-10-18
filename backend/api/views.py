from django.http import Http404
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView, 
    RetrieveUpdateAPIView,
)
from rest_framework.response import Response
from .serializers import (
    MyTokenObtainPairSerializer, 
    CreateUserSerializer, 
    UserSerializer,
    UnitSerializer,
    DoctorSerializer,
    MonthlyDutiesSerializer,
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


class ObtainTokenPairView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class CreateUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        serializer = CreateUserSerializer(data=request.data)
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
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UnitListView(ListCreateAPIView):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer


class UnitDetailView(RetrieveUpdateAPIView):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer

    def get_object(self):
        try:
            return Unit.objects.get(pk=self.kwargs['unit_pk'])
        except Unit.DoesNotExist:
            raise Http404


class DoctorListView(ListCreateAPIView):
    serializer_class = DoctorSerializer

    def get_queryset(self):
        try:
            unit = Unit.objects.get(pk=self.kwargs['unit_pk'])
            return Doctor.objects.filter(unit=unit)
        except Unit.DoesNotExist:
            raise Http404


class DoctorDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = DoctorSerializer

    def get_queryset(self):
        try:
            unit = Unit.objects.get(pk=self.kwargs['unit_pk'])
            return Doctor.objects.filter(unit=unit)
        except Unit.DoesNotExist:
            raise Http404

    def get_object(self):
        try:
            return self.get_queryset().get(pk=self.kwargs['doctor_pk'])
        except Doctor.DoesNotExist:
            raise Http404


class MonthlyDutiesListView(ListCreateAPIView):
    serializer_class = MonthlyDutiesSerializer

    def get_queryset(self):
        try:
            unit = Unit.objects.get(pk=self.kwargs['unit_pk'])
            return MonthlyDuties.objects.filter(unit=unit)
        except Unit.DoesNotExist:
            raise Http404


class MonthlyDutiesDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = MonthlyDutiesSerializer

    def get_queryset(self):
        try:
            unit = Unit.objects.get(pk=self.kwargs['unit_pk'])
            return MonthlyDuties.objects.filter(unit=unit)
        except Unit.DoesNotExist:
            raise Http404

    def get_object(self):
        monthandyear = [self.kwargs['month'], self.kwargs['year']]
        try:
            return self.get_queryset().get(monthandyear=monthandyear)
        except MonthlyDuties.DoesNotExist:
            raise Http404


class DoctorMonthlyDataListView(ListCreateAPIView):
    serializer_class = DoctorMonthlyDataSerializer

    def get_queryset(self):
        try:
            unit = Unit.objects.get(pk=self.kwargs['unit_pk'])
        except Unit.DoesNotExist:
            raise Http404

        try:
            monthandyear = [self.kwargs['month'], self.kwargs['year']]
            monthly_duties = MonthlyDuties.objects.get(monthandyear=monthandyear, 
                                                       unit=unit)
        except MonthlyDuties.DoesNotExist:
            raise Http404

        return DoctorMonthlyData.objects.filter(monthly_duties=monthly_duties)


class DoctorMonthlyDataDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = DoctorMonthlyDataSerializer

    def get_queryset(self):
        try:
            unit = Unit.objects.get(pk=self.kwargs['unit_pk'])
        except Unit.DoesNotExist:
            raise Http404

        try:
            monthandyear = [self.kwargs['month'], self.kwargs['year']]
            monthly_duties = MonthlyDuties.objects.get(monthandyear=monthandyear, 
                                                       unit=unit)
        except MonthlyDuties.DoesNotExist:
            raise Http404

        return DoctorMonthlyData.objects.filter(monthly_duties=monthly_duties)

    def get_object(self):
        try:
            return self.get_queryset().get(pk=self.kwargs['doctor_monthly_data_pk'])
        except DoctorMonthlyData.DoesNotExist:
            raise Http404


class DutyListView(ListCreateAPIView):
    serializer_class = DutySerializer

    def get_queryset(self):
        try:
            unit = Unit.objects.get(pk=self.kwargs['unit_pk'])
        except Unit.DoesNotExist:
            raise Http404

        try:
            monthandyear = [self.kwargs['month'], self.kwargs['year']]
            monthly_duties = MonthlyDuties.objects.get(monthandyear=monthandyear, 
                                                       unit=unit)
        except MonthlyDuties.DoesNotExist:
            raise Http404

        return Duty.objects.filter(monthly_duties=monthly_duties)


class DutyDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = DutySerializer

    def get_queryset(self):
        try:
            unit = Unit.objects.get(pk=self.kwargs['unit_pk'])
        except Unit.DoesNotExist:
            raise Http404

        try:
            monthandyear = [self.kwargs['month'], self.kwargs['year']]
            monthly_duties = MonthlyDuties.objects.get(monthandyear=monthandyear, 
                                                       unit=unit)
        except MonthlyDuties.DoesNotExist:
            raise Http404

        return Duty.objects.filter(monthly_duties=monthly_duties)

    def get_object(self):
        try:
            return self.get_queryset().get(day=self.kwargs['day'], 
                                     position=self.kwargs['position'])
        except Duty.DoesNotExist:
            raise Http404
