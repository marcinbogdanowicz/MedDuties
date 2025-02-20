from django.db import IntegrityError
from rest_framework import exceptions, status
from rest_framework.views import exception_handler


def custom_exception_handler(exc, context):

    # Handle custom exceptions.
    if isinstance(exc, IntegrityError):
        exc = exceptions.APIException(str(exc))
        exc.status_code = status.HTTP_400_BAD_REQUEST

    # Handle default exceptions.
    response = exception_handler(exc, context)

    return response
