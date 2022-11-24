import { getHolidays, getWeekday } from './utils';

var holidays = getHolidays();

var weekday = 80;
var thursday = 70;
var friday = 90;
var saturday = 110;
var sunday = 100;
var holiday = 300;


class Day {
    year;
    month;
    number;
    week;
    weekday;
    itIsHoliday;
    strainPoints;
    category;

    constructor(year, month, day) {
        this.weekday = getWeekday(year, month, day);
        this.itIsHoliday = holidays[year][month].includes(day) ? 
                           true : false;

        if (this.itIsHoliday) {
            this.strainPoints = holiday;
            this.category = 'holiday';
        } else if (this.weekday < 3) {
            this.strainPoints = weekday;
            this.category = 'weekday'
        } else if (this.weekday === 3) {
            this.strainPoints = thursday;
            this.category = 'thursday';
        } else if (this.weekday === 4) {
            this.strainPoints = friday;
            this.category = 'weekend';
        } else if (this.weekday === 5) {
            this.strainPoints = saturday;
            this.category = 'weekend';
        } else if (this.weekday === 6) {
            this.strainPoints = sunday;
            this.category = 'weekend';
        }

        this.year = year;
        this.month = month;
        this.number = day;
        this.week = Math.ceil(Math.ceil(this.number + getWeekday(year, month, 1)) / 7);
    }
}

export default Day;
