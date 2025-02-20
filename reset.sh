#!/usr/bin/bash

docker compose down
docker volume rm medduties_postgres_data || echo "No volume to remove"
source backend/command.sh migrate