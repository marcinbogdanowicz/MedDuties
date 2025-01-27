#!/usr/bin/bash

set -e

echo "Recreating algorithm directory..."
rm -rf algorithm
mkdir algorithm

git clone git@github.com:marcinbogdanowicz/MedDutiesRevisited.git algorithm

echo "Removing algorithm .git directory..."
rm -rf algorithm/.git

echo "Done."