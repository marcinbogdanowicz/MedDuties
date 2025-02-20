# MedDuties

## Introduction

MedDuties is a web app designed for creating duties schedules for hospital units. By implementing a custom best-first search AI algorithm, it reduces the task of creating a new schedule from hours to seconds.

The app was created in 2022/23. 

In early 2025 I translated the algorithm code to Python, refactored it and moved it to a microservice. Algorithm code can now be found in [a separate repo](https://github.com/marcinbogdanowicz/MedDutiesRevisited). The Django app code structure was refactored in the process and integration with the microservice was added. Otherwise the backend code remains unchanged.

## Duty-setting principles and algorithm overview

These topics are described in detail in [the algorithm microservice documentation](https://github.com/marcinbogdanowicz/MedDutiesRevisited?tab=readme-ov-file#duty-setting-principles).

## How to run the project

Running the project requires docker and docker compose.

To run the project, clone this repo and run the following script:

 ```
 ./run_project.sh --reset
 ```

 This will clone the nested [repo](https://github.com/marcinbogdanowicz/MedDutiesRevisited) with algorithm microservice and make migrations.
 
 The app will be available at `http://127.0.0.1:8000`.

 Other convenience scripts:
 - `./reset.sh` - recreates an empty database
 - `./fetch_algorithm.sh` - refetches algorithm repo

## Technologies

- Python 3.11
- Django 4.1.2
- Django Rest Framework 3.14
- Django Rest Framework Simple JWT 5.2.1
- Node 18.8
- React 18.2
- Babel 7.19.6
- webpack 5.74
- React Router 6.4.2
- React Bootstrap 2.5 / Bootstrap 5.2
- js-combinatorics 2.1.1
- axios 1.1.3
- xlsx 0.19.1