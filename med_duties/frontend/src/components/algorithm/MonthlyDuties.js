import { 
    range, 
    DefaultDict, 
    areEqual, 
    getNumberOfWeekdaysInMonth,
    shuffle,
    union,
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
    doctors;
    #preferences;
    dutyPositions;
    duties;
    prevMonthDuties;
    nextMonthDuties;
    #log;

    constructor(year, month, unit, pk=null) {
        this.pk = pk;
        const numberOfDays = new Date(year, month, 0).getDate();
        this.days = range(1,numberOfDays+1).map(
            day => new Day(year, month, day));
        this.month = month;
        this.year = year;
        this.doctors = unit.doctors;
        this.#preferences = {};
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

        this.#log = [];

        this.setPk = this.setPk.bind(this);
        this.getPk = this.getPk.bind(this);
        this.addDoctors = this.addDoctors.bind(this);
        this.removeDoctor = this.removeDoctor.bind(this);
        this.addPrevMonthDuties = this.addPrevMonthDuties.bind(this);
        this.getPrevMonthDuties = this.getPrevMonthDuties.bind(this);
        this.addNextMonthDuties = this.addNextMonthDuties.bind(this);
        this.getNextMonthDuties = this.getNextMonthDuties.bind(this);
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

        this._updatePreferences = this._updatePreferences.bind(this);
        this._removeDoctorDuties = this._removeDoctorDuties.bind(this);
        this._assignAndPostCheck = this._assignAndPostCheck.bind(this);
        this._isThereEnoughDoctors = this._isThereEnoughDoctors.bind(this);
        this._checkPreferredDays = this._checkPreferredDays.bind(this);
        this._checkMaxDuties = this._checkMaxDuties.bind(this);
        this._checkByDay = this._checkByDay.bind(this);
        this._checkDayPair = this._checkDayPair.bind(this);
        this._checkDay = this._checkDay.bind(this);
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

        this._getNextDay = this._getNextDay.bind(this);
        this._dutiesAreSet = this._dutiesAreSet.bind(this);
        this._assign = this._assign.bind(this);
        this._options = this._options.bind(this);
        this._getNextDay = this._getNextDay.bind(this);
        this._getActualPreferences = this._getActualPreferences.bind(this);
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
                if ((!duty.isUserSet() || clearUserSetToo)
                        && duty.getDoctor() === doctor) {
                    duty.setDoctor(null);
                    duty.userSet(false);
                }
            }
        }
    }

    changeDoctor(duty, newDoctor, userSet=false) {
        // Check for double and multi-positioned duties.
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

    _updatePreferences() {
        const preferences = {};

        this.days.forEach(day => {
            const preferencePerPosition = {};

            this.dutyPositions.forEach(position => {
                preferencePerPosition[position] = this.doctors;
            });
            preferences[day.number] = preferencePerPosition;
        });

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
                    if (dutyOnAdjacentDay) {
                        preferences[date][position] = (
                            preferences[date][position].filter(d => d !== doctor));
                        continue;
                    }
                    if (!prefPositions.includes(position)) {
                        preferences[date][position] = (
                            preferences[date][position].filter(d => d !== doctor));
                        continue;
                    }
                    if (!prefWeekdays.includes(day.weekday)) {
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

        for (const day of this.days) {
            preferences[day.number]['all'] = [...new Set(
                Object.values(preferences[day.number])
                .reduce((prevVal, currval) => prevVal.concat(currval), [])
            )];
        }

        this.#preferences = preferences;

        return preferences;
    }

    performChecks() {
        // Make sure it is a fresh start.
        this._clearLog();

        const results = [];

        // Check if there are enough doctors.
        const enoughDoctors = this._isThereEnoughDoctors();
        results.push(enoughDoctors);

        // Check if preferred days don't overlap.
        // and if doctor doesn't have more preferences than max duties.
        const preferredDaysOk = this._checkPreferredDays();
        results.push(preferredDaysOk);

        if (enoughDoctors) {
            // Check if every day, every position and every pair 
            // of subsequent days has enough doctors for all duties to be set.
            const allDaysAreOk = this._checkByDay();
            results.push(allDaysAreOk);

            // Reduce declared max number of accepted duties
            // to real (i.e. corresponding number of duties on accepted weekdays)
            // and then check if doctors accept enough duties to fill all days.
            const maxDutiesOk = this._checkMaxDuties();
            results.push(maxDutiesOk);
        }

        if (!results.every(outcome => outcome)) {
            return [false, this.#log];
        }
        return [true, ['Nie wykryto błędów. Dyżury zostaną ułożone.']];
    }

    _isThereEnoughDoctors() {
        // Check if there is a fixed minimum of doctors
        // for 1 to 3 positions.
        const dutyPositions = this.dutyPositions.length;
        const minDoctors = dutyPositions * 2;
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
        const errors = new Set();

        // Create a dict of positions taken (i.e. set by user) on each day
        // for positions compatibility testing
        const takenPositions = {};
        this.days.forEach(day => {
            const positionsToAdd = [];
            this.dutyPositions.forEach(position => {
                const duty = this.duties.get(day)[position];
                if (duty.getDoctor() !== null && duty.isUserSet()) {
                    positionsToAdd.push(duty.getPosition());
                }
            });
            takenPositions[day.number] = positionsToAdd;
        });

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

                const preferredPositionsExcludingTaken = (
                    doctorsPreferredPositions.filter(position => {
                        return !takenPositions[dayNumber].includes(position);
                }));

                const allPositionsTaken = (
                    preferredPositions[dayNumber].length
                    === (this.dutyPositions.length 
                        - takenPositions[dayNumber].length)
                );
                const uniquePositionsIncludingDoctors = new Set(
                    preferredPositions[dayNumber]
                    .flat()
                    .concat(preferredPositionsExcludingTaken)
                );
                const doctorsPositionWillFit = (
                    uniquePositionsIncludingDoctors.size
                    >= (preferredPositions[dayNumber].length + 1)
                );

                if (allPositionsTaken || (!doctorsPositionWillFit)) {
                    errors.add(`${dayNumber}/${this.month}/${this.year} ` +
                    'jest preferowany przez więcej lekarzy niż liczba obsady.')
                } else {
                // If any of positions fit, add them
                // to check further doctors against them.
                    preferredPositions[dayNumber].push(preferredPositionsExcludingTaken);
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

    _checkByDay() {
        this._updatePreferences();
        let errors = [];

        for (let date = 1; date < this.days.length; date++) {
            const pairErrors = this._checkDayPair(date);
            errors = errors.concat(pairErrors);
            const dayErrors = this._checkDay(date);
            errors = errors.concat(dayErrors);
        }

        if (errors.length) {
            // Log errors.
            errors.forEach(error => this._log(error));
            return false;
        }
        return true;
    }

    _checkDayPair(date) {
        const preferences = this.#preferences

        // Create errors object.
        const errors = new Map();

        // Create position combinations of all lengths.
        for (let len = this.dutyPositions.length; len > 0; len--) {
            const posCombinations = [...new Combination(this.dutyPositions, len)];

            // For each combination, check number of doctors available
            // for current and next day and their sum.
            for (const combination of posCombinations) {
                const todayDocs = new Set();
                const tomorrowDocs = new Set();

                for (const position of combination) {
                    preferences[date][position].forEach(
                        d => todayDocs.add(d));
                    preferences[date + 1][position].forEach(
                        d => tomorrowDocs.add(d));
                }

                const allDocs = union(todayDocs, tomorrowDocs);

                // If doctors' count is less then twice the number
                // of checked positions, that implies a missing duty.
                if (allDocs.size < len * 2) {
                    // Check if current combination is already
                    // included inside longer combination
                    // and save error if it isn't.
                    const isIncluded = (
                        [...errors.keys()].some(key => {
                            return combination.every(pos => key.includes(pos));
                        })
                    );
                    if (!isIncluded) {
                        const err = (
                            `${date}/${this.month}/${this.year} ` +
                            `oraz ${date + 1}/${this.month}/${this.year} ` +
                            `na ${combination.length > 1 ? 'pozycjach' : 'pozycji'} `+
                            `${combination.join(', ')} dyżury ` +
                            `może przyjąć łącznie ${allDocs.size} ` +
                            `${allDocs.size > 1 ? 'lekarzy' : 'lekarz'} ` +
                            `(${date}/${this.month}/${this.year}: ` +
                            `${[...todayDocs].map(doc => doc.name).join(', ')} ` +
                            `oraz ${date+1}/${this.month}/${this.year}: ` +
                            `${[...tomorrowDocs].map(doc => doc.name).join(', ')}). ` +
                            `To łącznie o ${(len * 2) - allDocs.size} ` +
                            `zbyt mało, aby obsadzić dyżury ` +
                            `nie tworząc dubletów.`
                        );
                        errors.set(combination, err);
                    }
                }
            }
        }

        return [...errors.values()];
    }

    _checkDay(date) {
        const preferences = this.#preferences;

        // Create error list.
        const errors = [];

        // Check each position.
        const missingPos = [];
        for (const position of this.dutyPositions) {
            if (!preferences[date][position].length) {
                missingPos.push(position);
            }
        }
        if (missingPos.length) {
            errors.push(`${date}/${this.month}/${this.year} ` +
                `na ${missingPos.length > 1 ? 'każdej z pozycji' : 'pozycji'} ` +
                `${missingPos.join(', ')} brakuje lekarza, który mógłby objąć ` +
                `dyżur.`);
        }
        
        // Check all positions.
        const missingCount = (
            this.dutyPositions.length - preferences[date]['all'].length);
        if (missingCount > 0) {
            errors.push(`${date}/${this.month}/${this.year} dyżur ` +
                `${preferences[date]['all'].length > 1 ? 'mogą' : 'może'} ` +
                `objąc jedynie ${preferences[date]['all'].map(d => d.name).join(', ')}. ` +
                `To o ${missingCount} ${missingCount === 1 ? 'lekarza' : 'lekarzy'} ` +
                `zbyt mało by obsadzić dyżur.`);
        }

        return errors;
    }

    _checkMaxDuties() {
        // Checks if combination of max duties and preferred weekdays
        // allow for all duties to be set.
        const dutiesInMonth = this.days.length * this.dutyPositions.length;
        const totalMaxDuties = this.doctors.map(
                doctor => doctor.getMaxNumberOfDuties()
            ).reduce(
                (count, number) => count + number, 0
            );
        if (totalMaxDuties < dutiesInMonth) {
            this._log(`Maksymalna liczba dyżurów akceptowana ` +
                `łącznie przez wszystkich lekarzy jest o ` +
                `${dutiesInMonth - totalMaxDuties} niższa ` +
                `niż liczba miejsc dyżurowych do obsadzenia ` +
                `(${dutiesInMonth} - iloczyn dni i ` +
                `pozycji).`);
            return false;
        }

        const wastedDuties = {};
        // Get unique combinations of all lengths of preferred duty positions.
        const positionsCombinations = this._getCombinations(this.dutyPositions);

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
                `${doctorsToCheck.map(d => d.name).join(', ')} albo zwiększ `+
                `liczbę dyżurów akceptowanych przez pozostałych lekarzy. ` +
                `Szczegóły:`);
            for (const [positions, wasted] of Object.entries(wastedDuties)) {
                if (Object.keys(wasted).length) {
                    for (const [weekdays, detail] of Object.entries(wasted)) {
                        this._log(`- ${detail.doctors.map(d => d.name).join(', ')} ` +
                            `na pozycjach ${positions} akceptują jedynie dni: ` +
                            `${weekdays.toString().split('').map(w => WEEKDAY_NAMES[w]).join(', ')}. ` +
                            `Razem deklarują o ${detail.missing} dyżurów więcej niż ` +
                            `można wziąć w te dni na tych pozycjach.`);
                    }
                }
            }
            return false;
        }
        return true;
    }

    _getCombinations(array) {
        // Returns array of combinations of all lengths.
        let combs = [];
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
            if (doctor.getPreferredPositions().every(pos => positions.includes(pos))) {
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
        /* Finds how many of declared max duties will not be set
        (for each weekdays group for given positions combination).*/

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
            const modifier = (
                doctorsWithPreferenceForGroupOrSubgroup.size >= positions.length ? 
                positions.length : 
                doctorsWithPreferenceForGroupOrSubgroup.size
            );
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

    setDuties() {
        // Make sure it is a fresh start.
        this.clearDuties();
        this._clearLog();

        // Perform checks.
        const [canBeSet, log] = this.performChecks();
        if (!canBeSet) {
            return [false, [], log];
        }

        // Run assignment.
        this._assignAndPostCheck();

        return [true, this.duties, ['Dyżury zostały ułożone.']];
    }

    _assignAndPostCheck() {
        this._assignPreferredDuties();
        this._assignDuties();

        try {
            this._checkForMissingDuties();
            this._checkForForbiddenDuties();

        } catch (error) {
            console.log(error.message);
        }

    }

    _assignPreferredDuties() {
        // Pre-assign, omits doctors' evaluation.
        const duties = new DefaultDict(Map);

        // Create a dict of positions taken on each day
        // for preferred positions corrections
        const takenPositions = {};
        for (const day of this.days) {
            takenPositions[day.number] = (
                Object.entries(this.whoIsOnDuty(day.number))
                .filter(entry => entry[1] !== null)
                .map(entry => parseInt(entry[0]))
            );
        };

        for (const doctor of this.doctors) {
            const preferences = doctor.getPreferredDays();

            for (const date of preferences) {
                const preferredPositions = doctor.getPreferredPositions();

                const allowedPositions = preferredPositions.filter(position => {
                    return !takenPositions[date].includes(position);
                })
                duties[date].set(doctor, allowedPositions);
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
                const duty = new Duty(dayObj, doc, pos, dayObj.strainPoints, null, false);
                this.setDuty(duty, dayObj.strainPoints);
            });
        }
    }

    _assignDuties() {
        // Get doctors, who can take each duty on each day.
        this._updatePreferences();

        // Initialize frontier.
        const initState = new Map();
        for (const day of this.days) {
            const dailyDuties = {};
            for (const position of this.dutyPositions) {
                dailyDuties[position] = new Duty(day, null, position, day.strainPoints, null, false);
            }
            initState.set(day, dailyDuties);
        }
        const initAction = {day: 0, strain: 0};
        const initNode = new Node(initState, null, initAction);
        const frontier = new StackFrontier();
        frontier.addToFront(initNode);

        let steps = 0;

        // Keep looping until all duties are filled.
        while (true) {
            console.log(steps);     // TESTING

            // If frontier is empty, there is no solution.
            if (frontier.empty()) {
                throw Error("Duties cannot be set.");
            }

            // Remove a node from frontier.
            const node = frontier.remove();

            // If node contains all duties, set them.
            if (this._dutiesAreSet(node.state)) {
                this._assign(node.state);
                break;
            }

            // Expand current node and add new options to frontier.
            // (Streak search)
            this._options(node.state, node.action).forEach(([action, state], index) => {
                if (action !== null && state !== null) {
                    const child = new Node(state, node, action);
                    frontier.addToFront(child);
                    /*if (index === 0) {
                        frontier.addToFront(child);
                    } else {
                        frontier.addToBack(child);
                    }*/
                }
            });

            steps++;
            if (steps > 1000) {
                break;
            }
        }
    }

    _dutiesAreSet(state) {
        for (const day of this.days) {
            const dailyDuties = state.get(day);
            for (const position of this.dutyPositions) {
                const duty = dailyDuties[position];
                if (duty.getDoctor() === null) {
                    return false;
                }
            }
        }
        return true;
    }

    _assign(state) {
        this.clearDuties();
        for (const day of this.days) {
            for (const position of this.dutyPositions) {
                const data = state.get(day)[position];
                const duty = this.duties.get(day)[position];
                duty.isUserSet() && data.userSet(true);
                this.setDuty(data);
            }
        }
    }

    _options(prevState, prevAction) {
        const duties = prevState;
        const preferences = this._getActualPreferences(duties);
        const date = this._getNextDay(preferences);

        // Check if there are enough doctors to form options for all positions.
        if (preferences[date]['all'].length < this.dutyPositions.length) {
            return [[null, null]];
        }

        const day = this.getDay(date);        
        const doctors = preferences[date]['all'];

        // Get each doctor's strain for current day.
        const strains = new Map();

        for (const doctor of doctors) {
            const doctorStrains = {};

            for (const position of this.dutyPositions) {
                const evaluationChart = doctor.evaluateDuties(duties, position);
                if (!evaluationChart) {
                    doctorStrains[position] = 10000; // No duties left.
                    continue;
                }
                doctorStrains[position] = evaluationChart.getDayStrain(date);
            }
            strains.set(doctor, doctorStrains);
        }

        // Prepare a list of doctors lists.
        // If duty is set on any position, put only this doctor
        // on this position's list.
        const todaysPreferences = [];
        const todaysDuties = this.duties.get(day);
        for (const position of this.dutyPositions) {
            const doctor = todaysDuties[position].getDoctor();
            if (!doctor) {
                todaysPreferences.push(preferences[date][position]);
            } else {
                todaysPreferences.push([doctor]);
                // Make sure doctor's strain values are stored.
                const docPosition = position;
                const docStrains = {};
                for (const pos of this.dutyPositions) {
                    if (pos === docPosition) {
                        docStrains[pos] = todaysDuties[position].getStrain()
                    } else {
                        docStrains[pos] = 10000;
                    }
                }
                strains.set(doctor, docStrains);
            }
        }

        // Get unique doctor's combinations
        // (they respect preferred positions).
        let result = (
            [...new Set(
                [...new CartesianProduct(...todaysPreferences)]
                .filter(elem => new Set(elem).size === elem.length)
            )]
        );

        // Add sum of strains to each combination.
        result = result.map(comb => {
            let strain = 0;
            comb.forEach((doctor, i) => {
                const position = i+1;
                strain += strains.get(doctor)[position];
            });
            return [{day: date, strain: strain}, comb];
        });

        // Make sure strains higher than 10000 (at least one impossible duty)
        // are not included.
        result = result.filter(([action, option]) => action.strain < 10000);

        // Keep only combinations of unique doctors.
        for (let i = 0; i < result.length-1; i++) {
            const thisOption = result[i][1];
            const nextOption = result[i+1][1];
            const together = new Set(thisOption.concat(nextOption));
            if (together.size !== thisOption.length + nextOption.length) {
                result = result.slice(0, i+1).concat(result.slice(i+1, result.length));
            }
        }

        // Make sure each combination allows for next day to be set.
        if (date < this.days.length && !preferences[date + 1].isSet) {
            const nextDayDocs = preferences[date + 1]['all'].filter(d => d.getNumberOfDutiesLeft() > 0);
            result = result.filter(([action, option]) => {
                const difference = nextDayDocs.filter(d => !option.includes(d));
                if (difference.length >= this.dutyPositions.length) {
                    return true;
                }
                return false;
            });
        }
        // Make sure each combination allows for previous day to be set.
        if (date > 1 && !preferences[date - 1].isSet) {
            const prevDayDocs = preferences[date - 1]['all'].filter(d => d.getNumberOfDutiesLeft() > 0);
            result = result.filter(([action, option]) => {
                const difference = prevDayDocs.filter(d => !option.includes(d));
                if (difference.length >= this.dutyPositions.length) {
                    return true;
                }
                return false;
            });
        }

        // Make sure there is full state in each resulting element.
        result = result.map(([action, option]) => {
            const state = new Map(prevState);
            const dailyDuties = {};
            for (const position of this.dutyPositions) {
                const doctor = option[position-1];
                dailyDuties[position] = new Duty(
                    day, doctor, position, strains.get(doctor)[position], null, false);
            }
            state.set(day, dailyDuties);
            action.option = option;
            return [action, state];
        });

        // Sort combinations by strain and by uniqueness, prefering uniqueness. 
        // Shuffle them first to avoid setting patterns.
        shuffle(result);
        result.sort(([actionA, stateA], [actionB, stateB]) =>
            actionB.strain - actionA.strain);
        result.sort(([actionA, stateA], [actionB, stateB]) => {
            const dutiesA = actionA.option.reduce((prevVal, currVal) => prevVal + currVal.getNumberOfDutiesLeft(duties), 0);
            const dutiesB = actionB.option.reduce((prevVal, currVal) => prevVal + currVal.getNumberOfDutiesLeft(duties), 0);
            return dutiesA - dutiesB;
        });
        result.sort(([actionA, stateA], [actionB, stateB]) => {
            const maxDutiesA = actionA.option.reduce((prevVal, currVal) => prevVal + currVal.getMaxNumberOfDuties(), 0);
            const maxDutiesB = actionB.option.reduce((prevVal, currVal) => prevVal + currVal.getMaxNumberOfDuties(), 0);
            return maxDutiesB - maxDutiesA;
        });
        if ([4,5,6].includes(day.weekday)) {
            result.sort(([actionA, stateA], [actionB, stateB]) => {
                const weekendsA = actionA.option.reduce((prevVal, currVal) => prevVal + currVal.getWeekendsOnDuty(stateA).length, 0);
                const weekendsB = actionB.option.reduce((prevVal, currVal) => prevVal + currVal.getWeekendsOnDuty(stateB).length, 0);
                return weekendsB - weekendsA;
            });
        }   

        return result;
    }

    _getNextDay(prefs) {
        /* Sorts preferences to get day with 
        least average doctors per position.*/

        const preferences = {...prefs};

        // Remove days with set duties.
        const dates = Object.keys(preferences).map(d => parseInt(d));
        for (const date of dates) {
            if (preferences[date].isSet) {
                delete preferences[date];
            }
        }

        // Throw error if all duties are set.
        if (Object.values(preferences).every(p => p.isSet === true)) {
            throw Error('Duties are set - there is no next day!');
        }

        // Sort preferences.
        const getAvg = (positions) => {
            const avg = (
                Object.entries(positions)
                    .filter(([k,v]) => this.dutyPositions.includes(parseInt(k)))
                    .map(([k, v]) => v)
                    .reduce((prevVal, currVal) => prevVal + currVal.length, 0) 
                / this.dutyPositions.length
            );
            return avg;
        }

        for (const date of Object.keys(preferences)) {
            preferences[date].avg = getAvg(preferences[date]);
        }

        const ordered = (
            Object.entries(preferences)
            .sort(([dayA, dataA], [dayB, dataB]) => {
                return dataA.avg - dataB.avg;
            })
            .map(([day, options]) => parseInt(day))
        );

        return ordered[0];
    }

    _getActualPreferences(state) {
        /* Returns preferences object with marked set days
        and filtered out doctors from adjacent set duties. */

        const preferences = {};
        Object.entries(this.#preferences).forEach(([day, data]) => {
            preferences[day] = {...data};
        });

        // Mark set duties' doctors from adjacent days possibilities.
        // Mark set days.

        for (let date = 1; date <= this.days.length; date++) {
            // Get current day
            const day = this.getDay(date);

            // Get current day's set duties' doctors.
            const doctorsSet = (
                Object.values(state.get(day))
                .map(d => d.getDoctor())
                .filter(doc => doc !== null)
            );

            // Check if duties are set and mark day as set/unset.
            if (doctorsSet.length === this.dutyPositions.length) {
                preferences[date].isSet = true;
            } else {
                preferences[date].isSet = false;
            }

            // Remove current day's doctors from previous day's options.
            if (date > 1) {
                const prevDocs = preferences[date - 1];
                for (const position of Object.keys(prevDocs).filter(k => k !== 'isSet')) {
                    prevDocs[position] = prevDocs[position].filter(d => !doctorsSet.includes(d));
                }
            }

            // Remove current day's doctors from next day's options.
            if (date < this.days.length) {
                const nextDocs = preferences[date + 1];
                for (const position of Object.keys(nextDocs).filter(k => k !== 'isSet')) {
                    nextDocs[position] = nextDocs[position].filter(d => !doctorsSet.includes(d));
                }
            }
        }

        return preferences;
    }


    setDuty(dutyData) {
        const doctor = dutyData.getDoctor();
        const position = dutyData.getPosition();
        const day = this.getDay(dutyData.getDay().number);
        const duty = this.duties.get(day)[position];
        duty.copy(dutyData);
        doctor.setDuty(duty);
        doctor.setStrain(dutyData.getStrain());
    }

    _checkForMissingDuties() {
        const errors = new Set();
        for (const day of this.days) {
            const dailyDuties = this.duties.get(day);
            for (const position of this.dutyPositions) {
                const duty = dailyDuties[position];
                if (duty.getDoctor() === null) {
                    errors.add(`Nie ustalono dyżuru ${day.number}/` +
                    `${day.month}/${day.year} na pozycji ${position}.`);
                }
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
                const dutyIsUserSet = duties[i].isUserSet();

                if (twoDutiesOnSameDay) {
                    errors.add(`${doctor.name} ma zaplanowanych wiele dyżurów ` +
                        `${dates[i]}/${this.month}/${this.year}`);
                }
                if (dutiesOnConsecutiveDays) {
                    errors.add(`${doctor.name} ma zaplanowane dyżury w ` +
                        `następujące po sobie dni ${dates[i]} i ${dates[i] + 1}` +
                        `/${this.month}/${this.year}.`);
                }
                if (iHaveDutyOnExcludedDay && !dutyIsUserSet) {
                    errors.add(`${doctor.name} ma zaplanowany dyżur w zastrzeżony ` +
                        `dzień ${dates[i]}/${this.month}/${this.year}.`);
                }
                if (iHaveDutyOnExcludedWeekday && !dutyIsUserSet) {
                    errors.add(`${doctor.name} ma zaplanowany dyżur w ` +
                        `dzień tygodnia: ${WEEKDAY_NAMES[duties[i].getDay().weekday]}, `+
                        `który nie znajduje się na liście dni tygodnia, w które `+
                        `może brać dyżury.`);
                }
                if (iHaveDutyOnExcludedPosition && !dutyIsUserSet) {
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
            const maxDuties = doctor.getMaxNumberOfDuties();
            if (preferredWeekdays.length > 3 && maxDuties < 15 && !doctor.isLocked()) {
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
                const maxDuties = doctor.getMaxNumberOfDuties();
                if (doctor.isLocked() || maxDuties >= 15) {
                    continue;
                }
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
        let docs = [];
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

    clearDuties(clearUserSetToo=false) {
        for (const doctor of this.doctors) {
            doctor.clearDuties(clearUserSetToo);
            doctor.clearStrain(clearUserSetToo);
            this._removeDoctorDuties(doctor, clearUserSetToo);
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
        return this.duties.get(day)[position];
    }

    getDay(dayNumber) {
        return this.days[dayNumber-1];
    }

    whoIsOnDuty(dayNumber) {
        const day = this.getDay(dayNumber);
        const duties = {};
        for (const position of this.dutyPositions) {
            if (day) {
                duties[position] = this.duties.get(day)[position].getDoctor();
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

class Node {
    state;
    parent;
    action;

    constructor(state, parent, action) {
        this.state = state;
        this.parent = parent;
        this.action = action;
    }
}

class StackFrontier {
    frontier;

    constructor() {
        this.frontier = [];

        this.addToFront = this.addToFront.bind(this);
        this.addToBack = this.addToBack.bind(this);
        this.containsState = this.containsState.bind(this);
        this.epmty = this.empty.bind(this);
        this.remove = this.remove.bind(this);
    }

    addToFront(node) {
        this.frontier.push(node);
    }

    addToBack(node) {
        this.frontier.unshift(node);
    }

    containsState(state) {
        return this.frontier.some(elem => elem === state);
    }

    empty() {
        return this.frontier.length === 0;
    }

    remove() {
        if (this.empty()) {
            throw Error("Empty frontier");
        } else {
            const node = this.frontier.pop();
            return node;
        }
    }
}

export default MonthlyDuties;
