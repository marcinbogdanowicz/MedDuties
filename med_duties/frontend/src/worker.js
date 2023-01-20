import Day from "./components/algorithm/Day";
import Doctor from "./components/algorithm/Doctor";
import Duty from "./components/algorithm/Duty";
import MonthlyDuties from "./components/algorithm/MonthlyDuties";
import Unit from "./components/algorithm/Unit";


var monthlyDuties;
var unit;
var doctors;
var inactiveDoctors;
var month;
var year;

function initialize (data) {
    const scheduleData = data.monthlyDuties;
    const unitData = data.unit;
    const doctorsData = data.doctors;
    const prevDutiesData = data.prevDutiesData;
    const nextDutiesData = data.nextDutiesData;

    [month, year] = scheduleData.monthandyear.split('/');

    // Create Unit instance.
    unit = new Unit(unitData.pk, unitData.name, unitData.duty_positions);
    
    // Create doctors instances.
    doctors = [];
    inactiveDoctors = [];

    doctorsData.forEach(doctor => {
        const doctorData = scheduleData.doctor_data.find(data => {
            return data.doctor === doctor.pk;
        });

        const d = new Doctor(doctor.name, unit, year, month, doctor.pk);

        if (doctorData) {
            if (doctorData.strain) {
                d.setStrain(doctorData.strain);
            }
            if (doctorData.max_number_of_duties) {
                d.setMaxNumberOfDuties(doctorData.max_number_of_duties, true);
            }
            if (doctorData.exceptions) {
                const exceptions = doctorData.exceptions.split(' ').map(
                    exc => parseInt(exc));
                d.setExceptions(exceptions, true);
            }
            if (doctorData.preferred_days) {
                const days = doctorData.preferred_days.split(' ').map(
                    day => parseInt(day));
                d.setPreferredDays(days, true);
            }
            if (doctorData.preferred_positions) {
                const positions = doctorData.preferred_positions.split(' ').map(
                    pos => parseInt(pos));
                d.setPreferredPositions(positions, true);
            }
            if (doctorData.preferred_weekdays) {
                const weekdays = doctorData.preferred_weekdays.split(' ').map(
                    weekday => parseInt(weekday));
                d.setPreferredWeekdays(weekdays, true);
            }
            if (doctorData.locked) {
                d.lockPreferences();
            }
            d.setSettingsPk(doctorData.pk);
            doctors.push(d);
        } else {
            inactiveDoctors.push(d);
        }
    });
    
    // Add doctors to unit.
    unit.addDoctors(doctors);
    
    // Create schedule instance.
    monthlyDuties = new MonthlyDuties(year, month, unit, scheduleData.pk);
    
    // Add duties to schedule 
    // (which will add them to doctors instances as well).
    const duties = scheduleData.duties.map(duty => {
        const doctor = duty.doctor ? 
            doctors.find(doctor => doctor.pk === duty.doctor) :
            null;
        const day = monthlyDuties.getDays().find(day => day.number === duty.day);
        return new Duty(day, doctor, duty.position, duty.strain_points, duty.pk, duty.user_set);
    });
    monthlyDuties.addDuties(duties);
    
    // Add prev month's duties to schedule.
    const prevYear = month === 1 ? year-1 : month;
    const prevMonth = month === 1 ? 12 : month-1;
    const prevMonthDuties = (
        prevDutiesData
        .filter(duty => {
            const monthLength = new Date(prevYear, prevMonth, 0).getDate();
            return parseInt(duty.day) > (monthLength - 7);
        })
        .map(duty => {
            var doctor = doctors.find(d => d.pk === duty.doctor);
            if (!doctor) {
                doctor = inactiveDoctors.find(d => d.pk === duty.doctor);
            }
            if (!doctor) {
                doctor = null;
            }
            const prevYear = month === 1 ? year-1 : year;
            const prevMonth = month === 1 ? 12 : month-1;
            const day = new Day(prevYear, prevMonth, duty.day)
            return new Duty(
                day, 
                doctor, 
                duty.position, 
                duty.strain_points, 
                duty.pk, 
                duty.user_set
            );
        })
    );
    monthlyDuties.addPrevMonthDuties(prevMonthDuties);
    
    // Add next month's duties to schedule.
    const nextYear = month === 12 ? year+1 : year;
    const nextMonth = month === 12 ? 1 : month+1;
    const nextMonthDuties = (
        nextDutiesData
        .filter(duty => parseInt(duty.day) < 8)
        .map(duty => {
            var doctor = doctors.find(d => d.pk === duty.doctor);
            if (!doctor) {
                doctor = inactiveDoctors.find(d => d.pk === duty.doctor);
            }
            if (!doctor) {
                doctor = null;
            }
            const day = new Day(nextYear, nextMonth, duty.day)
            return new Duty(
                day, 
                doctor, 
                duty.position, 
                duty.strain_points, 
                duty.pk, 
                duty.user_set
            );
        })
    );
    monthlyDuties.addNextMonthDuties(nextMonthDuties);

    // Create first preferences object.
    monthlyDuties.updatePreferences();
}

const setDuties = () => {
    const [success, allSet, logData] = monthlyDuties.setDuties();
    let duties = [];
    if (success) {
        duties = serializeDuties(monthlyDuties.getDuties());
    }
    return {
        success: success,
        allSet: allSet,
        logData: logData,
        duties: duties
    }
}

const serializeDuties = (data) => {
    const duties = [];
    for (const dailyDuties of data.values()) {
        for (const duty of Object.values(dailyDuties)) {
            duties.push({
                day: duty.day.number,
                doctor: duty.doctor.getPk(),
                position: duty.position,
                strainPoints: duty.strainPoints,
                setByUser: duty.setByUser,
            });
        }
    }

    return duties;
}

onmessage = (event) => {
    const data = event.data;
    console.log(`Worker received message!`);
    console.log(data);

    initialize(data);
    const result = setDuties();

    postMessage(result);
};