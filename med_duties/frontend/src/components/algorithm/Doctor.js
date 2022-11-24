import { range, getNumberOfWeekdaysInMonth } from './utils';
import EvaluationChart from './EvaluationChart';


/*
TODO

Getting modifiers implied by previous month's last duties
is not implemented. Those should be provided outside Doctor class
and passed to it.
There need to be means for warning user of incompatibility
between schedules, if a previous one is modified.
*/

var MAX_NUMBER_OF_DUTIES_PER_MONTH = 15;

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
    SATURDAY_IF_ONE_WEEKEND: MODIFIER_SATURDAY_IF_ONE_WEEKEND
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

    #maxNumberOfDutiesInit;
    #exceptionsInit;
    #preferredDaysInit;
    #preferredWeekdaysInit;
    #preferredPositionsInit;
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
        this.maxNumberOfDuties = MAX_NUMBER_OF_DUTIES_PER_MONTH;
        this.exceptions = [];
        this.preferredDays = [];
        this.preferredWeekdays = range(7);
        this.preferredPositions = unit.dutyPositions;
        this.locked = false;

        // Private properties.
        // Initial properties - set be user, not affected by changes
        // made by schedule class algorithm during execution.
        this.#maxNumberOfDutiesInit = MAX_NUMBER_OF_DUTIES_PER_MONTH;
        this.#exceptionsInit = [];
        this.#preferredDaysInit = [];
        this.#preferredWeekdaysInit = range(7);
        this.#preferredPositionsInit = unit.dutyPositions;
        this.#year = year;
        this.#month = month;

        // Methods.
        this.setPk = this.setPk.bind(this);
        this.getPk = this.getPk.bind(this);
        this.setSettingsPk = this.setSettingsPk.bind(this);
        this.getSettingsPk = this.getSettingsPk.bind(this);
        this.getName = this.getName.bind(this);
        this.evaluateDuties = this.evaluateDuties.bind(this);
        this.setDuty = this.setDuty.bind(this);
        this.getDuties = this.getDuties.bind(this);
        this.getNumberOfDuties = this.getNumberOfDuties.bind(this);
        this.getWeekendsOnDuty = this.getWeekendsOnDuty.bind(this);
        this.getNumberOfDutiesOnWeekends = this.getNumberOfDutiesOnWeekends.bind(this)
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
        this.restoreInit = this.restoreInit.bind(this);
    }

    setPk(pk) {
        this.pk = pk;
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

    evaluateDuties(month, position) {
        const iHaveReachedMaxNumberOfDuties = this.getNumberOfDutiesLeft() <= 0;
        if (iHaveReachedMaxNumberOfDuties) {
            return null;
        }

        const daysOfMonth = month.getDays();

        const evaluationChart = new EvaluationChart(daysOfMonth, this);

        // Get previous month's modifiers method was called here originally.

        for (const day of daysOfMonth) {

            const today = day.number;
            const itIsFriday = day.weekday === 4;
            const itIsThursday = day.weekday === 3;
            const itIsSaturday = day.weekday === 5;
            const itIsSunday = day.weekday === 6;
            const itIsWeekend = day.category === 'weekend';

            const dutyImpossible = evaluationChart.getDayStrain(today) >= 10000;
            const iMadeExceptionForToday = this.getExceptions().includes(today);
            const iDontTakeDutiesOnThisWeekday = (
                !this.getPreferredWeekdays().includes(day.weekday));
            const dutyOnThisPositionTaken = (
                month.whoIsOnDuty(today)[position] !== null);
            const iAmOnDutyOnAnyPosition = Object.values(month.whoIsOnDuty(today)).some(entry => {
                    if (entry !== null) {
                        return entry.pk === this.pk;
                    } else {
                        return false;
                    }
            });
            const iDontTakeDutiesOnWeekends = !(
                (5 in this.preferredWeekdays) || (6 in this.preferredWeekdays));
            const weekendsIHaveDutiesOn = this.getWeekendsOnDuty();
            const iHaveDutiesOnTwoOtherWeekends = (
                (weekendsIHaveDutiesOn.length > 1) 
                && !(day.week in weekendsIHaveDutiesOn));
            const iHaveDutiesOnOneOtherWeekend = (
                (weekendsIHaveDutiesOn.length === 1) 
                && !(day.week in weekendsIHaveDutiesOn));
            const iDontHaveDutiesOnTwoWeekendsYet = (
                (weekendsIHaveDutiesOn.length < 2));
            const iAmNotOnDutyTwoDaysAgo = !(Object.values(month.whoIsOnDuty(today - 2)).some(entry => {
                if (entry !== null) {
                    return entry.pk === this.pk;
                } else {
                    return false;
                }
            }));
            
            if (dutyImpossible) {
                continue;
            }

            if (iMadeExceptionForToday) {
                evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);
                continue;
            }

            if (iDontTakeDutiesOnThisWeekday) {
                evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);
                continue;
            }

            if (dutyOnThisPositionTaken) {
                evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);
            }

            if (iAmOnDutyOnAnyPosition) {
                // Mark decreasing impact on following and preceding days.
                // Prevent double duties.
                evaluationChart.modifyPoints(today - 4, MODIFIER_FOUR_DAYS_APART);
                evaluationChart.modifyPoints(today - 3, MODIFIER_THREE_DAYS_APART);
                evaluationChart.modifyPoints(today - 2, MODIFIER_TWO_DAYS_APART);
                evaluationChart.modifyPoints(today - 1, MODIFIER_DUTY_IMPOSSIBLE);
                evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);
                evaluationChart.modifyPoints(today + 1, MODIFIER_DUTY_IMPOSSIBLE);
                evaluationChart.modifyPoints(today + 2, MODIFIER_TWO_DAYS_APART);
                evaluationChart.modifyPoints(today + 3, MODIFIER_THREE_DAYS_APART);
                evaluationChart.modifyPoints(today + 4, MODIFIER_FOUR_DAYS_APART);

                if (itIsFriday) {
                    // Sunday is more attractive.
                    evaluationChart.modifyPoints(today + 2, MODIFIER_FRI_SUN);
                }

                if (itIsThursday) {
                    // Don't take duty on saturday, it will ruin your weekend!
                    evaluationChart.modifyPoints(today + 2, MODIFIER_THU_SAT);
                }

                continue;
            }
            
            if (itIsThursday && iDontTakeDutiesOnWeekends) {
                // Day off after thursday wouldn't make any difference.
                evaluationChart.modifyPoints(today, MODIFIER_THURSDAY_IS_ORDINARY);
            }

            if (itIsSunday && iAmNotOnDutyTwoDaysAgo) {
                evaluationChart.modifyPoints(today, MODIFIER_DONT_STEAL_SUNDAYS);
            }
            
            if (itIsWeekend && iHaveDutiesOnTwoOtherWeekends) {
                // Nobody wants more than two weekends on duty
                evaluationChart.modifyPoints(today, MODIFIER_MORE_THAN_TWO_WEEKENDS);
            }
            if (itIsSaturday && iHaveDutiesOnOneOtherWeekend) {
                // Aim for two weekends with three duties: fri+sun and sat.
                evaluationChart.modifyPoints(today, MODIFIER_SATURDAY_IF_ONE_WEEKEND);
            }

            if (!itIsWeekend && iDontHaveDutiesOnTwoWeekendsYet) {
                // Support the team, take at least two weekends!
                evaluationChart.modifyPoints(today, MODIFIER_LESS_THAN_TWO_WEEKENDS);
            }
        }

        return evaluationChart;
    }

    // Method for getting previous month's modifiers 
    // was implemented here originally.

    setDuty(duty) {
        this.duties.push(duty);
    }

    getDuties() {
        return this.duties;
    }

    getNumberOfDuties() {
        return this.duties.length;
    }

    getWeekendsOnDuty() {
        var weekendsOnDuty = new Set()
        this.duties.forEach(duty => {
            if (duty.day.category === 'weekend') {
                weekendsOnDuty.add(duty.day.week);
            }
        });
        return Array.from(weekendsOnDuty);
    }

    getNumberOfDutiesOnWeekends() {
        return this.duties.filter(
            duty => duty.day.category === 'weekend').length;
    }

    setMaxNumberOfDuties(number, saveInit=false) {
        if (saveInit) {
            this.#maxNumberOfDutiesInit = number;
        }
        this.maxNumberOfDuties = number;
        this.#updateMaxNumberOfDuties(saveInit);
    }

    getMaxNumberOfDuties() {
        return this.maxNumberOfDuties;
    }

    getNumberOfDutiesLeft() {
        return this.maxNumberOfDuties - this.duties.length;
    }

    setStrain(strain) {
        this.strain += strain;
    }

    getStrain() {
        return this.strain;
    }

    clearDuties() {
        this.duties = [];
    }

    clearStrain() {
        this.strain = 0;
    }

    setExceptions(exceptionList, saveInit=false) {
        if (saveInit) {
            this.#exceptionsInit = exceptionList;
        }
        this.exceptions = exceptionList;
    }

    getExceptions() {
        return this.exceptions;
    }

    setPreferredDays(daysList, saveInit=false) {
        if (saveInit) {
            this.#preferredDaysInit = daysList;
        }
        this.preferredDays = daysList;
    }

    getPreferredDays() {
        return this.preferredDays;
    }

    setPreferredWeekdays(weekdaysList, saveInit=false) {
        if (saveInit) {
            this.#preferredWeekdaysInit = weekdaysList;
        }
        this.preferredWeekdays = weekdaysList;
        this.#updateMaxNumberOfDuties(saveInit);
    }

    getPreferredWeekdays() {
        return this.preferredWeekdays;
    }

    #updateMaxNumberOfDuties(saveInit) {
        /* It may be a problem when setting duties, if a doctor has a high 
        max number of duties and there are not as many weekdays in month 
        which he accepts.
        This function is ran whenever max number of duties 
        or preferred weekdays are set to ensure that max number of duties 
        is not higher then number of available days. */
        if (this.preferredWeekdays.length > 3) { 
            return;
        }

        const numberOfPreferredWeekdaysInMonth = getNumberOfWeekdaysInMonth(
            this.#year, this.#month, this.preferredWeekdays);

        if (this.maxNumberOfDuties > numberOfPreferredWeekdaysInMonth) {
            this.setMaxNumberOfDuties(numberOfPreferredWeekdaysInMonth, saveInit);
        }
    }

    setPreferredPositions(positionList,saveInit=false) {
        if (saveInit) {
            this.#preferredPositionsInit = positionList;
        }
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

    restoreInit() {
        this.maxNumberOfDuties = this.#maxNumberOfDutiesInit;
        this.exceptions = [...this.#exceptionsInit];
        this.preferredDays = [...this.#preferredDaysInit];
        this.preferredPositions = [...this.#preferredPositionsInit];
        this.preferredWeekdays = [...this.#preferredWeekdaysInit];
    }
}

export default Doctor;
