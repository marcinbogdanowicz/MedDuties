
class Duty {
    day;
    doctor;
    position;
    strainPoints;
    pk;

    constructor(day, doctor, position, strainPoints, pk=null) {
        this.day = day;
        this.doctor = doctor;
        this.position = position;
        this.strainPoints = strainPoints;
        this.pk = pk;
    
        this.setDoctor = this.setDoctor.bind(this);
        this.copy = this.copy.bind(this);
        this.getDoctor = this.getDoctor.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.getStrain = this.getStrain.bind(this);
        this.getDay = this.getDay.bind(this);
        this.getMonth = this.getMonth.bind(this);
        this.getYear = this.getYear.bind(this);
    }

    setDoctor(newDoctor) {
        this.doctor = newDoctor;
    }

    copy(data) {
        this.doctor = data.doctor;
        this.strainPoints = data.strainPoints;
    }

    getDoctor() {
        return this.doctor;
    }

    getPosition() {
        return this.position;
    }

    getStrain() {
        return this.strainPoints;
    }

    getDay() {
        return this.day;
    }

    getMonth() {
        return this.day.month;
    }

    getYear() {
        return this.day.year;
    }
}

export default Duty;
