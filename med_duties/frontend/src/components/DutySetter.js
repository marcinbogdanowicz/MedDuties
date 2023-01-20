import React, { useState, useEffect, useRef } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScheduleMenuButton from './ScheduleMenuButton';
import ConflictModal from './ConflictModal';
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
    const [messages, setMessages] = useState({});
    const [highlight, setHighlight] = useState('');
    const [hideLog, setHideLog] = useState(true);
    const [hideStatistics, setHideStatistics] = useState(true);
    const [spinnerData, setSpinnerData] = useState({
        show: false,
        content: []
    });
    const [statistics, setStatistics] = useState(null);
    const [modalData, setModalData] = useState({
        show: false,
        body: '',
        btnAFunc: ()=>{},
        btnAVal: '',
        btnBFunc: ()=>{},
        btnBVal: ''
    });

    // Get data.
    const [unitData, doctorsData, scheduleData, prevDutiesData, nextDutiesData] = useLoaderData();

    // Get loader data, process it and save in state.
    useEffect(() => {
        const [month, year] = scheduleData.monthandyear.split('/');

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
    }, []);

    const setDuties = () => {
        // Cancel previous error messages.
        dismissAlerts();

        showSpinner(
            'Układam dyżury...', 
            'Negocjuję z lekarzami...', 
            'Oferuję podwyżki...', 
            'Zamieszczam ogłoszenia o pracy...', 
            'Ułożenie dyżurów może trwać nawet kilka minut.'
        );

        // Create worker, which will automatically set duties.
        const myWorker = new Worker("http://127.0.0.1:8000/static/frontend/public/worker.js");
        const data = serializeAppData()
        myWorker.postMessage(data);

        // Receive result.
        let result = null;
        myWorker.onmessage = (event) => {
            console.log('Received message from Worker!');
            console.log(event.data);
            result = event.data;
            myWorker.terminate();

            // Transform raw data into list items.
            const logItems = transformLogData(result.logData);

            // Save response and log in appropriate state.
            if (result.success) {
                // Create log, if there are any items.
                const log = {
                    items: logItems,
                    heading: 'Log'
                };
                if (result.allSet) {
                    const info = <p>Dyżury zostały ułożone.<br />
                        Pamiętaj, żeby <strong>zapisać</strong> je przed wyjściem.</p>
                    setMessages((prevData) => ({
                        ...prevData,
                        log: log,
                        info: info
                    }));
                } else {
                    const settingError = 'Nie udało się ułożyć wszystkich dyżurów.';
                    setMessages((prevData) => ({
                        ...prevData,
                        log: log,
                        settingError: settingError
                    }));
                }

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
                const log = {
                    items: logItems, 
                    heading: 'Ustawienia uniemożliwiające ułożenie dyżurów'
                };
                const settingError = ('Dyżury nie zostały ułożone z powodu ustawień lekarzy. ' +
                    'Sprawdź log, aby zobaczyć szczegółowe informacje.');
                hideSpinner();
                setMessages((prevData) => ({
                    ...prevData,
                    log: log,
                    settingError: settingError
                }));
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
        const duties = ([...appData.monthlyDuties.getDuties().values()]
            .map(item => Object.values(item))
            .flat());
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
        if (duties.length) {
            data.duties = duties.map(duty => {
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
        }

        return data;
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

    const transformLogData = (logData) => {
        const logItems = [];
        logData.forEach((item, i) => {
            logItems.push(<li key={i+1}>{item}</li>);
        });
        return logItems;
    }

    const setDoctorOnDuty = (duty, doctor) => {
        var userSet = false;
        if (doctor) {
            userSet = true;

            // If there is a collision with preferred days,
            // make sure user solves it and function is rerun.
            const date = duty.getDay().number;
            const preferredDays = doctor.getPreferredDays();
            if (preferredDays.includes(date+1) || preferredDays.includes(date-1)) {

                const collision = preferredDays.filter(day => 
                    (day === date+1 || day === date-1));
                const month = appData.monthlyDuties.month;
                const year = appData.monthlyDuties.year;
                const body = <p>
                    Próbujesz dodać dyżur lekarza <strong>{doctor.name}</strong> w 
                    dzień <strong>{date}/{month}/{year}</strong>.<br />
                    Tymczasem {doctor.name} chce otrzymać 
                    dyżur <strong>{collision.map(d => `${d}/${month}/${year}`).join(' i ')}</strong>.<br />
                    Spowoduje to powstanie dyżuru przekraczającego 24 godziny.<br /><br />
                    <strong>Możesz usunąć kolidujące dni z preferencji albo cofnąć 
                    dodawanie dyżuru.</strong><br />
                    <i className="fs-7 fw-light">Zmiana preferencji nie zostanie zapisana na serwerze, 
                    dopóki nie zapiszesz ustawień lekarza lub całego grafiku.</i>
                </p>
                const changePref = (collision) => {
                    const newPreferredDays = preferredDays.filter(d => !collision.includes(d));
                    doctor.setPreferredDays(newPreferredDays);
                    setDoctorOnDuty(duty, doctor);
                    hideModal();
                }

                setModalData((prevState) => ({
                    ...prevState,
                    show: true,
                    body: body,
                    btnAVal: 'Zmień preferencje',
                    btnAFunc: () => changePref(collision),
                    btnBVal: 'Cofnij dyżur',
                    btnBFunc: hideModal
                }));
                return;
            }
        }
        appData.monthlyDuties.changeDoctor(duty, doctor, userSet);
        appData.monthlyDuties.updatePreferences();
        setAppData((prevData) => ({...prevData}));
        updateStatistics();
    }

    const toggleLog = () => {
        setHideStatistics(true);
        setHideLog(!hideLog);        
    }

    const toggleStatistics = () => {
        if (hideStatistics) {
            updateStatistics();
        }
        setHideLog(true);
        setHideStatistics(!hideStatistics);
    }

    const updateStatistics = () => {
        const stats = appData.monthlyDuties.getStatistics();
        setStatistics(stats);
    }

    const updateDoctor = async (data) => {
        // Get doctor
        const doctor = appData.doctors.find(doc => doc.pk === data.pk);

        // Update instance.
        doctor.setMaxNumberOfDuties(data.maxDuties, true);
        doctor.setExceptions(data.exceptions, true);
        doctor.setPreferredDays(data.preferredDays, true);
        doctor.setPreferredPositions(data.preferredPositions, true);
        doctor.setPreferredWeekdays(data.preferredWeekdays, true);
        if (data.locked) {
            doctor.lockPreferences();
        }

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
            setMessages((prevState) => ({
                ...prevState,
                general: generalError
            }));
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
            setMessages((prevState) => ({
                ...prevState,
                general: generalError
            }));
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

    const removeDoctor = async (pk) => {
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

        try {
            const month = appData.monthlyDuties.month;
            const year = appData.monthlyDuties.year;
            const url = (`/unit/${appData.unit.pk}/duties/${year}/${month}`+
                `/settings/${removedDoctor.getSettingsPk()}/`);
            await axiosInstance.delete(url, {
                pk: removedDoctor.getSettingsPk()
            });
            removedDoctor.setSettingsPk(null);
            return true;
        } catch (error) {
            console.log(error);
            const generalError = ("Usunięcia nie zapisano na serwerze. " +
                "Po odświeżeniu strony lekarz nadal będzie aktywny.");
            setMessages((prevState) => ({
                ...prevState,
                general: generalError
            }));
            return false
        }
    }

    const checkSettings = () => {
        const [result, logData] = appData.monthlyDuties.performChecks();

        const logItems = logData.map((item, i) => <li key={i}>{item}</li>);

        const log = {
            items: logItems, 
            heading: 'Raport z weryfikacji ustawień'
        };
        
        var info;
        if (!result) {
            info = <p>Sprawdzono ustawienia i <strong>wykryto nieprawidłowości
                </strong>, które mogą uniemożliwić ułożenie grafiku albo spowodować 
                istotną zmianę ustawień lekarzy przez aplikację.<br/><br/>
                Wyświetl <strong>log</strong>, aby zobaczyć szczegółowe 
                informacje.</p>;
        } else {
            info = <p><strong>Nie wykryto błędów.</strong></p>
        }
        
        setMessages((prevData) => ({
            ...prevData,
            log: log,
            info: info
        }));
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
        console.log(data);
        xlsx.writeFileXLSX(workbook, `${year}-${month}_dyzury_${appData.unit.name}.xlsx`);
    }

    const saveSchedule = async () => {
        dismissAlerts();
        showSpinner('Zapisywanie...', 'Jeszcze chwilę...');
        const month = appData.monthlyDuties.month;
        const year = appData.monthlyDuties.year;
        const data = serializeMonthlyDuties();

        try {
            const url = `/unit/${appData.unit.pk}/duties/${year}/${month}/`;
            await axiosInstance.put(url, data);
            const info = <p>Dyżury oraz preferencje lekarzy zostały
                zapisane na serwerze.</p>;
            setMessages((prevData) => ({
                ...prevData,
                info: info
            }));
            hideSpinner();
        } catch (error) {
            console.log(error);
            const generalError = ("Nie udało się zapisać danych na serwerze.");
            hideSpinner();
            setMessages((prevState) => ({
                ...prevState,
                general: generalError
            }));
        }
    }

    const clearDuties = (all=false) => {
        appData.monthlyDuties.clearDuties(all);
        appData.monthlyDuties.updatePreferences();
        refreshState();
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

    const dismissAlerts = () => {
        setMessages((prevState) => ({
            ...prevState,
            general: '',
            settingError: '',
            info: ''
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

    const showSpinner = (...content) => {
        setSpinnerData({
            show: true,
            content: content
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
            <Accordion.Header>+ Dodaj lekarza</Accordion.Header>
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
                hide={hideStatistics} 
                toggle={toggleStatistics} 
                statistics={statistics} 
            />
            <Log 
                hide={hideLog} 
                toggle={toggleLog} 
                log={messages.log} 
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
                        variant="light"
                        onClick={toggleLog}
                    >
                        {hideLog ? 'Pokaż' : 'Ukryj'} log
                    </ScheduleMenuButton>
                    <ScheduleMenuButton
                        className="border"
                        variant="light"
                        onClick={toggleStatistics}
                    >
                        {hideStatistics ? 'Pokaż' : 'Ukryj'} statystyki
                    </ScheduleMenuButton>
                    <ScheduleMenuButton
                        className="border"
                        variant="light"
                        tooltip="Usuwa dyżury (poza ułożonymi przez użytkownika)"
                        onClick={() => clearDuties(false)}
                    >
                        Wyczyść
                    </ScheduleMenuButton>
                    <ScheduleMenuButton
                        className="border"
                        variant="light"
                        tooltip="Usuwa dyżury (w tym ułożone przez użytkownika)"
                        onClick={() => clearDuties(true)}
                    >
                        Wyczyść wszystko
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
                        tooltip="Zapisuje grafik na serwerze"
                        onClick={saveSchedule}
                    >
                        Zapisz
                    </ScheduleMenuButton>
                </Col>
            </Row>
            { 
                messages.info && 
                <Alert 
                    variant={'success'} 
                    header={"Sukces!"} 
                    dismiss={dismissAlerts}
                >
                    {messages.info}
                </Alert> 
            }
            { 
                messages.settingError && 
                <Alert 
                    variant={'warning'} 
                    header={"Nie ułożono dyżurów!"} 
                    dismiss={dismissAlerts}
                >
                    {messages.settingError}
                </Alert>
            }
            { 
                messages.general && 
                <Alert 
                    variant={'danger'} 
                    header={"Błąd przesyłania danych!"} 
                    dismiss={dismissAlerts}
                >
                    {messages.generalError}
                </Alert>
            }
            {
                modalData.show && 
                <ConflictModal 
                    modalData={modalData} 
                    hideModal={hideModal}
                />
            }
            {
                <OverlaySpinner show={spinnerData.show} content={spinnerData.content} />
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