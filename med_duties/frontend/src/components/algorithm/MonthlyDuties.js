import { 
    range, 
    DefaultDict, 
    areEqual, 
    getNumberOfWeekdaysInMonth,
    shuffle
} from './utils';
import { Combination, CartesianProduct } from 'js-combinatorics';
import Day from './Day';
import Duty from './Duty';

var WEEKDAY_NAMES = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek',
                     'Piątek', 'Sobota', 'Niedziela'];

class MonthlyDuties {
    pk;
    days;
    month;
    year;
    duties;
    dutyPositions;
    doctors;
    #log;

    constructor(year, month, unit, pk=null) {
        const numberOfDays = new Date(year, month, 0).getDate();

        this.days = range(1,numberOfDays+1).map(
            day => new Day(year, month, day));
        this.month = month;
        this.year = year;
        this.duties = {};

        unit.dutyPositions.forEach(position => {
            this.duties[position] = new Map();
        });
        this.days.forEach(day => {
            unit.dutyPositions.forEach(position => {
                const duty = new Duty(day, null, position, day.strainPoints);
                this.duties[position].set(day, duty);
            });
        });

        this.dutyPositions = unit.dutyPositions;
        this.doctors = unit.doctors;
        this.pk = pk;
        this.#log = [];

        this.setPk = this.setPk.bind(this);
        this.getPk = this.getPk.bind(this);
        this.addDoctors = this.addDoctors.bind(this);
        this.removeDoctor = this.removeDoctor.bind(this);
        this.setDuties = this.setDuties.bind(this);
        this.setDuty = this.setDuty.bind(this);
        this.performChecks = this.performChecks.bind(this);
        this.clearDuties = this.clearDuties.bind(this);
        this.getDays = this.getDays.bind(this);
        this.getMonth = this.getMonth.bind(this);
        this.getYear = this.getYear.bind(this);
        this.getDay = this.getDay.bind(this);
        this.getDuty = this.getDuty.bind(this);
        this.getDuties = this.getDuties.bind(this);
        this.whoIsOnDuty = this.whoIsOnDuty.bind(this);

        this._removeDoctorDuties = this._removeDoctorDuties.bind(this);
        this._canDutiesBeSet = this._canDutiesBeSet.bind(this);
        this._assignAndPostCheck = this._assignAndPostCheck.bind(this);
        this._isThereEnoughDoctors = this._isThereEnoughDoctors.bind(this);
        this._checkPreferredDays = this._checkPreferredDays.bind(this);
        this._isThereEnoughDoctorsForEachPosition = this._isThereEnoughDoctorsForEachPosition.bind(this);
        this._checkMaxDuties = this._checkMaxDuties.bind(this);
        this._getWeekdaysPreferences = this._getWeekdaysPreferences.bind(this);
        this._getCombinations = this._getCombinations.bind(this);
        this._getWastedDuties = this._getWastedDuties.bind(this);
        this._assignPreferredDuties = this._assignPreferredDuties.bind(this);
        this._assignDuties = this._assignDuties.bind(this);
        this._checkForMissingDuties = this._checkForMissingDuties.bind(this);
        this._checkForForbiddenDuties = this._checkForForbiddenDuties.bind(this);
        this._raiseMaxDuties = this._raiseMaxDuties.bind(this);
        this._addAcceptedWeekdays = this._addAcceptedWeekdays.bind(this);
        this._cutExceptions = this._cutExceptions.bind(this);
        this._addAcceptedPositions = this._addAcceptedPositions.bind(this);
        this._log = this._log.bind(this);
        this._clearLog = this._clearLog.bind(this);
        this.getStatistics = this.getStatistics.bind(this);
    }

    setPk(pk) {
        this.pk = pk;
    }

    getPk() {
        return this.pk;
    }

    addDoctors(doctorList) {
        this.doctors = this.doctors.concat(doctorList);
    }

