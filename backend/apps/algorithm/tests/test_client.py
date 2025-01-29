from unittest.mock import patch

import requests
import responses
from apps.algorithm.client import AlgorithmAPIClient
from django.conf import settings
from django.test import TestCase
from rest_framework import status


class AlgorithmAPIClientTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.api_client = AlgorithmAPIClient()

    @responses.activate
    def test_make_request_ok(self):
        fake_response_json = {'status': 'ok'}
        responses.post(f'{settings.ALGORITHM_API_URL}/test', json=fake_response_json, status=status.HTTP_200_OK)
        response, status_code = self.api_client.make_request('test', 'POST', {'data': 'test'})
        self.assertEqual(status_code, status.HTTP_200_OK)
        self.assertDictEqual(response, fake_response_json)

    @responses.activate
    def test_make_request_400(self):
        fake_response_json = {'status': 'failed'}
        responses.post(
            f'{settings.ALGORITHM_API_URL}/test', json=fake_response_json, status=status.HTTP_400_BAD_REQUEST
        )
        response, status_code = self.api_client.make_request('test', 'POST', {'data': 'test'})
        self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response, fake_response_json)

    @responses.activate
    def test_make_request_500_text_response(self):
        responses.post(
            f'{settings.ALGORITHM_API_URL}/test',
            body='Internal server error',
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )
        response, status_code = self.api_client.make_request('test', 'POST', {'data': 'test'})
        self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response, {'error': 'Request to algorithm service failed.'})

    @responses.activate
    def test_algorithm_service_unavailable(self):
        responses.post(f'{settings.ALGORITHM_API_URL}/test', body=requests.exceptions.ConnectionError())
        response, status_code = self.api_client.make_request('test', 'POST', {'data': 'test'})
        self.assertEqual(status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response, {'error': 'Algorithm service is unavailable.'})

    @patch('apps.algorithm.client.AlgorithmAPIClient.make_request')
    def test_set_duties(self, mock_make_request):
        data = {'data': 'test'}
        self.api_client.set_duties(data)
        mock_make_request.assert_called_once_with('set_duties', 'POST', data)
