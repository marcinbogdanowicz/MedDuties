import { range } from './utils';
import Day from './Day';
import Duty from './Duty';

class MonthlyDuties {
    pk;
    days;
    month;
    year;
    doctors;
    preferences;
    dutyPositions;
    duties;
    prevMonthDuties;
    nextMonthDuties;

    constructor(year, month, unit, pk=null) {
        this.pk = pk;
        const numberOfDays = new Date(year, month, 0).getDate();
        this.days = range(1,numberOfDays+1).map(
            day => new Day(year, month, day));
        this.month = month;
        this.year = year;
        this.doctors = unit.doctors;
        this.preferences = {};
        this.dutyPositions = unit.dutyPositions;

        this.duties = new Map();
        for (const day of this.days) {
            const dailyDuties = {};
            for (const position of this.dutyPositions) {
                const duty = new Duty(day, null, position, day.strainPoints, null, false);
                dailyDuties[position] = duty;
            }
            this.duties.set(day, dailyDuties);
        }

        this.prevMonthDuties = [];
        this.nextMonthDuties = [];

        this.getPk = this.getPk.bind(this);
        this.addDoctors = this.addDoctors.bind(this);
        this.removeDoctor = this.removeDoctor.bind(this);
        this.addPrevMonthDuties = this.addPrevMonthDuties.bind(this);
        this.getPrevMonthDuties = this.getPrevMonthDuties.bind(this);
        this.addNextMonthDuties = this.addNextMonthDuties.bind(this);
        this.getNextMonthDuties = this.getNextMonthDuties.bind(this);
        this.clearDuties = this.clearDuties.bind(this);
        this.getDays = this.getDays.bind(this);
        this.getMonth = this.getMonth.bind(this);
        this.getYear = this.getYear.bind(this);
        this.getDay = this.getDay.bind(this);
        this.getDuty = this.getDuty.bind(this);
        this.getDuties = this.getDuties.bind(this);

        this.updatePreferences = this.updatePreferences.bind(this);
        this.getPreferences = this.getPreferences.bind(this);
        this._removeDoctorDuties = this._removeDoctorDuties.bind(this);
        this.getStatistics = this.getStatistics.bind(this);
    }

    getPk() {
        return this.pk;
    }

    addDoctors(doctorList) {
        this.doctors = this.doctors.concat(doctorList);
    }

    addDuties(dutyList) {
        dutyList.forEach(newDuty => {
            // Make sure day instance is equal to one stored in MD instance.
            const date = newDuty.getDay().number;
            const position = newDuty.getPosition();
            const day = this.getDay(date);
            newDuty.day = day;

            // Remove old duty from its doctor if there is one.
            const oldDuty = this.duties.get(day)[position];
            const oldDoctor = oldDuty.getDoctor();
            if (oldDoctor) {
                oldDoctor.removeDuty(oldDuty);
                oldDoctor.setStrain(-oldDuty.getStrain());
            }

            // Set new duty.
            this.duties.get(day)[position] = newDuty;

            // Set new duty for doctor if there is one.
            const newDoctor = newDuty.getDoctor();
            if (newDoctor) {
                newDoctor.setDuty(newDuty);
                newDoctor.setStrain(newDuty.getStrain());
            }
        });
    }

    removeDoctor(pk) {
        const doctor = this.doctors.find(doc => doc.pk === pk);
        doctor.clearDuties();
        doctor.clearStrain();

        this._removeDoctorDuties(doctor, true);

        this.doctors = this.doctors.filter(doctor => !(doctor.pk === pk));
    }

    _removeDoctorDuties(doctor, clearUserSetToo=false) {
        for (const day of this.days) {
            for (const duty of Object.values(this.duties.get(day))) {
                if ((!duty.isSetByUser() || clearUserSetToo)
                        && duty.getDoctor() === doctor) {
                    duty.setDoctor(null);
                    duty.userSet(false);
                }
            }
        }
    }

    changeDoctor(duty, newDoctor, userSet=false) {
        // Remove doctor from conflicting duties.
        if (newDoctor) {
            const date = duty.getDay().number;
            [date-1, date, date+1].forEach(dayNumber => {
                if (dayNumber < 1 || dayNumber > this.days.length) {
                    return;
                }
                const day = this.getDay(dayNumber);
                this.dutyPositions.forEach(position => {
                    const otherDuty = this.duties.get(day)[position];
                    const doc = otherDuty.getDoctor();
                    if (doc === newDoctor) {
                        this.changeDoctor(otherDuty, null);
                    }
                });
            });
        }
        // Change doctor and save in duty and doctor instances.
        const oldDoctor = duty.getDoctor();
        duty.setDoctor(newDoctor);
        duty.userSet(userSet);
        oldDoctor && oldDoctor.removeDuty(duty);
        newDoctor && newDoctor.setDuty(duty);
    }

