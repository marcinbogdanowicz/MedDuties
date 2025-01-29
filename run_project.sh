#!/usr/bin/bash

ALGORITHM_DIR="./algorithm"
REFRESH_ALGORITHM=0

while [ $# -gt 0 ]; do
    case "$1" in
        --refresh)
            REFRESH_ALGORITHM=1
            shift
            ;;
        *)
            shift
            ;;
    esac
done

if [ ! -d "$ALGORITHM_DIR" ] || [ -z "$(ls $ALGORITHM_DIR)" ] || [ "$REFRESH_ALGORITHM" == 1 ]; then
    source fetch_algorithm.sh
    docker compose up -d --build
else
    docker compose up -d
fi