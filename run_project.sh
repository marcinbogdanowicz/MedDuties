#!/usr/bin/bash

ALGORITHM_DIR="./algorithm"
RESET=0


while [ $# -gt 0 ]; do
    case "$1" in
        --reset)
            RESET=1
            shift
            ;;
        *)
            shift
            ;;
    esac
done

# Clone algorithm repo if missing
if [ ! -d "$ALGORITHM_DIR" ] || [ -z "$(ls $ALGORITHM_DIR)" ] ; then
    source fetch_algorithm.sh
    docker compose build
fi

if [ "$RESET" == 1 ]; then
    source reset.sh
fi

docker compose up -d