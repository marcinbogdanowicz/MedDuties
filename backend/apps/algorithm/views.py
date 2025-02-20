from apps.algorithm.client import AlgorithmAPIClient
from apps.algorithm.serializers import SetDutiesInputSerializer
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response


class BaseAlgorithmProxyView(CreateAPIView):
    api_client_method: str = None

    def post(self, request):
        serializer = SetDutiesInputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        client = AlgorithmAPIClient()
        algorithm_request_method = getattr(client, self.api_client_method)
        response, status_code = algorithm_request_method(data)

        return Response(response, status=status_code)


class SetDutiesView(BaseAlgorithmProxyView):
    api_client_method = 'set_duties'


class ValidateDutiesCanBeSetView(BaseAlgorithmProxyView):
    api_client_method = 'validate_duties_can_be_set'
