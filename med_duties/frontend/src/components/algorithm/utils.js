
export function range (start, end=null, step=1) {
    var rangeStart = start;
    var rangeEnd = end;
    const arr = [];
    if (rangeEnd === null) {
        for (let i = 0; i < rangeStart; i += step) {
            arr.push(i);
        }
    } else if (step > 0) {
        for (let i = rangeStart; i < rangeEnd; i += step) {
            arr.push(i);
        }
    } else if (step < 0) {
        for (let i = rangeStart; i > rangeEnd; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

export class DefaultDict {
    constructor(defaultInit) {
        return new Proxy({}, {
            get: (target, name) => name in target ?
                target[name] :
                (target[name] = typeof(defaultInit) === 'function' ?
                    new defaultInit().valueOf() :
                    defaultInit)
        });
    }
}

export function getHolidays() {
    const holidays = {};
    const years = range(2022, 2033);
    years.forEach(year => {
        holidays[year] = new DefaultDict(Array);
        holidays[year][1].push(1, 6);
        holidays[year][5].push(1, 3);
        holidays[year][8].push(15);
        holidays[year][11].push(1, 11);
        holidays[year][12].push(24, 25, 26, 31);
    });

    // Easter
    holidays[2022][4].push(16, 17, 18);
    holidays[2023][4].push(.8, 9, 10);
    holidays[2024][3].push(30, 31);
    holidays[2024][4].push(1);
    holidays[2025][4].push(19, 20, 21);
    holidays[2026][4].push(4, 5, 6);
    holidays[2027][3].push(27, 28, 29);
    holidays[2028][4].push(15, 16, 17);
    holidays[2029][3].push(31);
    holidays[2029][4].push(1, 2);
    holidays[2030][4].push(20, 21, 22);
    holidays[2031][4].push(12, 13, 14);
    holidays[2032][3].push(27, 28, 29);

    // Feast of Corpus Christi (Boze Cialo) + following weekend
    holidays[2022][6].push(16, 17, 18, 19);
    holidays[2023][6].push(8, 9, 10, 11);
    holidays[2024][5].push(30, 31);
    holidays[2024][6].push(1, 6);
    holidays[2025][6].push(19, 20, 21, 22);
    holidays[2026][6].push(4, 5, 6, 7);
    holidays[2027][5].push(27, 28, 29, 30);
    holidays[2028][6].push(15, 16, 17, 18);
    holidays[2029][5].push(31);
    holidays[2029][6].push(1, 2, 3);
    holidays[2030][6].push(20, 21, 22, 23);
    holidays[2031][6].push(12, 13, 14, 15);
    holidays[2032][5].push(27, 28, 29, 30);

    // "Long weekend" in May
    holidays[2022][4].push(30);
    holidays[2022][5].push(2);
    holidays[2023][4].push(29, 30);
    holidays[2023][5].push(2);
    holidays[2024][5].push(2, 4, 5);
    holidays[2025][5].push(2, 4);
    holidays[2026][5].push(2);
    holidays[2027][5].push(2);
    holidays[2028][4].push(29, 30);
    holidays[2028][5].push(2);
    holidays[2029][5].push(2);
    holidays[2030][5].push(2, 4 ,5);
    holidays[2031][5].push(2, 4);
    holidays[2032][5].push(2);

    /* Other possible long weekends (1.1, 1.6, 11.1, 11.11)
    Christmas is excluded as there is too much nerves
    about 24th, 25th, 26th already. */
    holidays[2022][1].push(7);
    holidays[2022][10].push(31);
    holidays[2025][11].push(10);
    holidays[2026][1].push(2, 5);
    holidays[2027][11].push(12);
    holidays[2028][1].push(7);
    holidays[2029][11].push(2);
    holidays[2031][11].push(10);
    holidays[2032][1].push(2, 5);
    holidays[2032][11].push(12);

    return holidays;
}

export function getWeekday(year, month, day) {
    var date = new Date(year, month-1, day);
    var weekday = date.getDay();

    // Convert weekday to european notation.
    if (weekday === 0) {
        weekday = 6;
    } else {
        weekday--;
    }

    return weekday;
}

export function getNumberOfWeekdaysInMonth(year, month, weekdays) {
    // Get dict of first weekdays, where weekday number is key
    // and day number is value.
    const firstWeekWeekdays = {}
    range(7).forEach((day, index) => {
        firstWeekWeekdays[getWeekday(year, month, day+1)] = index + 1;
        });

    const monthLength = new Date(year, month, 0).getDate()

    // Count occurances of all given weekdays.
    var total = 0;
    weekdays.forEach(weekday => {
        const firstOccurance = firstWeekWeekdays[weekday];
        total += (Math.floor((monthLength - firstOccurance) / 7) + 1);
    });

    return total;
}

export class ValueError extends Error {
    constructor(...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValueError);
        }
        this.name = "ValueError";
    }
}

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function areEqual(iterable1, iterable2) {
    const array1 = Array.of(...iterable1);
    const array2 = Array.of(...iterable2);
    const forward = array1.every(item => {
        const count1 = array1.filter(i => i === item).length;
        const count2 = array2.filter(i => i === item).length;
        return array2.includes(item) && count1 === count2;
    });
    const backward = array2.every(item => {
        const count1 = array1.filter(i => i === item).length;
        const count2 = array2.filter(i => i === item).length;
        return array1.includes(item) && count1 === count2;
    });
    if (forward && backward) {
        return true;
    }
    return false;
}