    addDuties(dutyList) {
        dutyList.forEach(newDuty => {
            const date = newDuty.getDay().number;
            const position = newDuty.getPosition();
            const day = this.getDay(date);
            newDuty.day = day;
            this.duties[position].set(day, newDuty);
        });
    }

    removeDoctor(pk) {
        const doctor = this.doctors.find(doc => doc.pk === pk);
        doctor.clearDuties();
        doctor.clearStrain();

        this._removeDoctorDuties(doctor);

        this.doctors = this.doctors.filter(doctor => !(doctor.pk === pk));
    }

    _removeDoctorDuties(doctor) {
        this.dutyPositions.forEach(position => {
            [...this.duties[position].entries()].forEach(entry => {
                const [day, duty] = entry;
                if (duty.getDoctor() === doctor) {
                    this.duties[position].get(day).setDoctor(null);
                }
            });
        });
    }

    setDuties() {
        // Make sure it is a fresh start.
        this.clearDuties();
        this._clearLog();

        const canBeSet = this._canDutiesBeSet();
        if (!canBeSet) {
            return [false, [], this.#log];
        }

        this._assignAndPostCheck();

        this._createChangesLog();

        return [true, this.duties, this.#log];
    }

    _canDutiesBeSet() {
        // Check if there are enough doctors.
        const thereIsEnoughDoctors = this._isThereEnoughDoctors();

        // Check if preferred days don't overlap.
        // and if doctor doesn't have more preferences than max no of duties.
        const preferredDaysAreOk= this._checkPreferredDays();

        if (!thereIsEnoughDoctors || !preferredDaysAreOk) {
            return false;
        }
        return true;
    }

    _isThereEnoughDoctors() {
        // Check if there is a fixed minimum of doctors
        // for 1 to 3 positions.
        const minDoctorsForPositions = {
            1: 3,
            2: 5,
            3: 8
        };

        const dutyPositions = this.dutyPositions.length;
        const minDoctors = minDoctorsForPositions[dutyPositions];
        const actualDoctors = this.doctors.length;

        if (actualDoctors < minDoctors) {
            this._log(`Zbyt mało lekarzy na liczbę pozycji dyżurowych: ` +
                `${dutyPositions}. Minimalna liczba lekarzy wynosi ${minDoctors}, ` +
                `a dodano ${actualDoctors} lekarzy.`);

            return false;
        }

        return true;
    }

    _checkPreferredDays() {
        const preferredPositions = new DefaultDict(Array);
        const numberOfPositions = this.dutyPositions.length;
        const errors = new Set();

        for (const doctor of this.doctors) {
            const exceptions = doctor.getExceptions();
            const preferredDays = doctor.getPreferredDays();
            const preferredWeekdays = doctor.getPreferredWeekdays();
            const doctorsPreferredPositions = doctor.getPreferredPositions();
            const maxNumberOfDuties = doctor.getMaxNumberOfDuties();

            for (const day of preferredDays) {
                if (exceptions.includes(day)) {
                    errors.add(`${doctor.name} jednocześnie wyklucza i ` +
                        `preferuje dyżur ${day}/${this.month}/${this.year}.`);
                }
                const weekday = this.getDay(day).weekday;
                if (!preferredWeekdays.includes(weekday)) {
                    errors.add(`${doctor.name} preferuje dyżur w dzień ${day}/` +
                        `${this.month}/${this.year} - ${WEEKDAY_NAMES[weekday]}` +
                        ` - jednocześnie wykluczając dyżury w ten dzień tygodnia.`);
                }
            }

            // Check if doctor has more preferences then his duty number limit.
            if (preferredDays.length > maxNumberOfDuties) {
                errors.add(`${doctor.name} ma więcej preferowanych dni ` +
                'niż jego maksymalna liczbę dyżurów.');
            }

            // Check if doctor can be assigned duty on his preferred days
            // on any of his prefered positions.
            for (const dayNumber of preferredDays) {

                const allPositionsTaken = (
                    preferredPositions[dayNumber].length
                    === numberOfPositions
                );
                const uniquePositionsIncludingDoctors = new Set(
                    preferredPositions[dayNumber]
                    .flat()
                    .concat(doctorsPreferredPositions)
                );
                const doctorsPositionWillFit = (
                    uniquePositionsIncludingDoctors.size
                    >= (preferredPositions[dayNumber].length + 1)
                );
                if (allPositionsTaken || (!doctorsPositionWillFit)) {
                    errors.add(`Dzień ${dayNumber}/${this.month}/${this.year} ` +
                    'jest preferowany przez więcej lekarzy niż liczba obsady.')
                } else {
                // If any of positions fit, add them
                // to check further doctors agains them.
                    preferredPositions[dayNumber].push(doctorsPreferredPositions);
                }

                // Check if doctor's preferences are not on consecutive days.
                if (preferredDays.includes(dayNumber + 1)) {
                    errors.add(`${doctor.name} prosi o dyżur w następujących ` +
                        `po sobie dniach ${dayNumber} i ${dayNumber + 1}` +
                        `/${this.month}/${this.year}`);
                }
            }
        }

        if (errors.size > 0) {
            [...errors].forEach(error => this._log(error));
            return false;
        }

        return true;
    }

    performChecks() {
        // Make sure it is a fresh start.
        this._clearLog();

        const enoughDoctors = this._isThereEnoughDoctorsForEachPosition();
        const maxDutiesOk = this._checkMaxDuties();
        const preferredDaysOk = this._checkPreferredDays();

        if (!enoughDoctors || !maxDutiesOk || !preferredDaysOk) {
            return [false, this.#log];
        }
        return [true, ['Nie wykryto błędów. Dyżury zostaną ułożone bez zmiany ustawień.']];
    }

    _isThereEnoughDoctorsForEachPosition() {
        const minDoctorsForNumberOfPositions = {
            1: 3,
            2: 5,
            3: 8
        };

        const minDoctors = minDoctorsForNumberOfPositions[this.dutyPositions.length];
        const doctorsWhoPreferDutyPositions = {};
        for (const position of this.dutyPositions) {
            doctorsWhoPreferDutyPositions[position] = this.doctors.filter(
                doctor => doctor.getPreferredPositions().includes(position)
            );
        }

        const numberOfPositions = this.dutyPositions.length;
        const positionsWithNotEnoughDoctors = [];
        for (const position of this.dutyPositions) {
            if (doctorsWhoPreferDutyPositions[position].length
                    < minDoctors) {
                positionsWithNotEnoughDoctors.push(position);
            }
        }

        if (positionsWithNotEnoughDoctors.length > 0) {
            const foundDoctors = (Object.values(doctorsWhoPreferDutyPositions)
                .flat()
                .map(doctor => doctor.name));
            const doctorsToCheck = [...new Set(foundDoctors)];
            this._log(`Zbyt mało lekarzy przypadających na pozycje dyżurowe. ` +
                `Wymagana liczba lekarzy to ${minDoctors} ` +
                `na każdą pozycję. Sprawdź lekarzy: ${doctorsToCheck.join(', ')}` +
                `i rozważ dodanie niektórym lub wszystkim jednej lub więcej ` +
                `akceptowanej pozycji dyżurowej. Możesz też dodać ` +
                `więcej lekarzy.`);
            return false;
        }

        return true;
    }

    _checkMaxDuties() {
        // Checks if combination of max duties and preferred weekdays
        // allows for all duties to be set.
        const dutiesInMonth = this.days.length * this.dutyPositions.length;
        const totalMaxDuties = this.doctors.map(
                doctor => doctor.getMaxNumberOfDuties()
            ).reduce(
                (count, number) => count + number, 0
            );
        if (totalMaxDuties < dutiesInMonth) {
            this._log(`Maksymalna liczba dyżurów akceptowana ` +
                `łącznie przez wszystkich lekarzy jest niższa ` +
                `niż liczba miejsc dyżurowych do obsadzenia `+
                `(liczba dni mnożna przez liczbę pozycji dyżurowych)`);
            return false;
        }

        const wastedDuties = {};
        // Get unique combinations of all lengths of preferred duty positions.
        const positionsCombinations =this._getCombinations(this.dutyPositions);

        for (const combination of positionsCombinations) {
            // Get an object with groups as keys
            // and lists of doctors who prefer such groups as values.
            const preferredWeekdaysGroups = this._getWeekdaysPreferences(combination);
            // Create a dict of dicts, where keys are position combinations
            // and weekdays groups (in nested dict) and values are dicts:
            // { missing: 
            //      number of wasted duties for each weekdays group 
            //      for exactly this combination
            //   doctors:
            //      doctors who prefer this group and its subgroups
            // }
            wastedDuties[combination] = this._getWastedDuties(
                combination, preferredWeekdaysGroups);
        }

        // Deduct wasted duties from declared max duties
        // - they can't be set.
        const totalWastedDuties = Object.values(wastedDuties).map(item =>
            Object.values(item)).flat().reduce((value, item) => 
            value + item.missing, 0);
        const actualMaxDuties = totalMaxDuties - totalWastedDuties;

        // Raise error if there are not enough 'actual' duties
        if (actualMaxDuties < dutiesInMonth) {
            const doctorsToCheck = [...new Set(Object.values(wastedDuties).map(item =>
                Object.values(item)).flat().map(item => item.doctors).flat())];
            this._log('Zbyt mała liczba akceptowanych dyżurów. ' +
                'Zbyt wielu lekarzy deklaruje przyjęcie dyżurów ' +
                'w niektóre dni tygodnia, podczas gdy pozostałe dni ' +
                'pozostają nieobsadzone. Dodaj akceptowane dni tygodnia lekarzom: ' +
                `${doctorsToCheck.join(', ')} albo zwiększ liczbę dyżurów ` +
                'akceptowanych przez pozostałych lekarzy.');
            return false;
        }

        return true;
    }

    _getCombinations(array) {
        // Returns array of combinations of all lengths.
        var combs = [];
        for (const i of range(1, array.length+1)) {
            combs = combs.concat([...new Combination(array, i)]);
        }
        return combs;
    }

    _getWeekdaysPreferences(positions) {
        // Returns a dict of all doctors who prefer
        // exactly this position combination, for each weekdays group.
        const preferredWeekdaysGroups = new DefaultDict(Array);
        for (const doctor of this.doctors) {
            if (areEqual(doctor.getPreferredPositions(), positions)) {
                const preferredWeekdays = doctor.getPreferredWeekdays();
                // Ommiting preference for all 7 weekdays is necessary;
                // otherwise it would be necessary for total max duties
                // to be less or equal to total number of accepted duties.
                if (preferredWeekdays.length === 7) {
                    continue;
                }

                preferredWeekdaysGroups[preferredWeekdays.join('')].push(doctor);
            }
        }
        return preferredWeekdaysGroups;
    }

    _getWastedDuties(positions, preferredWeekdaysGroups) {
        // Finds how many of declared max duties will not be set
        // (for each weekdays group for given positions combination).

        const wastedDuties = {};

        // Find maximum duties accepted by all doctors
        // who prefer each weekdays group and keep doctors in a set.
        const weekdaysGroups = Object.keys(preferredWeekdaysGroups).map(key => {
            return key.split('');
        });

        for (const weekdaysGroup of weekdaysGroups) {
            const doctors = preferredWeekdaysGroups[weekdaysGroup.join('')];
            let sumOfMaxAcceptedDuties = doctors.reduce(
                (prevValue, doctor) => {
                    return prevValue + doctor.getMaxNumberOfDuties();
            }, 0);
            const doctorsWithPreferenceForGroupOrSubgroup = new Set();
            preferredWeekdaysGroups[weekdaysGroup.join('')].forEach(doctor => {
                doctorsWithPreferenceForGroupOrSubgroup.add(doctor);
            });

            // Find all subgroups of current group
            // and update max duties number and doctors set.
            for (const anotherWeekdaysGroup of weekdaysGroups) {
                if (areEqual(weekdaysGroup, anotherWeekdaysGroup)) {
                    continue;
                }
                const groupIsSubgroup = anotherWeekdaysGroup.every(
                    weekday => weekdaysGroup.includes(weekday));
                if (groupIsSubgroup) {
                    const subgroupDoctors = (
                        preferredWeekdaysGroups[anotherWeekdaysGroup.join('')]);
                    sumOfMaxAcceptedDuties += subgroupDoctors.reduce(
                        (prevValue, doctor) => {
                            return prevValue + doctor.getMaxNumberOfDuties();
                    }, 0);
                    preferredWeekdaysGroups[anotherWeekdaysGroup.join('')].forEach(
                        doctor => doctorsWithPreferenceForGroupOrSubgroup.add(doctor)
                    );
                }
            }
            // Find how many duties there are to take 
            // in current weekdays group.
            const modifier = doctorsWithPreferenceForGroupOrSubgroup.size >= positions.length ? positions.length : doctorsWithPreferenceForGroupOrSubgroup.size;
            const sumOfDutiesOnWeekdaysGroup = (
                getNumberOfWeekdaysInMonth(this.year, this.month, weekdaysGroup)
                * modifier
            );

            if (sumOfMaxAcceptedDuties > sumOfDutiesOnWeekdaysGroup) {
                const missingDuties = (
                    sumOfMaxAcceptedDuties
                    - sumOfDutiesOnWeekdaysGroup
                );
                wastedDuties[weekdaysGroup.join('')] = { missing: missingDuties,
                    doctors: [...doctorsWithPreferenceForGroupOrSubgroup] };
            }
        }

        return wastedDuties;
    }

    _assignAndPostCheck(iteration=1) {
        this._assignPreferredDuties();

        for (const position of this.dutyPositions) {
            this._assignDuties(position);

            try {
                this._checkForMissingDuties(position);
                this._checkForForbiddenDuties();
            } catch (error) {
                console.log(error);
                this.clearDuties();
                if (iteration > 5) {
                    this._raiseMaxDuties();
                }
                if (iteration > 20) {
                    this._addAcceptedWeekdays();
                }
                if (iteration % 15 === 0 && iteration > 0) {
                    this._addAcceptedPositions();
                }
                if (iteration % 50 === 0) {
                    this._cutExceptions();
                }
                console.log(`Iteration: ${iteration}`);
                this._assignAndPostCheck(iteration+1);
            }
        }
    }

    _assignPreferredDuties() {
        // Pre-assign, omits doctors' evaluation.
        const duties = new DefaultDict(Map);

        for (const doctor of this.doctors) {
            const preferences = doctor.getPreferredDays();

            for (const day of preferences) {
                const preferredPositions = doctor.getPreferredPositions();
                duties[day].set(doctor, preferredPositions);
            }
        }

        for (const dayNumber in duties) {
            const options = [...duties[dayNumber].values()];
            const acceptedOptions = [...new CartesianProduct(...options)];
            shuffle(acceptedOptions);
            const chosenOption = acceptedOptions[0];
            const doctors = [...duties[dayNumber].keys()];
            doctors.forEach((doc, index) => {
                const pos = chosenOption[index];
                const dayObj = this.getDay(dayNumber);
                const duty = new Duty(dayObj, doc, pos, dayObj.strainPoints);
                this.setDuty(duty, dayObj.strainPoints);
            });
        }
    }

    _assignDuties(position) {
        // Assign all duties except doctors preferences.
        const doctors = this.doctors.filter(doctor => {
            return doctor.getPreferredPositions().includes(position);
        });

        // Limit iterations to fit number of days
        // not set via _assignPreferredDuties method.
        const dutiesNotAssigned = this.days.length - [...this.duties[position].values()].filter(d => d.getDoctor() !== null).length;

        for (const _ of range(dutiesNotAssigned)) {
            const byStrain = (docA, docB) => {
                return docA.getStrain() - docB.getStrain();
            }
            const byDutiesLeft = (docA, docB) => {
                return (docB.getNumberOfDutiesLeft() 
                    - docA.getNumberOfDutiesLeft());
            }
            const byNumberOfPreferredPositions = (docA, docB) => {
                return (docA.getPreferredPositions().length 
                    - docB.getPreferredPositions().length);
            }
            const byNumberOfPreferredWeekdays = (docA, docB) => {
                return (docA.getPreferredWeekdays().length 
                    - docB.getPreferredWeekdays().length);
            }

            shuffle(doctors);
            doctors.sort(byStrain);
            doctors.sort(byDutiesLeft);
            doctors.sort(byNumberOfPreferredPositions);
            doctors.sort(byNumberOfPreferredWeekdays);

            for (const doctor of doctors) {
                const evaluationChart = doctor.evaluateDuties(this, position);

                // If doctor has reached max number of duties, check another one.
                if (evaluationChart === null) {
                    continue;
                }

                const [bestDay, strainPoints] = evaluationChart.getBest();

                // If there is no suitable day for doctor, check another one.
                if (bestDay === null) {
                    continue;
                }

                const duty = new Duty(bestDay, doctor, position, strainPoints);

                this.setDuty(duty);

                break;
            }
        }
    }

    setDuty(dutyData) {
        const doctor = dutyData.getDoctor();
        const position = dutyData.getPosition();
        const date = dutyData.getDay().number;
        const day = this.getDay(date);
        const duty = this.duties[position].get(day);
        duty.copy(dutyData);
        doctor.setDuty(duty);
        doctor.setStrain(dutyData.getStrain());
    }

    changeDoctor(duty, newDoctor) {
        // Check for double and multi-positioned duties.
        if (newDoctor) {
            const date = duty.getDay().number;
            [date-1, date, date+1].forEach(dayNumber => {
                if (dayNumber < 1 || dayNumber > this.days.length) {
                    return;
                }
                const day = this.getDay(dayNumber);
                this.dutyPositions.forEach(position => {
                    const otherDuty = this.duties[position].get(day);
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
        oldDoctor && oldDoctor.removeDuty(duty);
        newDoctor && newDoctor.setDuty(duty);
    }

    _checkForMissingDuties(position) {
        const errors = new Set();
        for (const day of this.days) {
            const duty = this.duties[position].get(day);
            if (duty.getDoctor() === null) {
                errors.add(`Nie ustalono dyżuru ${day.number}/` +
                `${day.month}/${day.year} na pozycji ${position}.`);
            }
        }
        if (errors.size > 0) {
            const joinedErrors = [...errors].join('//');
            throw Error(joinedErrors);
        }
    }

    _checkForForbiddenDuties() {
        // 'Forbidden' duties are on same or consecutive days
        // or on day or weekday excluded by doctor.
        const errors = new Set();
        for (const doctor of this.doctors) {

            const duties = doctor.getDuties();
            if (duties.length === 0) {
                continue;
            }
            const byDate = (dutyA, dutyB) => {
                return (dutyA.getDay().number - dutyB.getDay().number);
            }
            duties.sort(byDate);

            const dates = duties.map(duty => duty.getDay().number);

            const exceptions = doctor.getExceptions();
            const preferredWeekdays = doctor.getPreferredWeekdays();
            const preferredPositions = doctor.getPreferredPositions();

            dates.forEach((day, i, dates) => {
                const twoDutiesOnSameDay = day === dates[i+1];
                const dutiesOnConsecutiveDays = dates.includes(day + 1);
                const iHaveDutyOnExcludedDay = exceptions.includes(day);
                const iHaveDutyOnExcludedWeekday = (
                    !preferredWeekdays.includes(duties[i].getDay().weekday));
                const iHaveDutyOnExcludedPosition = (
                    !preferredPositions.includes(duties[i].getPosition()));

                if (twoDutiesOnSameDay) {
                    errors.add(`${doctor.name} ma zaplanowanych wiele dyżurów ` +
                        `${dates[i]}/${this.month}/${this.year}`);
                }
                if (dutiesOnConsecutiveDays) {
                    errors.add(`${doctor.name} ma zaplanowane dyżury w ` +
                        `następujące po sobie dni ${dates[i]} i ${dates[i] + 1}` +
                        `/${this.month}/${this.year}.`);
                }
                if (iHaveDutyOnExcludedDay) {
                    errors.add(`${doctor.name} ma zaplanowany dyżur w zastrzeżony ` +
                        `dzień ${dates[i]}/${this.month}/${this.year}.`);
                }
                if (iHaveDutyOnExcludedWeekday) {
                    errors.add(`${doctor.name} ma zaplanowany dyżur w ` +
                        `dzień tygodnia: ${WEEKDAY_NAMES[duties[i].getDay().weekday]}, `+
                        `który nie znajduje się na liście dni tygodnia, w które `+
                        `może brać dyżury.`);
                }
                if (iHaveDutyOnExcludedPosition) {
                    errors.add(`${doctor.name} ma zaplanowany dyżur ${dates[i]}` +
                    `/${this.month}/${this.year} na pozycji ${duties[i].getPosition()}, `+
                    `która nie znajduje się na liście pozycji, na których ` +
                    `bierze dyżury.`);
                }
            });
        }

        if (errors.size > 0) {
            const joinedErrors = [...errors].join('//');
            throw Error(joinedErrors);
        }
    }

    _raiseMaxDuties() {
        // Choose doctors who prefer more than 3 weekdays.
        // Those who prefer less have automatically lowered max number
        // of duties to match number of available days.
        const doctors = this.doctors.filter(doctor => {
            const preferredWeekdays = doctor.getPreferredWeekdays();
            if (preferredWeekdays.length > 3 && !doctor.isLocked()) {
                return doctor;
            }
        });

        if (doctors.length > 0) {
            const byMaxDuties = (docA, docB) => {
                return (docA.getMaxNumberOfDuties()
                    - docB.getMaxNumberOfDuties());
            }
            shuffle(doctors);
            doctors.sort(byMaxDuties);

            const chosenDoctor = doctors[0];

            const maxDuties = chosenDoctor.getMaxNumberOfDuties();
            chosenDoctor.setMaxNumberOfDuties(maxDuties+1);
        } else {
            for (const doctor of this.doctors) {
                if (doctor.isLocked()) {
                    continue;
                }
                const maxDuties = doctor.getMaxNumberOfDuties();
                doctor.setMaxNumberOfDuties(maxDuties+1);
            }
        }
    }

    _addAcceptedWeekdays() {
        const doctors = this.doctors.filter(doctor => {
            const preferredWeekdays = doctor.getPreferredWeekdays();
            if (preferredWeekdays.length < 7 && !doctor.isLocked()) {
                return doctor;
            }
        });
        
        if (doctors.length > 0) {
            shuffle(doctors);
            const byPreferredWeekdays = (docA, docB) => {
                return (docA.getPreferredWeekdays()
                    - docB.getPreferredWeekdays());
            };
            doctors.sort(byPreferredWeekdays);
            const chosenDoctor = doctors[0];

            const preferredWeekdays = chosenDoctor.getPreferredWeekdays();
            const otherWeekdays = range(7).filter(weekday => 
                !preferredWeekdays.includes(weekday));
            shuffle(otherWeekdays);
            const newPreferredWeekdays = [...preferredWeekdays, otherWeekdays[0]];
            newPreferredWeekdays.sort();

            chosenDoctor.setPreferredWeekdays(newPreferredWeekdays);
        }
    }

    _cutExceptions() {
        // Prevents excessive exception use.
        for (const doctor of this.doctors) {
            if (doctor.isLocked()) {
                continue;
            }
            const exceptions = doctor.getExceptions();
            if (exceptions.length > 5) {
                shuffle(exceptions);
                doctor.setExceptions(exceptions.slice(0,5));
            }
        }
    }

    _addAcceptedPositions() {
        const changes = new Set();
        var docs = [];
        for (let numberOfPositions = 1; 
                numberOfPositions < this.dutyPositions.length; 
                numberOfPositions++) {
            const filteredDocs = this.doctors.filter(doctor => {
                const preferredPositions = doctor.getPreferredPositions();
                if (preferredPositions.length === numberOfPositions) {
                    return doctor;
                }
            });
            docs = docs.concat(filteredDocs);
        }

        if (docs.length > 0) {
            for (const doctor of docs) {
                const preferredPositions = doctor.getPreferredPositions();
                const otherPositions = this.dutyPositions.filter(position => {
                    return !preferredPositions.includes(position);
                });
                shuffle(otherPositions);
                const newPosition = otherPositions[0];
                const newPositions = [...preferredPositions, newPosition];
                doctor.setPreferredPositions(newPositions);
            }
        }
    }

    clearDuties() {
        for (const doctor of this.doctors) {
            doctor.clearDuties();
            doctor.clearStrain();
            this._removeDoctorDuties(doctor);
        }
    }

    _createChangesLog() {
        for (const doctor of this.doctors) {
            const changes = doctor.getChangedSettings();

            if (Object.keys(changes).length > 0) {
                this._log(`${doctor.name.toUpperCase()}`);

                if ('maxNumberOfDuties' in changes) {
                    const newMaxDuties = doctor.getMaxNumberOfDuties();
                    const oldMaxDuties = changes.maxNumberOfDuties;
                    this._log(`[RMD-${doctor.pk}] - ` +
                        `Podniesiono maksymalną liczbę dyżurów ` +
                        `o ${oldMaxDuties} do ${newMaxDuties}.`)
                }

                if ('exceptions' in changes) {
                    const newExceptions = doctor.getExceptions();
                    const removedExceptions = changes.exceptions;
                    const allExceptions = newExceptions.concat(removedExceptions);
                    this._log(`[CE-${doctor.pk}] - ` +
                        `Usunięto z zastrzeżeń dni: ${removedExceptions}, ` +
                        `pozostawiając: ${newExceptions}.`);
                }

                if ('preferredPositions' in changes) {
                    const newPositions = doctor.getPreferredPositions();
                    const addedPositions = changes.preferredPositions;
                    this._log(`[AAP-${doctor.pk}] - ` +
                        `Dodano akceptowane pozycje dyżurowe: ` +
                        `${addedPositions.join(', ')} `+
                        `(łacznie ${newPositions.join(', ')}).`);
                }

                if ('preferredWeekdays' in changes) {
                    const newWeekdays = doctor.getPreferredWeekdays();
                    const addedWeekdays = changes.preferredWeekdays;
                    this._log(`[AAW-${doctor.pk}] - ` +
                        `Dodano akceptowane dni tygodnia: ` +
                        `${addedWeekdays.map(d => WEEKDAY_NAMES[d]).join(', ')} ` +
                        `(łącznie ${newWeekdays.map(d => WEEKDAY_NAMES[d]).join(', ')}).`);
                }
            }
        }
    }

    _log(message) {
        this.#log.push(message);
    }

    _clearLog() {
        this.#log = [];
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
        return this.duties[position].get(day);
    }

    getDay(dayNumber) {
        return this.days[dayNumber-1];
    }

    whoIsOnDuty(dayNumber) {
        const day = this.getDay(dayNumber);
        const duties = {};
        for (const position of this.dutyPositions) {
            if (day) {
                duties[position] = this.duties[position].get(day).getDoctor();
            } else {
                duties[position] = null;
            }
        }
        return duties;
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
