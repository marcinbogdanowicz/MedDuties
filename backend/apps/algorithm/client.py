from __future__ import annotations

import logging
from typing import TYPE_CHECKING

import requests
from django.conf import settings
from urllib3.exceptions import ConnectionError

if TYPE_CHECKING:
    from requests import Response

logger = logging.getLogger('django')


class AlgorithmAPIClient:
    def __init__(self):
        self.base_url = settings.ALGORITHM_API_URL
        self.headers = {"Content-Type": "application/json"}

    def make_request(self, path: str, method: str, data: dict | None = None) -> dict:
        url = f"{self.base_url}/{path}"
        try:
            response = requests.request(method, url, headers=self.headers, json=data)
        except ConnectionError as e:
            logger.exception(e)
            return {"error": "Algorithm service is unavailable."}

        return self.handle_response(response)

    def handle_response(self, response: Response) -> dict:
        if response.status_code >= 400:
            try:
                return response.json()
            except requests.exceptions.JSONDecodeError:
                logger.error(
                    f'Request to {response.request.url} failed with status code {response.status_code}. '
                    f'Response: {response.text}'
                )
                return {"error": "Request to algorithm service failed."}

        return response.json()

    def set_duties(self, data: dict) -> dict:
        return self.make_request("set_duties", "POST", data)
