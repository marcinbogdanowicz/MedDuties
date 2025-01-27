import logging

import requests
from django.conf import settings

logger = logging.getLogger('django')


class AlgorithmAPIClient:
    def __init__(self):
        self.base_url = settings.ALGORITHM_API_URL
        self.headers = {"Content-Type": "application/json"}

    def make_request(self, path: str, method: str, data: dict | None = None) -> dict:
        url = f"{self.base_url}/{path}"
        response = requests.request(method, url, headers=self.headers, json=data)
        try:
            response.raise_for_status()
            return response.json()
        except Exception as e:
            logger.exception(e)
            return {"error": "An error occurred while connecting to the algorithm service."}

    def set_duties(self, data: dict) -> dict:
        return self.make_request("set_duties", "POST", data)
