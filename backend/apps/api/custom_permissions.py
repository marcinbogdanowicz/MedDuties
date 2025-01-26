from apps.api.models import User
from django.utils.translation import gettext_lazy as _
from rest_framework import permissions
from rest_framework_simplejwt.tokens import AccessToken


def get_user_id_from_token(request):
    token = request.headers.get('Authorization')
    if token:
        token = token.strip("JWT ")
        token_data = AccessToken(token)
        return token_data['user_id']
    return None


class IsOwnerOrReadOnlyIfUnitMember(permissions.BasePermission):
    """
    Allows access through GET, HEAD and OPTIONS methods for unit members.
    Requires ownership for other methods.
    """

    message = _('Ownership required to modify model.')

    def has_object_permission(self, request, view, obj):
        id = get_user_id_from_token(request)
        if not id:
            return False
        user = User.objects.get(pk=id)

        # Safe methods.
        if request.method in permissions.SAFE_METHODS:
            return obj.owner.unit == user.unit

        # Other methods.
        return obj.owner == user


class IsOwnerOrIsImpersonatedDoctor(permissions.BasePermission):
    """
    Requires ownership for all methods.
    """

    message = _('Ownership required.')

    def has_object_permission(self, request, view, obj):
        id = get_user_id_from_token(request)
        if not id:
            return False
        user = User.objects.get(pk=id)

        if obj.__class__.__name__ == 'Doctor':
            return obj.owner == user or obj.impersonated_user == user

        if obj.__class__.__name__ == 'DoctorMonthlyData':
            return obj.owner == user or obj.doctor.impersonated_user == user


class IsUser(permissions.BasePermission):
    """
    Requires user to be the queried user object.
    Suitable only for user-detail view.
    """

    message = _('Attempt to access another users data.')

    def has_object_permission(self, request, view, obj):
        id = get_user_id_from_token(request)
        if not id:
            return False
        user = User.objects.get(pk=id)

        return obj == user
