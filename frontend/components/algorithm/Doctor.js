import { range, getNumberOfWeekdaysInMonth, getWeekday } from './utils';


var MAX_NUMBER_OF_DUTIES_PER_MONTH = (month, year) => Math.floor(new Date(year, month, 0).getDate() / 2);

var MODIFIER_DUTY_IMPOSSIBLE = 10000;
var MODIFIER_TWO_DAYS_APART = 30;
var MODIFIER_THREE_DAYS_APART = 20;
var MODIFIER_FOUR_DAYS_APART = 10;
var MODIFIER_FRI_SUN = -60;
var MODIFIER_THU_SAT = 30;
var MODIFIER_MORE_THAN_TWO_WEEKENDS = 100;
var MODIFIER_LESS_THAN_TWO_WEEKENDS = 50;
var MODIFIER_DONT_STEAL_SUNDAYS = 100;
var MODIFIER_THURSDAY_IS_ORDINARY = 10;
var MODIFIER_SATURDAY_IF_ONE_WEEKEND = -30;
var MODIFIER_NEW_WEEKEND = 200;

var MODIFIER_EACH_WEEKEND = 40;

export var modifiers = {
    DUTY_IMPOSSIBLE: MODIFIER_DUTY_IMPOSSIBLE,
    TWO_DAYS_APART: MODIFIER_TWO_DAYS_APART,
    THREE_DAYS_APART: MODIFIER_THREE_DAYS_APART,
    FOUR_DAYS_APART: MODIFIER_FOUR_DAYS_APART,
    FRI_SUN: MODIFIER_FRI_SUN,
    THU_SAT: MODIFIER_THU_SAT,
    MORE_THAN_TWO_WEEKENDS: MODIFIER_MORE_THAN_TWO_WEEKENDS,
    LESS_THAN_TWO_WEEKENDS: MODIFIER_LESS_THAN_TWO_WEEKENDS,
    DONT_STEAL_SUNDAYS: MODIFIER_DONT_STEAL_SUNDAYS,
    THURSDAY_IS_ORDINARY: MODIFIER_THURSDAY_IS_ORDINARY,
    SATURDAY_IF_ONE_WEEKEND: MODIFIER_SATURDAY_IF_ONE_WEEKEND,
    NEW_WEEKEND: MODIFIER_NEW_WEEKEND
};

class Doctor {
    pk;
    settingsPk;
    name;
    unit;
    duties;
    strain;
    maxNumberOfDuties;
    exceptions;
    preferredDays;
    preferredWeekdays;
    preferredPositions;
    locked;
    prevMonthDuties;
    nextMonthDuties;

    #year;
    #month;

    constructor(name, unit, year, month, pk=null) {
        // Public properties.
        this.pk = pk;
        this.settingsPk = null;
        this.name = name;
        this.unit = unit;
        this.duties = []; 
        this.strain = 0;
        this.maxNumberOfDuties = MAX_NUMBER_OF_DUTIES_PER_MONTH(month, year);
        this.exceptions = [];
        this.preferredDays = [];
        this.preferredWeekdays = range(7);
        this.preferredPositions = unit.dutyPositions;
        this.locked = false;
        this.prevMonthDuties = [];
        this.nextMonthDuties = [];

        this.#year = year;
        this.#month = month;

        // Methods.
        this.getPk = this.getPk.bind(this);
        this.setSettingsPk = this.setSettingsPk.bind(this);
        this.getSettingsPk = this.getSettingsPk.bind(this);
        this.getName = this.getName.bind(this);
        this.addPrevMonthDuty = this.addPrevMonthDuty.bind(this);
        this.addNextMonthDuty = this.addNextMonthDuty.bind(this);
        this.setDuty = this.setDuty.bind(this);
        this.removeDuty = this.removeDuty.bind(this);
        this.getDuties = this.getDuties.bind(this);
        this.setMaxNumberOfDuties = this.setMaxNumberOfDuties.bind(this);
        this.getMaxNumberOfDuties = this.getMaxNumberOfDuties.bind(this);
        this.getNumberOfDutiesLeft = this.getNumberOfDutiesLeft.bind(this);
        this.setStrain = this.setStrain.bind(this);
        this.getStrain = this.getStrain.bind(this);
        this.clearDuties = this.clearDuties.bind(this);
        this.clearStrain = this.clearStrain.bind(this);
        this.setExceptions = this.setExceptions.bind(this);
        this.getExceptions = this.getExceptions.bind(this);
        this.setPreferredDays = this.setPreferredDays.bind(this);
        this.getPreferredDays = this.getPreferredDays.bind(this);
        this.setPreferredWeekdays = this.setPreferredWeekdays.bind(this);
        this.getPreferredWeekdays = this.getPreferredWeekdays.bind(this);
        this.setPreferredPositions = this.setPreferredPositions.bind(this);
        this.getPreferredPositions = this.getPreferredPositions.bind(this);
        this.lockPreferences = this.lockPreferences.bind(this);
        this.isLocked = this.isLocked.bind(this);
        this.getStatistics = this.getStatistics.bind(this);
    }

