from __future__ import annotations

import logging
from typing import TYPE_CHECKING

import requests
from django.conf import settings
from rest_framework import status

if TYPE_CHECKING:
    from requests import Response

logger = logging.getLogger('django')


class AlgorithmAPIClient:
    def __init__(self):
        self.base_url = settings.ALGORITHM_API_URL
        self.headers = {"Content-Type": "application/json"}

    def make_request(self, path: str, method: str, data: dict | None = None) -> tuple[dict, int]:
        url = f"{self.base_url}/{path}"
        try:
            response = requests.request(method, url, headers=self.headers, json=data)
        except requests.exceptions.ConnectionError as e:
            logger.exception(e)
            return {"error": "Algorithm service is unavailable."}, status.HTTP_400_BAD_REQUEST

        return self.handle_response(response)

    def handle_response(self, response: Response) -> tuple[dict, int]:
        status_code = response.status_code if response.status_code < 500 else status.HTTP_400_BAD_REQUEST
        try:
            return response.json(), status_code
        except requests.exceptions.JSONDecodeError:
            logger.error(
                f'Request to {response.request.url} failed with status code {response.status_code}. '
                f'Response: {response.text}'
            )
            return {"error": "Request to algorithm service failed."}, status_code

    def set_duties(self, data: dict) -> tuple[dict, int]:
        return self.make_request("set_duties", "POST", data)
