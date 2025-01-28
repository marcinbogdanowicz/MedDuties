from apps.algorithm.client import AlgorithmAPIClient
from apps.algorithm.serializers import SetDutiesInputSerializer
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response


class SetDutiesView(CreateAPIView):
    def post(self, request):
        serializer = SetDutiesInputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data
        response = AlgorithmAPIClient().set_duties(data)

        response_status = status.HTTP_200_OK if "error" not in response else status.HTTP_400_BAD_REQUEST
        return Response(response, status=response_status)