    getPk() {
        return this.pk;
    }

    setSettingsPk(pk) {
        this.settingsPk = pk;
    }

    getSettingsPk() {
        return this.settingsPk;
    }

    getName() {
        return this.name;
    }

    addPrevMonthDuty(duty) {
        this.prevMonthDuties.push(duty);
    }

    addNextMonthDuty(duty) {
        this.nextMonthDuties.push(duty);
    }

    setDuty(duty) {
        this.duties.push(duty);
    }

    removeDuty(duty) {
        const dutyToRemove = this.duties.find(d => {
            const sameDay = d.getDay().number === duty.getDay().number;
            const samePos = d.getPosition() === duty.getPosition();
            return (sameDay && samePos);
        });
        this.duties = this.duties.filter(d => d !== dutyToRemove);
    }

    getDuties() {
        return this.duties;
    }

    setMaxNumberOfDuties(number) {
        this.maxNumberOfDuties = number;
        this.#updateMaxNumberOfDuties();
    }

    getMaxNumberOfDuties() {
        return this.maxNumberOfDuties;
    }

    getNumberOfDutiesLeft(duties=null) {
        if (!duties) {
            return this.maxNumberOfDuties - this.duties.length;
        }
        let myDuties = (
            [...duties.values()]
            .map(elem => Object.values(elem))
            .flat()
            .filter(duty => {
                const doctor = duty.getDoctor();
                if (doctor) {
                    return doctor.pk === this.pk;
                }
                return false;
            })
            .map(duty => duty.day.number)
        );

        const thisDutyDates = this.duties.map(d => d.day.number);
        myDuties = myDuties.filter(date => !thisDutyDates.includes(date));

        return this.maxNumberOfDuties - myDuties.length - thisDutyDates.length;
    }

    setStrain(strain) {
        this.strain += strain;
    }

    getStrain() {
            return this.strain;
    }

    clearDuties(clearUserSetToo=false) {
        if (clearUserSetToo) {
            this.duties = [];
        } else {
            this.duties = this.duties.filter(duty => duty.isSetByUser() === true);
        }
    }

    clearStrain(clearUserSetToo=false) {
        if (clearUserSetToo) {
            this.strain = 0;
        } else {
            this.strain = (this.duties
                .filter(duty => duty.isSetByUser() === true)
                .reduce((prevVal, currDuty) => prevVal + currDuty.getStrain(), 0));
        }
    }

    setExceptions(exceptionList) {
        exceptionList.sort();
        this.exceptions = exceptionList;
    }

    getExceptions() {
        return this.exceptions;
    }

    setPreferredDays(daysList) {
        daysList.sort();
        this.preferredDays = daysList;
        this.#updateMaxNumberOfDuties();
    }

