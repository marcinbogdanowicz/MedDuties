import responses
from apps.api.models import User
from django.conf import settings
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase


class TestAlgorithmAPI(APITestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create(username='testUser')

    def setUp(self):
        self.algorithm_response = {"message": "Success"}
        responses.post(f"{settings.ALGORITHM_API_URL}/set_duties", json=self.algorithm_response, status=200)

        self.client.force_authenticate(self.user)

    @responses.activate
    def test_success(self):
        valid_data = {
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
                {"pk": 1, "doctor_pk": 1, "day": 1, "position": 1, "strain_points": 20, "set_by_user": True},
                {"pk": None, "doctor_pk": 1, "day": 5, "position": 1, "strain_points": 20, "set_by_user": True},
            ],
        }
        response = self.client.post(reverse('set_duties'), data=valid_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertDictEqual(response.json(), self.algorithm_response)

    @responses.activate
    def test_required_fields(self):
        response = self.client.post(reverse('set_duties'), data={}, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        response_data = response.json()
        self.assertIn('year', response_data)
        self.assertIn('month', response_data)
        self.assertIn('doctors_per_duty', response_data)
        self.assertIn('doctors', response_data)
        self.assertIn('duties', response_data)
