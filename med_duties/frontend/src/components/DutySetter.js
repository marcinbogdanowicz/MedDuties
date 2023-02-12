import React, { useState, useEffect, useRef } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScheduleSettings from './ScheduleSettings';
import ScheduleMenuButton from './ScheduleMenuButton';
import ColumnLayout from './ColumnLayout';
import OverlaySpinner from './OverlaySpinner';
import Alert from './Alert';
import Log from './Log';
import DutyStatistics from './DutyStatistics';
import Schedule from './Schedule';
import DoctorPreferencesForm from './DoctorPreferencesForm';
import DoctorActivateForm from './DoctorActivateForm';
import Doctor from './algorithm/Doctor';
import Day from './algorithm/Day';
import Duty from './algorithm/Duty';
import MonthlyDuties from './algorithm/MonthlyDuties';
import Unit from './algorithm/Unit';
import axiosInstance from '../axiosApi';
import * as xlsx from 'xlsx';
import { shuffle } from './algorithm/utils';


var months = {
    1: 'Styczeń',
    2: 'Luty',
    3: 'Marzec',
    4: 'Kwiecień',
    5: 'Maj',
    6: 'Czerwiec',
    7: 'Lipiec',
    8: 'Sierpień',
    9: 'Wrzesień',
    10: 'Październik',
    11: 'Listopad',
    12: 'Grudzień'
};

var positionNames = {
    1: 'PIERWSZY',
    2: 'DRUGI',
    3: 'TRZECI'
};

