import requests
from django.conf import settings


class AlgorithmAPIClient:
    def __init__(self):
        self.base_url = settings.ALGORITHM_API_URL
        self.headers = {"Content-Type": "application/json"}

    def make_request(self, path: str, method: str, data: dict | None = None) -> dict:
        url = f"{self.base_url}/{path}"
        response = requests.request(method, url, headers=self.headers, json=data)
        response.raise_for_status()
        return response.json()

    def set_duties(self, data: dict) -> dict:
        return self.make_request("set_duties", "POST", data)
