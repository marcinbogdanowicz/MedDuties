import responses
from apps.api.models import User
from django.conf import settings
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase


class BaseAlgorithmProxyViewTestMixin:
    api_endpoint_name = None
    algorithm_endpoint_path = None
    success_algorithm_response = None

    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create(username='testUser')
        cls.correctly_formatted_data = {
            "year": 2025,
            "month": 1,
            "doctors_per_duty": 1,
            "doctors": [
                {
                    "pk": 1,
                    "name": "Elizabeth Davis",
                    "preferences": {
                        "exceptions": [],
                        "requested_days": [],
                        "preferred_weekdays": [0, 1, 2, 3, 4, 5, 6],
                        "preferred_positions": [1],
                        "maximum_accepted_duties": 15,
                    },
                    "last_month_duties": [],
                    "next_month_duties": [],
                },
            ],
            "duties": [
                {"pk": 1, "doctor": 1, "day": 1, "position": 1, "strain_points": 20, "set_by_user": True},
                {"pk": 2, "doctor": None, "day": 5, "position": 1, "strain_points": 20, "set_by_user": True},
            ],
            "locale": "pl",
        }

    def setUp(self):
        self.response_mock = responses.RequestsMock(assert_all_requests_are_fired=False)
        self.response_mock.start()
        self.response_mock.post(
            f"{settings.ALGORITHM_API_URL}/{self.algorithm_endpoint_path}",
            json=self.success_algorithm_response,
            status=200,
        )

        self.client.force_authenticate(self.user)

    def tearDown(self):
        self.response_mock.stop()
        self.response_mock.reset()

    def test_success(self):
        response = self.client.post(reverse(self.api_endpoint_name), data=self.correctly_formatted_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertDictEqual(response.json(), self.success_algorithm_response)

    def test_required_fields(self):
        response = self.client.post(reverse(self.api_endpoint_name), data={}, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        response_data = response.json()
        self.assertIn('year', response_data)
        self.assertIn('month', response_data)
        self.assertIn('doctors_per_duty', response_data)
        self.assertIn('doctors', response_data)
        self.assertIn('duties', response_data)


class TestAlgorithmSetDutiesAPI(BaseAlgorithmProxyViewTestMixin, APITestCase):
    api_endpoint_name = 'set_duties'
    algorithm_endpoint_path = 'set_duties'
    success_algorithm_response = {"fake_message": "Success"}


class TestAlgorithmValidateDutiesAPI(BaseAlgorithmProxyViewTestMixin, APITestCase):
    api_endpoint_name = 'validate_duties_can_be_set'
    algorithm_endpoint_path = 'validate_duties_can_be_set'
    success_algorithm_response = {"errors": []}