export default function DutiesSetter() {

    // Create state.
    const [appData, setAppData] = useState({
        unit: {},
        doctors: [],
        inactiveDoctors: [],
        monthlyDuties: {}
    });
    const [dutiesHistory, setDutiesHistory] = useState({
        history: [],
        position: 0
    });
    const [alertData, setAlertData] = useState({
        show: false,
        variant: '',
        header: '',
        content: '',
        clickToClose: true
    });
    const [logData, setLogData] = useState({
        hide: true,
        items: null,
        heading: 'Log'
    });
    const [highlight, setHighlight] = useState('');
    const [statsData, setStatsData] = useState({
        hide: true,
        data: null
    });
    const [spinnerData, setSpinnerData] = useState({
        show: false,
        messages: [],
        content: null
    });

    // Init max number of duties.
    const maximumDuties = useRef(15);

    // Get data.
    const [unitData, doctorsData, scheduleData, prevDutiesData, nextDutiesData] = useLoaderData();

    // Get loader data, process it and save in state.
    useEffect(() => {
        const [month, year] = scheduleData.monthandyear.split('/');

        // Update max number of duties.
        maximumDuties.current = Math.floor(new Date(year, month, 0).getDate() / 2);

        // Create Unit instance.
        const unit = new Unit(unitData.pk, unitData.name, unitData.duty_positions);

        // Create doctors instances.
        const doctors = [];
        const inactiveDoctors = [];

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
        const monthlyDuties = new MonthlyDuties(year, month, unit, scheduleData.pk);

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

        // Add all the above to state.
        setAppData({
            unit: unit,
            doctors: doctors,
            inactiveDoctors: inactiveDoctors,
            monthlyDuties: monthlyDuties,
        });

        // Initialize first history state.
        //const serializedDuties = serializeDuties(duties);
        //saveDutiesHistory(serializedDuties);
    }, []);

    const setDuties = () => {
        // Cancel previous error messages.
        dismissAlerts();

        // Save history.
        saveDutiesHistory();

        // Create worker.
        const myWorker = new Worker(window.location.origin + "/static/frontend/public/worker.js");

        // Show spinner.
        const cancelButton = (
            <button className="btn btn-danger" onClick={() => {myWorker.terminate(); hideSpinner();}}>Przerwij</button>
        );
        showSpinner([
            'Układam dyżury...', 
            'Negocjuję z lekarzami...', 
            'Oferuję podwyżki...', 
            'Zamieszczam ogłoszenia o pracy...', 
            'Ułożenie dyżurów może trwać nawet kilka minut.'
        ], cancelButton);

        // Send data to worker (it will trigger setting duties).
        const data = serializeAppData()
        myWorker.postMessage(data);

        // Receive result.
        let result = null;
        myWorker.onmessage = (event) => {
            result = event.data;
            myWorker.terminate();

            // Transform raw data into list items.
            const logItems = result.logData;

            // Save response and log in appropriate state.
            if (result.success) {
                // Create log, if there are any items.
                log(logItems, 'Log', false);
                if (result.allSet) {
                    const info = <p>Dyżury zostały ułożone.<br />
                        Pamiętaj, żeby <strong>zapisać</strong> je przed wyjściem.</p>
                    showAlert(info);
                } else {
                    const settingError = 'Nie udało się ułożyć wszystkich dyżurów.';
                    const header = 'Nie wyszło...';
                    const variant = 'warning';
                    showAlert(settingError, header, variant);
                }

                // Clear non-user-set duties.
                appData.monthlyDuties.clearDuties();

                // Update duties in monthly duties.
                for (const dutyData of result.duties) {
                    const day = appData.monthlyDuties.getDay(dutyData.day);
                    let doctor = (
                        appData.doctors.find(doc => doc.pk === dutyData.doctor) 
                        || appData.inactiveDoctors.find(
                        doc => doc.pk === dutyData.doctor));
                    if (!doctor) {
                        doctor = null;
                    }
                    const duty = new Duty(day, doctor, dutyData.position, 
                        dutyData.strainPoints, 0, dutyData.setByUser);
                    appData.monthlyDuties.setDuty(duty);
                }

                // Update preferences.
                appData.monthlyDuties.updatePreferences();

                // Update element by reloading state.
                setAppData((prevData) => ({...prevData}));

                // Update statistics.
                updateStatistics();

                // Hide spinner.
                hideSpinner();

            } else {
                hideSpinner();
                const heading = 'Ustawienia uniemożliwiające ułożenie dyżurów';
                log(logItems, heading);
                const settingError = ('Dyżury nie zostały ułożone z powodu ustawień lekarzy. ' +
                    'Sprawdź log, aby zobaczyć szczegółowe informacje.');
                const header = 'Nie wyszło...';
                const variant = 'warning';
                showAlert(settingError, header, variant);
            }
        }
    }

    const serializeAppData = () => {
        const data = {
            unit: unitData,
            monthlyDuties: serializeMonthlyDuties(),
            doctors: serializeDoctors(),
            prevDutiesData: prevDutiesData,
            nextDutiesData: nextDutiesData
        }

        return data;
    }

    const serializeMonthlyDuties = () => {
        const month = appData.monthlyDuties.month;
        const year = appData.monthlyDuties.year;
        const data = {
            pk: appData.monthlyDuties.getPk(),
            monthandyear: `${month}/${year}`
        }
        if (appData.doctors.length) {
            data.doctor_data = appData.doctors.map(doctor => ({
                pk: doctor.getSettingsPk(),
                doctor: doctor.getPk(),
                strain: doctor.getStrain(),
                max_number_of_duties: doctor.getMaxNumberOfDuties(),
                exceptions: doctor.getExceptions().join(' '),
                preferred_days: doctor.getPreferredDays().join(' '),
                preferred_weekdays: doctor.getPreferredWeekdays().join(' '),
                preferred_positions: doctor.getPreferredPositions().join(' '),
                locked: doctor.isLocked()
            }));
        }
        const duties = serializeDuties();
        if (duties.length) {
            data.duties = duties;
        }

        return data;
    }

    const serializeDuties = (d=null) => {
        const duties = d || (
            [...appData.monthlyDuties.getDuties().values()]
            .map(item => Object.values(item))
            .flat()
        );
        if (duties.length) {
            return duties.map(duty => {
                const mapped = {
                    day: duty.getDay().number,
                    weekday: duty.getDay().weekday,
                    week: duty.getDay().week,
                    position: duty.getPosition(),
                    strain_points: duty.getStrain(),
                    user_set: duty.isUserSet()
                };
                const pk = duty.getPk();
                const doctor = duty.getDoctor();
                pk && (mapped['pk'] = pk);
                doctor ? mapped['doctor'] = doctor.getPk() : mapped['doctor'] = null;
                return mapped;
            });
        } else {
            return [];
        }
    }

    const serializeDoctors = () => {
        const data = [];
        for (const doctor of appData.doctors) {
            const doctorData = {
                pk: doctor.getPk(),
                name: doctor.name,
                unit: doctor.unit.pk
            }
            data.push(doctorData);
        }

        return data;
    }

    const dispatchDuties = (duties) => {
        const result = duties.map(duty => {
            const doctor = duty.doctor ? 
                appData.doctors.find(doctor => doctor.pk === duty.doctor) :
                null;
            const day = appData.monthlyDuties.getDays().find(day => day.number === duty.day);
            return new Duty(day, doctor, duty.position, duty.strain_points, duty.pk, duty.user_set);
        });
        appData.monthlyDuties.addDuties(result);
    }

    const setDoctorOnDuty = (duty, doctor) => {
        let userSet = false;
        doctor && (userSet = true);
        saveDutiesHistory();
        appData.monthlyDuties.changeDoctor(duty, doctor, userSet);
        appData.monthlyDuties.updatePreferences();
        setAppData((prevData) => ({...prevData}));
        updateStatistics();
    }

    const saveDutiesHistory = (duties=serializeDuties()) => {
        const newHistory = [...dutiesHistory.history.slice(0, dutiesHistory.position)];
        newHistory.push(duties);
        if (newHistory.length > 6) {
            newHistory.shift();
        }
        const newPosition = newHistory.length;
        setDutiesHistory({
            history: newHistory,
            position: newPosition
        });
    }

    const historyMoveBack = () => {
        let newPosition = dutiesHistory.position - 1;
        const newHistory = [...dutiesHistory.history];
        if (dutiesHistory.position === dutiesHistory.history.length) {
            newHistory.push(serializeDuties());
            newHistory.length > 7 && newHistory.shift();
        }
        dispatchDuties(dutiesHistory.history[newPosition]);
        setDutiesHistory({
            history: newHistory,
            position: newPosition
        });
        updateStatistics();
    }

    const historyMoveForward = () => {
        const newPosition = dutiesHistory.position + 1;
        dispatchDuties(dutiesHistory.history[newPosition]);
        setDutiesHistory((prevState) => ({
            ...prevState,
            position: newPosition
        }));
        updateStatistics();
    }

    const updateStatistics = () => {
        const data = appData.monthlyDuties.getStatistics();
        setStatsData((prevState) => ({
            ...prevState,
            data: data
        }));
    }

    const normalizeMaxDuties = () => {
        /**
         * Modifies doctors' max number of duties setting
         * so that it's sum is equal to number of duties
         * in month.
         */

        const doctors = [...appData.doctors];
        const initMaxDuties = getMaxDuties(doctors);
        const avgDuties = totalDuties() / doctors.length;
        const avgMaxDuties = () => totalMaxDuties() / doctors.length;
        const factor = () => avgDuties / avgMaxDuties();
        const diff = () => totalDuties() - totalMaxDuties();

        // Check if goal is achievable.
        if (!appData.doctors.length) {
            return [false, 'Nie dodano lekarzy!'];
        } else if ((appData.doctors.length * maximumDuties) < totalDuties()) {
            return [false, 'Zbyt mało lekarzy.']
        }

        // Check if goal is already achieved.
        if (diff() === 0) {
            return [false, "Lekarze deklarują właściwą liczbę dyżurów."];
        }

        const drift = Math.ceil(totalMaxDuties() / 30) + 2;
        let i = 0;
        while (Math.abs(diff()) > drift) {
            normalize(doctors, factor());
            if (i > 5) { break; }
            i++;
        }

        while (diff() !== 0) {
            shuffle(doctors);
            const candidate = getDoctorWithExtremeMax(doctors, diff());
            const modifier = (diff() / Math.abs(diff()));
            candidate.setMaxNumberOfDuties(candidate.getMaxNumberOfDuties() + modifier);
        }

        const newMaxDuties = getMaxDuties(doctors);

        logChanges(initMaxDuties, newMaxDuties);
        refreshState();
        saveNewMaxDutiesToDB(newMaxDuties);
        return [true, null];
    }

    const getMaxDuties = (doctors) => {
        const result = new Map();
        for (const doctor of doctors) {
            result.set(doctor, doctor.getMaxNumberOfDuties());
        }
        return result;
    }

    const totalMaxDuties = (doctors=appData.doctors) => doctors.reduce(
        (total, doctor) => total + doctor.getMaxNumberOfDuties(), 0);

    const totalDuties = () => {
        if (Object.values(appData.monthlyDuties).length) {
            return appData.monthlyDuties.getDays().length * appData.monthlyDuties.dutyPositions.length;
        }
    }

    const normalize = (doctors, factor) => {
        doctors.forEach(doctor => {
            let newDuties = Math.round(doctor.getMaxNumberOfDuties() * factor);
            newDuties > maximumDuties && (newDuties = maximumDuties);
            doctor.setMaxNumberOfDuties(newDuties);
        });
    }

    const getDoctorWithExtremeMax = (doctors, diff) => {
        return doctors.reduce((best, doctor) => {
            const doctorMax = doctor.getMaxNumberOfDuties();
            const bestMax = best.getMaxNumberOfDuties();
            if ((doctorMax * diff) < (bestMax * diff)) {
                return doctor;
            } else {
                return best;
            }
        }, doctors[0]);
    }

    const logChanges = (initData, newData) => {
        const logItems = [
            <React.Fragment>
                ZMIENIONO maksymalną liczbę dyżurów poszczególnych 
                lekarzy, aby umożliwić przydzielenie im dokładnie podanej
                liczby dyżurów. <br/> UWAGA! Sprawdź, czy zmiany odpowiadają
                Twoim potrzebom. Możesz chcieć wprowadzić korekty,
                albo cofnąć zmiany i ręcznie dostosować ustawienia.<br/>
                <span 
                    className="link text-primary" 
                    onClick={() => undoChanges(initData)}
                >
                    [[ COFNIJ ZMIANY ]]
                </span>
            </React.Fragment>
        ];
        for (const doctor of appData.doctors) {
            const initMax = initData.get(doctor);
            const newMax = newData.get(doctor);
            if (initMax !== newMax) {
                const change = initMax < newMax ? 'zwiększono' : 'zmniejszono';
                logItems.push(`${doctor.name}: ${change} maksymalną ` +
                    `liczbę dyżurów o ${Math.abs(initMax - newMax)} - ` +
                    `z ${initMax} do ${newMax}.`);
            }
        }
        log(logItems);
    }

    const undoChanges = (initData) => {
        for (const doctor of appData.doctors) {
            doctor.setMaxNumberOfDuties(initData.get(doctor));
        }
        log(['Cofnięto']);
        refreshState();
        saveNewMaxDutiesToDB(initData);
    }

    const saveNewMaxDutiesToDB = (newData) => {
        for (const doctor of appData.doctors) {
            const data = {
                pk: doctor.getPk(),
                maxDuties: newData.get(doctor)
            }
            updateDoctor(data);
        }
    }

    const updateDoctor = async (d) => {
        const data = {...d};
        // Get doctor
        const doctor = appData.doctors.find(doc => doc.pk === data.pk);

        // Update instance and sync data.
        'maxDuties' in data ? 
            doctor.setMaxNumberOfDuties(data.maxDuties, true) :
            data.maxDuties = doctor.getMaxNumberOfDuties();
        'exceptions' in data ?
            doctor.setExceptions(data.exceptions, true) :
            data.exceptions = doctor.getExceptions();
        'preferredDays' in data ?
            doctor.setPreferredDays(data.preferredDays, true) :
            data.preferredDays = doctor.getPreferredDays();
        'preferredPositions' in data ?
            doctor.setPreferredPositions(data.preferredPositions, true) :
            data.preferredPositions = doctor.getPreferredPositions();
        'preferredWeekdays' in data ?
            doctor.setPreferredWeekdays(data.preferredWeekdays, true) :
            data.preferredWeekdays = doctor.getPreferredWeekdays();
        'locked' in data ?
            data.locked && doctor.lockPreferences() :
            data.locked = doctor.isLocked();

        // Update database.
        try {
            const settingsPk = doctor.getSettingsPk();
            const month = appData.monthlyDuties.month;
            const year = appData.monthlyDuties.year;
            if (settingsPk === null) {
                // Create settings in database with current data.
                const url = (`/unit/${appData.unit.pk}/duties/${year}/${month}`+
                `/settings/`);
                const response = await axiosInstance.post(url, {
                    doctor: doctor.getPk(),
                    monthly_duties: appData.monthlyDuties.getPk(),
                    strain: doctor.getStrain(),
                    max_number_of_duties: data.maxDuties,
                    exceptions: data.exceptions.join(' '),
                    preferred_days: data.preferredDays.join(' '),
                    preferred_weekdays: data.preferredWeekdays.join(' '),
                    preferred_positions: data.preferredPositions.join(' '),
                    locked: data.locked,
                });
                // Update settings pk in doctor instance to enable updates.
                const pk = response.data.pk;
                doctor.setSettingsPk(pk);
            } else {
                // Update settings in database.
                const url = (`/unit/${appData.unit.pk}/duties/${year}/${month}`+
                `/settings/${doctor.getSettingsPk()}/`);
                await axiosInstance.put(url, {
                    pk: doctor.getSettingsPk(),
                    doctor: doctor.getPk(),
                    monthly_duties: appData.monthlyDuties.getPk(),
                    strain: doctor.getStrain(),
                    max_number_of_duties: data.maxDuties,
                    exceptions: data.exceptions.join(' '),
                    preferred_days: data.preferredDays.join(' '),
                    preferred_weekdays: data.preferredWeekdays.join(' '),
                    preferred_positions: data.preferredPositions.join(' '),
                    locked: data.locked,
                });
            }
            // Update preferences.
            appData.monthlyDuties.updatePreferences();
            // Refresh.
            refreshState();
        } catch (error) {
            console.log(error);
            const generalError = ("Błąd aktualizacji bazy danych. Zmienione dane " +
                "nie zostały zachowane na serwerze i nie będą dostępne po " +
                "odświeżeniu strony.");
            const header = 'Błąd przesyłania danych';
            const variant = 'danger';
            showAlert(generalError, header, variant);
            return false;
        }
        return doctor;
    }

    const createSettings = async (doctor) => {
        try {
            // Create settings for current month.
            const month = appData.monthlyDuties.month;
            const year = appData.monthlyDuties.year;
            const url = (`/unit/${appData.unit.pk}/duties/` +
                `${year}/${month}/settings/`);
            const response = await axiosInstance.post(url, {
                doctor: doctor.getPk(),
                monthly_duties: appData.monthlyDuties.getPk(),
                strain: doctor.getStrain(),
                max_number_of_duties: doctor.getMaxNumberOfDuties(),
                exceptions: doctor.getExceptions().join(' '),
                preferred_days: doctor.getPreferredDays().join(' '),
                preferred_weekdays: doctor.getPreferredWeekdays().join(' '),
                preferred_positions: doctor.getPreferredPositions().join(' '),
                locked: doctor.isLocked(),
            });
            // Update settings pk in doctor instance to enable updates.
            const settingsPk = response.data.pk;
            doctor.setSettingsPk(settingsPk);

        } catch (error) {
            console.log(error);
            const generalError = ("Nie udało się zapisać w bazie danych" +
                "preferencji lekarza na bieżący miesiąc. Spróbuj zapisać " +
                "je ponownie później, klikając przycisk Zapisz w oknie " +
                "lekarza po lewej. W przeciwnym razie zapisane zostaną " +
                "preferencje domyślne.");
            const header = 'Błąd przesyłania danych';
            const variant = 'danger';
            showAlert(generalError, header, variant);
        }
    }

    const activateDoctor = async (...pks) => {
        let newInactiveDoctors = [...appData.inactiveDoctors];
        let newDoctors = [...appData.doctors];

        // Keep count of errors.
        let errors = 0;

        for (const pk of pks) {
            // Get doctor; return if not found.
            const doctor = appData.inactiveDoctors.find(doctor => doctor.pk === pk);
            if (!doctor) {
                errors++;
                continue;
            }

            // Move doctor to correct part of the state.
            newInactiveDoctors = newInactiveDoctors.filter(d => !(d.pk === doctor.pk));
            newDoctors = [...newDoctors, doctor];

            // Add doctor to MD and unit instances.
            appData.unit.addDoctors([doctor]);
            appData.monthlyDuties.addDoctors([doctor]);

            // Check if doctor settings are in DB and save them if not.
            const settingsPk = doctor.getSettingsPk();
            if (!settingsPk) {
                createSettings(doctor);
            }
        }

        // If no pks were found, indicate failure.
        if (errors === pks.length) {
            return false;
        }

        // Update preferences.
        appData.monthlyDuties.updatePreferences();

        // Save changes in state.
        setAppData((prevState) => ({
            ...prevState,
            inactiveDoctors: newInactiveDoctors,
            doctors: newDoctors
        }));

        return true;
    }

    const removeDoctor = (pk) => {
        const header = "Usuwasz lekarza z grafiku";
        const variant = "warning";
        const content = (
            <div>
                <p>Zamierzasz usunąć lekarza z grafiku. Spowoduje to <strong>usunięcie
                jego preferencji oraz przyznanych dyżurów</strong>. Profil lekarza 
                w ramach oddziału pozostanie niezmieniony
                i będzie go można dodać do grafiku ponownie.<br/><br/> 
                <strong>Aktualne preferencje i dyżury lekarza mogą być przywrócone jedynie
                w czasie obecnej sesji</strong> - po zamknięciu lub odświeżeniu strony
                zostaną utracone. Odzyskane dyżury będą widoczne po cofnięciu historii o 1.<br/><br/>
                Czy chcesz kontynuować?</p>
                <div>
                    <button 
                        className='btn btn-warning'
                        onClick={() => _remove(pk)}
                    >
                        Usuń
                    </button>
                    <button 
                        className='btn btn-success ms-4' 
                        onClick={dismissAlerts}
                    >
                        Anuluj
                    </button>
                </div>
            </div>
        );
        showAlert(content, header, variant);
    }

    const _remove = async (pk) => {
        saveDutiesHistory();
        appData.monthlyDuties.removeDoctor(pk);
        appData.unit.removeDoctor(pk);

        // Update preferences.
        appData.monthlyDuties.updatePreferences();

        const removedDoctor = appData.doctors.find(doctor => doctor.pk === pk);
        const newDoctors = appData.doctors.filter(doctor => !(doctor.pk === pk));
        const newInactiveDoctors = [...appData.inactiveDoctors, removedDoctor];
        setAppData((prevState) => ({
            ...prevState,
            doctors: newDoctors,
            inactiveDoctors: newInactiveDoctors
        }));
        setHighlight('');

        try {
            const month = appData.monthlyDuties.month;
            const year = appData.monthlyDuties.year;
            const url = (`/unit/${appData.unit.pk}/duties/${year}/${month}`+
                `/settings/${removedDoctor.getSettingsPk()}/`);
            await axiosInstance.delete(url, {
                pk: removedDoctor.getSettingsPk()
            });
            removedDoctor.setSettingsPk(null);
        } catch (error) {
            console.log(error);
            const generalError = ("Usunięcia nie zapisano na serwerze. " +
                "Po odświeżeniu strony lekarz nadal będzie aktywny.");
            const header = 'Błąd przesyłania danych';
            const variant = 'danger';
            showAlert(generalError, header, variant);
        }
    }

    const checkSettings = () => {
        const [result, logData] = appData.monthlyDuties.performChecks();

        const header = 'Raport z weryfikacji ustawień';
        log(logData, header);

        if (!result) {
            const info = <p>Sprawdzono ustawienia i <strong>wykryto nieprawidłowości
                </strong>, które mogą uniemożliwić ułożenie grafiku albo spowodować 
                istotną zmianę ustawień lekarzy przez aplikację.<br/><br/>
                Wyświetl <strong>log</strong>, aby zobaczyć szczegółowe 
                informacje.</p>;
            const header = "Wykryto błędy!";
            const variant = 'warning';
            showAlert(info, header, variant);
        } else {
            const info = <p><strong>Nie wykryto błędów.</strong></p>
            showAlert(info);
        }
    }

    const saveToDisk = () => {
        const duties = appData.monthlyDuties.getDuties();
        const dutyPositions = appData.monthlyDuties.dutyPositions;
        const month = appData.monthlyDuties.getMonth();
        const year = appData.monthlyDuties.getYear();

        const data = (
            [...duties.entries()]
            .map(([day, dailyDuties]) => 
                [
                    day.number.toString(),
                    ...(Object.values(dailyDuties)
                    .map(duty => {
                        const doctor = duty.getDoctor();
                        return `${doctor === null ? '-' : doctor.name}`
                    }))
                ]
            )
        );
        data.unshift(['DZIEŃ', ...(dutyPositions.map(p => positionNames[p]))]);
        data.unshift([]);
        data.unshift(['', `${appData.unit.name}`, `${months[month]} ${year}`]);
        data.unshift([]);
        data.unshift(['', 'DyzuryMedyczne.pl']);
        data.unshift([]);

        const worksheet = xlsx.utils.aoa_to_sheet(data);
        worksheet['!cols'] = [ { wch: 6 }, ...(dutyPositions.map(_ => ({ wch: 20 })))];
        worksheet['!merges'] = [
            { s: { c: 1, r: 1}, e: { c: 4, r: 1 } },
        ];
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, 'Dyżury');
        xlsx.writeFileXLSX(workbook, `${year}-${month}_dyzury_${appData.unit.name}.xlsx`);
    }

    const saveSchedule = async () => {
        dismissAlerts();
        showSpinner(['Zapisywanie...', 'Jeszcze chwilę...']);
        const month = appData.monthlyDuties.month;
        const year = appData.monthlyDuties.year;
        const data = serializeMonthlyDuties();

        try {
            const url = `/unit/${appData.unit.pk}/duties/${year}/${month}/`;
            await axiosInstance.put(url, data);
            const info = <p>Dyżury oraz preferencje lekarzy zostały
                zapisane na serwerze.</p>;
            showAlert(info);
            hideSpinner();
        } catch (error) {
            console.log(error);
            const generalError = ("Nie udało się zapisać danych na serwerze.");
            const header = 'Błąd przesyłania danych';
            const variant = 'danger';
            showAlert(generalError, header, variant);
            hideSpinner();
        }
    }

    const clearDuties = () => {
        const header = "Usuwanie grafiku"
        const variant = 'warning';
        const removeContent = (
            <div>
                <p>Możesz usunąć jedynie <strong>dyżury ułożone przez program</strong>, albo wszystkie,
                czyli także <strong>ułożone przez użytkownika.</strong></p>
                <div>
                    <button 
                        className='btn btn-warning'
                        onClick={() => _clear()}
                    >
                        Usuń
                    </button>
                    <button 
                        className='btn btn-danger ms-4'
                        onClick={() => _clear(true)}
                    >
                        Usuń wszytko
                    </button>
                    <button 
                        className='btn btn-success ms-4' 
                        onClick={dismissAlerts}
                    >
                        Anuluj
                    </button>
                </div>
            </div>
        )
        const confirmContent = (
            <div>
                <p>Przycisk "wyczyść" powoduje <strong>usunięcie z grafiku 
                ułożonych dyżurów.</strong><br/>
                Czy chcesz kontynuować?</p>
                <div>
                    <button 
                        className='btn btn-warning'
                        onClick={() => showAlert(removeContent, header, variant)}
                    >
                        Kontynuuj
                    </button>
                    <button 
                        className='btn btn-success ms-4' 
                        onClick={dismissAlerts}
                    >
                        Anuluj
                    </button>
                </div>
            </div>
        );
        showAlert(confirmContent, header, variant, false);
    }

    const _clear = (all=false) => {
        saveDutiesHistory();
        appData.monthlyDuties.clearDuties(all);
        appData.monthlyDuties.updatePreferences();
        refreshState();
    }

    const log = (data, heading='Log', showLog=true) => {
        const transformedData = transformLogData(data);
        showLog && setStatsData((prevState) => ({
            ...prevState,
            hide: true
        }));
        setLogData((prevState) => ({
            hide: showLog ? false : prevState.hide,
            items: transformedData,
            heading: heading
        }));
    }

    const transformLogData = (logData) => {
        const logItems = [];
        logData.forEach((item, i) => {
            logItems.push(<li key={i+1}>{item}</li>);
        });
        return logItems;
    }

    const toggleLog = () => {
        setStatsData((prevState) => ({
            ...prevState,
            hide: true
        }));
        setLogData((prevState) => ({
            ...prevState,
            hide: !prevState.hide
        }));
    }

    const toggleStatistics = () => {
        if (statsData.hide) {
            updateStatistics();
        }
        setLogData((prevState) => ({
            ...prevState,
            hide: true
        }));
        setStatsData((prevState) => ({
            ...prevState,
            hide: !prevState.hide
        }))
    }

    const toggleHighlight = (doctor) => {
        if (highlight === doctor) {
            setHighlight('');
        } else if (doctor) {
            setHighlight(doctor);
        }
    }

    const accordionToggleHighlight = (e, doctor) => {
        if (e.target.className === 'accordion-button collapsed') {
            setHighlight(doctor);
        } else {
            setHighlight('');
        }
    }

    const showAlert = (content, header='Sukces!', variant='success', clickToClose=true) => {
        setAlertData({
            show: true,
            variant: variant,
            header: header,
            content: content,
            clickToClose: clickToClose
        });
    }

    const dismissAlerts = () => {
        setAlertData((prevState) => ({
            ...prevState,
            show: false
        }));
    }

    const hideModal = () => {
        setModalData((prevState) => ({
            ...prevState,
            show: false
        }));
    }

    const refreshState = () => {
        setAppData((prevState) => ({...prevState}));
    }

    const showSpinner = (messages, content=null) => {
        setSpinnerData({
            show: true,
            content: content,
            messages: messages,
        });
    }

    const hideSpinner = () => {
        setSpinnerData({
            show: false,
            content: []
        });
    }

    const doctorList = [];

    for (let i=0; i<appData.doctors.length; i++) {
        doctorList.push(
            <Accordion.Item key={appData.doctors[i].pk} eventKey={appData.doctors[i].pk}>
                <Accordion.Header 
                    onClick={(e) => {accordionToggleHighlight(e, appData.doctors[i])}}>
                        {appData.doctors[i].name}
                </Accordion.Header>
                <Accordion.Body>
                    <DoctorPreferencesForm 
                        doctor={appData.doctors[i]} 
                        year={appData.monthlyDuties.year} 
                        month={appData.monthlyDuties.month} 
                        updateDoctor={updateDoctor} 
                        removeDoctor={removeDoctor}
                    />
                </Accordion.Body>
            </Accordion.Item>
        );
    }

    doctorList.push(
        <Accordion.Item key={-1} eventKey={0} >
            <Accordion.Header><span className="text-secondary">Dodaj lekarza</span></Accordion.Header>
            <Accordion.Body>
                <DoctorActivateForm 
                    doctors={appData.inactiveDoctors} 
                    activateDoctor={activateDoctor} 
                />
                <hr />
                <p className="fs-7">Brakuje profilu lekarza?<br/>Dodaj go w zakładce <Link to="/doctors/">lekarze</Link>.</p>
            </Accordion.Body>
        </Accordion.Item>
    )

    doctorList.unshift(
        <Accordion.Item key={-2} eventKey={-1}>
            <Accordion.Header><span className="text-secondary">Ustawienia grafiku</span></Accordion.Header>
            <Accordion.Body>
                <ScheduleSettings
                    totalMaxDuties={totalMaxDuties()}
                    totalDuties={totalDuties()}
                    normalize={normalizeMaxDuties}
                />
            </Accordion.Body>
        </Accordion.Item>
    )

    const leftCol = (
        <Accordion defaultActiveKey={['0']} flush>
            {doctorList}
        </Accordion>
    );

    const rightCol = (
        <Container fluid className="vh-100">
            <Schedule 
                appData={appData} 
                highlight={highlight} 
                toggleHighlight={toggleHighlight} 
                setDoctorOnDuty={setDoctorOnDuty}
            />
            <DutyStatistics 
                hide={statsData.hide} 
                toggle={toggleStatistics} 
                statistics={statsData.data} 
            />
            <Log 
                hide={logData.hide} 
                toggle={toggleLog} 
                log={logData} 
            />
            <Row className="duty-menu border-top">
                <Col>
                    <ScheduleMenuButton
                        className="border"
                        variant="primary"
                        onClick={setDuties}
                    >
                        Ułóż grafik
                    </ScheduleMenuButton>
                    <ScheduleMenuButton
                        className="border"
                        variant="light"
                        tooltip="Sprawdza, czy preferencje lekarzy pozwalają ułożyć grafik"
                        onClick={checkSettings}
                    >
                        Sprawdź
                    </ScheduleMenuButton>
                    <ScheduleMenuButton
                        className="border"
                        variant={logData.hide ? "light" : "secondary"}
                        onClick={toggleLog}
                    >
                        {logData.hide ? 'Pokaż' : 'Ukryj'} log
                    </ScheduleMenuButton>
                    <ScheduleMenuButton
                        className="border"
                        variant={statsData.hide ? "light" : "secondary"}
                        onClick={toggleStatistics}
                    >
                        {statsData.hide ? 'Pokaż' : 'Ukryj'} statystyki
                    </ScheduleMenuButton>
                    <ScheduleMenuButton
                        className="border"
                        variant="light"
                        tooltip="Usuwa dyżury z grafiku"
                        onClick={clearDuties}
                    >
                        Wyczyść
                    </ScheduleMenuButton>
                    <ScheduleMenuButton
                        className="border"
                        variant="light"
                        tooltip="Cofnij zmianę w grafiku"
                        onClick={historyMoveBack}
                        disabled={dutiesHistory.position < 1}
                    >
                        <i className="bi bi-skip-backward-fill"></i>
                    </ScheduleMenuButton>
                    <ScheduleMenuButton
                        className="border"
                        variant="light"
                        tooltip="Ponów zmianę w grafiku"
                        onClick={historyMoveForward}
                        disabled={dutiesHistory.position >= (dutiesHistory.history.length-1)}
                    >
                        <i className="bi bi-skip-forward-fill"></i>
                    </ScheduleMenuButton>
                    <ScheduleMenuButton
                        className="border"
                        variant="light"
                        tooltip="Zapisuje grafik do Excela (.xlsx)"
                        onClick={saveToDisk}
                    >
                        Pobierz
                    </ScheduleMenuButton>
                    <ScheduleMenuButton
                        className="border"
                        variant="success"
                        tooltip="Zapisuje widoczny na ekranie grafik na serwerze. Nie zapisuje historii."
                        onClick={saveSchedule}
                    >
                        Zapisz
                    </ScheduleMenuButton>
                </Col>
            </Row>
            { 
                alertData.show && 
                <Alert 
                    variant={alertData.variant} 
                    header={alertData.header} 
                    dismiss={dismissAlerts}
                    clickToClose={alertData.clickToClose}
                >
                    {alertData.content}
                </Alert> 
            }
            {
                <OverlaySpinner show={spinnerData.show} messages={spinnerData.messages} content={spinnerData.content} />
            }
        </Container>
    );

    return <ColumnLayout 
                leftCol={leftCol} 
                rightCol={rightCol} 
                logoPrimary={appData.unit.name} 
                logoSecondary={`${months[appData.monthlyDuties.month]} ${appData.monthlyDuties.year}`}
                alwaysShowLeftCol
            />;
}