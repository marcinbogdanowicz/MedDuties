import { range } from './utils';

class Unit {
    constructor(pk, name, dutyPositions) {
        this.pk = pk;
        this.name = name;
        this.doctors = [];
        this.dutyPositions = range(1, dutyPositions+1);

        this.addDoctors = this.addDoctors.bind(this);
    }

    addDoctors(doctorsList) {
        this.doctors = this.doctors.concat(doctorsList);
    }
}

export default Unit;
