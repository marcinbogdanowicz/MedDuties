import { shuffle } from './utils';

class EvaluationChart {
    constructor(days, doctor) {
        this.doctor = doctor;
        this.classification = {};

        days.forEach(day => {
            this.classification[day.number] = {
                day: day,
                strainPoints: day.strainPoints
            }
        });

        this.modifyPoints = this.modifyPoints.bind(this);
        this.getDayStrain = this.getDayStrain.bind(this);
        this.getBest = this.getBest.bind(this);
    }

    modifyPoints(dayNumber, points) {
        if (dayNumber in this.classification) {
            this.classification[dayNumber].strainPoints += points;
        }
    }

    getDayStrain(dayNumber) {
        return this.classification[dayNumber].strainPoints;
    }

    getBest() {
        const bestDay = Object.values(this.classification).sort(
            (a, b) => a.strainPoints - b.strainPoints
        )[0];
        const bestStrain = bestDay.strainPoints;

        if (bestStrain >= 10000) {
            return [null, null];
        }

        // Find all days with strain equal to best one, 
        // shuffle them and return one.
        const bestDays = Object.values(this.classification).filter(
            day => day.strainPoints === bestStrain
        );
        shuffle(bestDays);
        return [bestDays[0].day, bestDays[0].strainPoints];
    }
}

export default EvaluationChart;