    getPreferredDays() {
        return this.preferredDays;
    }

    setPreferredWeekdays(weekdaysList) {
        weekdaysList.sort();
        this.preferredWeekdays = weekdaysList;
        this.#updateMaxNumberOfDuties();
    }

    getPreferredWeekdays() {
        return this.preferredWeekdays;
    }

    #updateMaxNumberOfDuties() {
        /* It may be a problem when setting duties, if a doctor has a high 
        max number of duties and there are not as many weekdays in month 
        which he accepts.
        This function is ran whenever max number of duties 
        or preferred weekdays are set to ensure that max number of duties 
        is not higher then number of available days. */
        if (this.preferredWeekdays.length > 3) { 
            return;
        }

        const preferredWeekdaysInMonth = getNumberOfWeekdaysInMonth(
            this.#year, this.#month, this.preferredWeekdays);

        const preferredDaysOnUnpreferredWeekdays = (
            this.preferredDays.reduce((sum, prefDay) => {
                const weekday = getWeekday(this.#year, this.#month, prefDay);
                if (!this.preferredWeekdays.includes(weekday)) {
                    return sum + 1;
                }
            }, 0)
        );

        const acceptedDaysInMonth = preferredWeekdaysInMonth + preferredDaysOnUnpreferredWeekdays

        if (this.maxNumberOfDuties > acceptedDaysInMonth) {
            this.setMaxNumberOfDuties(acceptedDaysInMonth);
        } else if (this.maxNumberOfDuties < this.preferredDays.length || !this.preferredWeekdays.length) {
            this.setMaxNumberOfDuties(this.preferredDays.length);
        }
    }

    setPreferredPositions(positionList) {
        positionList.sort();
        this.preferredPositions = positionList;
    }

    getPreferredPositions() {
        return this.preferredPositions;
    }

    lockPreferences() {
        this.locked = true;
    }

    isLocked() {
        return this.locked;
    }

    getStatistics() {
        const byDate = (dutyA, dutyB) => dutyA.getDay().number - dutyB.getDay().number;
        const myDuties = this.duties.sort(byDate);
        const myDutysDates = this.duties.map(duty => duty.getDay().number);

        const statistics = {
            name: this.name,
            duties: myDuties.length,
            strain: 0,
            weekends: new Set(),
            weekendDays: 0,
            holidays: 0,
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
        };

        myDuties.forEach(duty => {
            const day = duty.getDay();
            const today = day.number;

            // Compute strain.
            statistics.strain += day.strainPoints;
            const modifier = {
                2: MODIFIER_TWO_DAYS_APART,
                3: MODIFIER_THREE_DAYS_APART,
                4: MODIFIER_FOUR_DAYS_APART
            };
            range(2,5).forEach(number => {
                if (myDutysDates.includes(today+number)) {
                    statistics.strain += modifier[number];
                }
            });
            const iDontTakeDutiesOnWeekends = !(
                (5 in this.preferredWeekdays) || (6 in this.preferredWeekdays));
            if (iDontTakeDutiesOnWeekends && day.weekday === 3) {
                statistics.strain += MODIFIER_THURSDAY_IS_ORDINARY;
            }

            // Count weekdays.
            statistics[day.weekday]++;

            // Count weekends and weekend days
            const itIsWeekend = [4,5,6].includes(day.weekday);
            if (itIsWeekend) {
                statistics.weekends.add(day.week);
                statistics.weekendDays++;
            }

            // Count holidays.
            const itIsHoliday = day.category === 'holiday';
            if (itIsHoliday) {
                statistics.holidays++;
            }
        });

        // Count weekends
        statistics.weekends = statistics.weekends.size;

        // Add strain for each weekend.
        statistics.strain += statistics.weekends * MODIFIER_EACH_WEEKEND;

        return statistics;
    }
}

export default Doctor;
