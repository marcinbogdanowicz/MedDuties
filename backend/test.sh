#!/bin/bash

if [ "${USE_DOCKER}" == "yes" ]; then
    PYTHONDONTWRITEBYTECODE=1 python3 manage.py test "$@"
else
    docker compose run --rm -w /app/backend -p 8001:8000 django /bin/bash -c "./test.sh $*"
fi

exit 0