#!/usr/bin/bash
set -e

function postgres_ready(){
python << END
import sys
import psycopg2

try:
    conn = psycopg2.connect(user="$POSTGRES_USER", password="$POSTGRES_PASSWORD", host="$POSTGRES_HOST", dbname="$POSTGRES_DB")
except psycopg2.OperationalError:
    sys.exit(-1)
sys.exit(0)
END
}

until postgres_ready; do
    >&2 echo "Waiting for postgres..."
    sleep 1
done

>&2 echo "Postgres ready."

exec "$@"