    addPrevMonthDuties(dutyList) {
        for (const duty of dutyList) {
            this.prevMonthDuties.push(duty);
            const doctor = duty.getDoctor();
            if (doctor !== null) {
                doctor.addPrevMonthDuty(duty);
            }
        }
    }

    getPrevMonthDuties() {
        return this.prevMonthDuties;
    }

    addNextMonthDuties(dutyList) {
        for (const duty of dutyList) {
            this.nextMonthDuties.push(duty);
            const doctor = duty.getDoctor();
            if (doctor !== null) {
                doctor.addNextMonthDuty(duty);
            }
        }
    }

    getNextMonthDuties() {
        return this.nextMonthDuties;
    }

    updatePreferences(includeDuties=false) {
        const preferences = {};

        // Create template - each doctor prefers all days on all positions.
        this.days.forEach(day => {
            const preferencePerPosition = {};

            this.dutyPositions.forEach(position => {
                preferencePerPosition[position] = this.doctors;
            });
            preferences[day.number] = preferencePerPosition;
        });

        // Delete non-existent preferences.
        this.doctors.forEach(doctor => {
            const exceptions = doctor.getExceptions();
            const prefPositions = doctor.getPreferredPositions();
            const prefWeekdays = doctor.getPreferredWeekdays();
            const prefDays = doctor.getPreferredDays();
            const dutyDates = doctor.getDuties().map(d => d.day.number);

            for (const day of this.days) {
                const date = day.number;
                const dutyOnAdjacentDay = (
                    dutyDates.includes(date + 1) || dutyDates.includes(date - 1)
                );
                const adjacentPrefDay = (
                    prefDays.includes(date + 1) || prefDays.includes(date - 1)
                );

                for (const position of this.dutyPositions) {
                    if (adjacentPrefDay) {
                        preferences[date][position] = (
                            preferences[date][position].filter(d => d !== doctor));
                        continue;
                    }
                    if (dutyOnAdjacentDay && includeDuties) {
                        preferences[date][position] = (
                            preferences[date][position].filter(d => d !== doctor));
                        continue;
                    }
                    if (!prefPositions.includes(position)) {
                        preferences[date][position] = (
                            preferences[date][position].filter(d => d !== doctor));
                        continue;
                    }
                    if (!prefWeekdays.includes(day.weekday) &&
                            !prefDays.includes(day.number)) {
                        preferences[date][position] = (
                            preferences[date][position].filter(d => d !== doctor));
                        continue;
                    }
                    if (exceptions.includes(day.number)) {
                        preferences[date][position] = (
                            preferences[date][position].filter(d => d !== doctor));
                        continue;
                    }
                }
            }
        });

        // Also save all doctors who can take duty on any position of each day.
        for (const day of this.days) {
            preferences[day.number]['all'] = [...new Set(
                Object.values(preferences[day.number])
                .reduce((prevVal, currval) => prevVal.concat(currval), [])
            )];
        }

        // Save and return.
        this.preferences = preferences;

        return preferences;
    }

    getPreferences() {
        return this.preferences;
    }

    clearDuties(clearUserSetToo=false) {
        for (const doctor of this.doctors) {
            doctor.clearDuties(clearUserSetToo);
            doctor.clearStrain(clearUserSetToo);
            this._removeDoctorDuties(doctor, clearUserSetToo);
        }
    }

    getDays() {
        return this.days;
    }

    getYear() {
        return this.year;
    }

    getMonth() {
        return this.month;
    }

    getDuties() {
        return this.duties;
    }

    getDuty(dayNumber, position) {
        const day = this.getDay(dayNumber);
        return this.duties.get(day)[position];
    }

    getDay(dayNumber) {
        return this.days[dayNumber-1];
    }

    getStatistics() {
        const statistics = [];
        this.doctors.forEach(doctor => {
            statistics.push(doctor.getStatistics());
        });
        const total = statistics.reduce((prev, item) => {
            Object.entries(item).forEach(entry => {
                const name = entry[0];
                const value = entry[1];
                if (name !== 'name') {
                    prev[name] += value;
                }
            });
            return prev;
        },{
            name: 'Razem',
            duties: 0,
            strain: 0,
            weekends: 0,
            weekendDays: 0,
            holidays: 0,
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
        });
        statistics.push(total);

        return statistics;
    }
}

export default MonthlyDuties;
