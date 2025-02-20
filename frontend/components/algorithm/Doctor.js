import { range, getNumberOfWeekdaysInMonth, getWeekday } from './utils';
import EvaluationChart from './EvaluationChart';


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
var MODIFIER_DUTY_LEFT = -10;

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
        this.maxNumberOfDuties = MAX_NUMBER_OF_DUTIES_PER_MONTH(month, year);
        this.exceptions = [];
        this.preferredDays = [];
        this.preferredWeekdays = range(7);
        this.preferredPositions = unit.dutyPositions;
        this.locked = false;
        this.prevMonthDuties = [];
        this.nextMonthDuties = [];

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
        this.addPrevMonthDuty = this.addPrevMonthDuty.bind(this);
        this.addNextMonthDuty = this.addNextMonthDuty.bind(this);
        this.evaluateDuties = this.evaluateDuties.bind(this);
        this.setDuty = this.setDuty.bind(this);
        this.removeDuty = this.removeDuty.bind(this);
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
        this.restoreMaxDuties = this.restoreMaxDuties.bind(this);
        this.restoreExceptions = this.restoreExceptions.bind(this);
        this.restorePreferredDays = this.restorePreferredDays.bind(this);
        this.restorePreferredPositions = this.restorePreferredPositions.bind(this);
        this.restorePreferredWeekdays = this.restorePreferredWeekdays.bind(this);
        this.getStatistics = this.getStatistics.bind(this);

        this._getPreviousMonthModfiers = this._getPreviousMonthModfiers.bind(this);
        this._getNextMonthModfiers = this._getNextMonthModfiers.bind(this);
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

    addPrevMonthDuty(duty) {
        this.prevMonthDuties.push(duty);
    }

    addNextMonthDuty(duty) {
        this.nextMonthDuties.push(duty);
    }

    evaluateDuties(duties, position, maxDutiesFactor=this.getMaxNumberOfDuties()) {
        const maxDuties = this.getMaxNumberOfDuties();
        const numberOfDuties = this.getNumberOfDuties(duties);
        const dutiesLeft = maxDuties - numberOfDuties;
        if (dutiesLeft <= 0) {
            return null;
        }

        const days = [...duties.keys()];

        const evaluationChart = new EvaluationChart(days, this);

        this._getPreviousMonthModfiers(evaluationChart);
        this._getNextMonthModfiers(evaluationChart);

        const whoIsOnDuty = (dayNumber) => {
            const day = days.find(d => d.number === dayNumber);
            const result = {};
            if (day) {
                Object.entries(duties.get(day)).forEach(([position, duty]) => {
                    result[position] = duty.getDoctor();
                });
            } else {
                Object.entries(duties.get(days[0])).forEach(([position, duty]) => {
                    result[position] = null;
                });
            }
            return result;
        }

        // Conditions that will not change during looping.
        const iDontTakeDutiesOnWeekends = !(
            (5 in this.preferredWeekdays) || (6 in this.preferredWeekdays));
        const weekendsIHaveDutiesOn = this.getWeekendsOnDuty(duties);
        const iDontHaveDutyOnThisWeekend = (day) => (
            new Set([...weekendsIHaveDutiesOn, day.week]).size 
            > weekendsIHaveDutiesOn.length);
        const dutiesLeftModifier = numberOfDuties ? ((dutiesLeft - maxDutiesFactor) * MODIFIER_DUTY_LEFT) : (20 * MODIFIER_DUTY_LEFT);

        for (const day of days) {

            const today = day.number;
            const itIsFriday = day.weekday === 4;
            const itIsThursday = day.weekday === 3;
            const itIsSunday = day.weekday === 6;
            const itIsWeekend = [4,5,6].includes(day.weekday);

            const dutyImpossible = evaluationChart.getDayStrain(today) >= 10000;
            const iMadeExceptionForToday = this.getExceptions().includes(today);
            const iDontTakeDutiesOnThisWeekday = (
                !this.getPreferredWeekdays().includes(day.weekday));
            const iDontTakeDutiesOnThisPosition = (
                !this.getPreferredPositions().includes(position));
            const dutyOnThisPositionTaken = (
                Boolean(duties.get(day)[position].getDoctor()) === true);
            const iAmOnDutyOnAnyPosition = Object.values(whoIsOnDuty(today)).some(entry => {
                    if (entry) {
                        return entry.pk === this.pk;
                    } 
                    return false;
            });
            const iAmNotOnDutyTwoDaysAgo = !(Object.values(whoIsOnDuty(today - 2)).some(entry => {
                if (entry) {
                    return entry.pk === this.pk;
                }
                return false;
            }));

            if (dutyImpossible) {
                continue;
            }

            if (iMadeExceptionForToday) {
                evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);
            }

            if (iDontTakeDutiesOnThisWeekday) {
                evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);
            }

            if (iDontTakeDutiesOnThisPosition) {
                evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);
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

            if (itIsWeekend && iDontHaveDutyOnThisWeekend(day)) {
                const modifier = (
                    (weekendsIHaveDutiesOn.length + 1) * MODIFIER_NEW_WEEKEND);
                evaluationChart.modifyPoints(today, modifier);
            }

            // Apply modifier for duties left.
            evaluationChart.modifyPoints(today, dutiesLeftModifier);
        }

        return evaluationChart;
    }

    _getPreviousMonthModfiers(evaluationChart) {
        // Applies impact from closing duties of previous month.
        // Same modifiers as in evaluate duties method are used.
        const prevDuties = this.prevMonthDuties;
        const prevMonth = this.#month === 1 ? 12 : this.#month-1;
        const prevYear = this.#month === 1 ? this.#year-1 : this.#year;
        const prevMonthLen = new Date(prevYear, prevMonth, 0).getDate();

        const myPrevDutyDates = [...new Set(
            prevDuties
            .filter(d => {
                if (d.doctor) {
                    return d.doctor.pk === this.pk;
                }
                return false;
            })
            .map(d => d.day.number)
        )];
        if (!myPrevDutyDates.length) {
            return;
        }
        myPrevDutyDates.sort();

        const modifier = {
            3: MODIFIER_DUTY_IMPOSSIBLE,
            2: MODIFIER_TWO_DAYS_APART,
            1: MODIFIER_THREE_DAYS_APART,
            0: MODIFIER_FOUR_DAYS_APART
        };

        for (const date of myPrevDutyDates) {
            if ((prevMonthLen - date) < 4) {
                const daysAffected = 4 - (prevMonthLen - date);
                for (const i of range(1, daysAffected+1)) {
                    evaluationChart.modifyPoints(i, modifier[daysAffected - i]);
                }
            }
        }
    }

    _getNextMonthModfiers(evaluationChart) {
        // Applies impact from opening duties of next month.
        // Same modifiers as in evaluate duties method are used.
        const nextDuties = this.nextMonthDuties;
        const thisMonthLength = new Date(this.#year, this.#month, 0).getDate();

        const myNextDutyDates = [...new Set(
            nextDuties
            .filter(d => {
                if (d.doctor) {
                    return d.doctor.pk === this.pk;
                }
                return false;
            })
            .map(d => d.day.number)
        )];
        if (!myNextDutyDates.length) {
            return;
        }
        myNextDutyDates.sort();

        const modifier = {
            3: MODIFIER_DUTY_IMPOSSIBLE,
            2: MODIFIER_TWO_DAYS_APART,
            1: MODIFIER_THREE_DAYS_APART,
            0: MODIFIER_FOUR_DAYS_APART
        };

        for (const date of myNextDutyDates) {
            if (date < 5) {
                const daysAffected = 5 - date;
                for (const i of range(daysAffected)) {
                    evaluationChart.modifyPoints(thisMonthLength-i, modifier[daysAffected - i - 1]);
                }
            }
        }
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

    getNumberOfDuties(duties=null) {
        if (!duties) {
            return this.duties.length;
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

        return (myDuties.length + thisDutyDates.length);
    }

    getWeekendsOnDuty(duties=null) {
        let weekendsOnDuty = new Set();
        let myDuties = [];

        if (!duties) {
            myDuties = this.duties;
        } else {
            myDuties = (
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
            );
        }

        myDuties.forEach(duty => {
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

    setExceptions(exceptionList, saveInit=false) {
        exceptionList.sort();
        if (saveInit) {
            this.#exceptionsInit = exceptionList;
        }
        this.exceptions = exceptionList;
    }

    getExceptions() {
        return this.exceptions;
    }

    setPreferredDays(daysList, saveInit=false) {
        daysList.sort();
        if (saveInit) {
            this.#preferredDaysInit = daysList;
        }
        this.preferredDays = daysList;
        this.#updateMaxNumberOfDuties(saveInit);
    }

    getPreferredDays() {
        return this.preferredDays;
    }

    setPreferredWeekdays(weekdaysList, saveInit=false) {
        weekdaysList.sort();
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
            this.setMaxNumberOfDuties(acceptedDaysInMonth, saveInit);
        } else if (this.maxNumberOfDuties < this.preferredDays.length || !this.preferredWeekdays.length) {
            this.setMaxNumberOfDuties(this.preferredDays.length, saveInit);
        }
    }

    setPreferredPositions(positionList,saveInit=false) {
        positionList.sort();
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
        this.restoreMaxDuties();
        this.restoreExceptions();
        this.restorePreferredDays();
        this.restorePreferredPositions();
        this.restorePreferredWeekdays();
    }

    restoreMaxDuties() {
        this.maxNumberOfDuties = this.#maxNumberOfDutiesInit;
    }

    restoreExceptions() {
        this.exceptions = [...this.#exceptionsInit];
    }

    restorePreferredDays() {
        this.preferredDays = [...this.#preferredDaysInit];
    }

    restorePreferredPositions() {
        this.preferredPositions = [...this.#preferredPositionsInit];
    }

    restorePreferredWeekdays() {
        this.preferredWeekdays = [...this.#preferredWeekdaysInit];
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
