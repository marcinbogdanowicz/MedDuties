#!/usr/bin/bash

docker compose run --rm -w /app/backend -p 8001:8000 django python manage.py "$@"