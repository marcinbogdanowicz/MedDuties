
class Duty {
    day;
    doctor;
    position;
    strainPoints;
    pk;

    constructor(day, doctor, position, strainPoints, pk, setByUser) {
        this.day = day;
        this.doctor = doctor;
        this.position = position;
        this.strainPoints = strainPoints;
        this.pk = pk;
        this.setByUser = setByUser;
        
        this.getPk = this.getPk.bind(this);
        this.userSet = this.userSet.bind(this);
        this.isUserSet = this.isUserSet.bind(this);
        this.setDoctor = this.setDoctor.bind(this);
        this.copy = this.copy.bind(this);
        this.getDoctor = this.getDoctor.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.getStrain = this.getStrain.bind(this);
        this.getDay = this.getDay.bind(this);
        this.getMonth = this.getMonth.bind(this);
        this.getYear = this.getYear.bind(this);
    }

    getPk() {
        return this.pk
    }

    userSet(mode) {
        this.setByUser = mode;
    }

    isUserSet() {
        return this.setByUser;
    }

    setDoctor(newDoctor) {
        this.doctor = newDoctor;
    }

    copy(data) {
        this.doctor = data.doctor;
        this.strainPoints = data.strainPoints;
        this.setByUser = data.setByUser;
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
