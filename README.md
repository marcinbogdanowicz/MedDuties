# MedDuties

## Introduction

MedDuties is a complete web app designed for creating schedules of medical shifts.
The app is based on demands of Polish medical system and is designed for use in hospital units.
I decided to undertake the issue of setting fair shifts, based on one of my relatives
experience of biased and unnecessarily strainful schedules. This is also my first portfolio project.

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

## Features

Implemented:
1. Creating unit head account,
2. Creating unit and doctors' profiles,
3. Doctors' preferences, incl.: excluded & preferred days, preferred weekdays, positions (Shift-head, second, third), max no of duties / month,
4. Automated schedule creation using best-first search AI algorithm,
5. Keeps track of user-set duties and sets only remaining ones,
6. Using randomness for creating original schedules based on same prefrences,
7. Month's statistics for schedule-evaluation,
8. Storing schedule in DB,
9. Saving as .xlsx on disk,
10. Global statistics for analyzing doctors' recent workload,
11. Manual & quick start.

To be implemented:
1. Doctors' accounts for letting them enter their preferences and check on new schedules,
2. Holidays statistics for analyzing doctors' load on certain holidays,
3. Possibly other tools for managing: vacations, daily presence/absence, clinic schedule, nurses schedule etc.
