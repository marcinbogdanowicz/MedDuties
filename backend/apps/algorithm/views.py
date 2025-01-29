from apps.algorithm.client import AlgorithmAPIClient
from apps.algorithm.serializers import SetDutiesInputSerializer
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response


class SetDutiesView(CreateAPIView):
    def post(self, request):
        serializer = SetDutiesInputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data
        response, status_code = AlgorithmAPIClient().set_duties(data)

        return Response(response, status=status_code)
