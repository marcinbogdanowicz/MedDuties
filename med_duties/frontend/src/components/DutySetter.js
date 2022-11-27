import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColumnLayout from './ColumnLayout';
import Alert from './Alert';
import Log from './Log';
import DutyStatistics from './DutyStatistics';
import Schedule from './Schedule';
import DoctorForm from './DoctorForm';
import DoctorAddForm from './DoctorAddForm';
import DoctorActivateForm from './DoctorActivateForm';
import Doctor from './algorithm/Doctor';
import Duty from './algorithm/Duty';
import MonthlyDuties from './algorithm/MonthlyDuties';
import Unit from './algorithm/Unit';
import axiosInstance from '../axiosApi';


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

export default function DutiesSetter() {

    // Create state.
    const [appData, setAppData] = useState({
        unit: {},
        doctors: [],
        inactiveDoctors: [],
        monthlyDuties: {},
        duties: {}
    });
    const [messages, setMessages] = useState({});
    const [highlight, setHighlight] = useState('');
    const [hideLog, setHideLog] = useState(true);
    const [hideStatistics, setHideStatistics] = useState(true);
    const [statistics, setStatistics] = useState(null);
    
    // Get data.
    const [unitData, doctorsData, scheduleData] = useLoaderData();
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
        const doctor = doctors.find(doctor => doctor.pk === duty.doctor);
        const day = monthlyDuties.getDays().find(day => day.number === duty.day);
        return new Duty(day, doctor, duty.position, duty.strain_points, duty.pk);
    });
    monthlyDuties.addDuties(duties);

    // Add all the above to state.
    useEffect(() => {
        setAppData({
            unit: unit,
            doctors: doctors,
            inactiveDoctors: inactiveDoctors,
            monthlyDuties: monthlyDuties,
            duties: monthlyDuties.getDuties()
        });
    }, []);

    const setDuties = () => {
        // Cancel previous error messages.
        dismissAlerts();

        const [success, duties, logData] = appData.monthlyDuties.setDuties();

        // Transform raw data into list items.
        const logItems = transformLogData(logData);

        // Save response and log in appropriate state.
        if (success) {
            // Create log, if there are any items.
            if (logData.length > 0) {
                logItems.unshift(
                    <li key={0}>
                        PODCZAS UKŁADANIA DYŻURÓW WPROWADZONO ZMIANY... <br />
                        ...w preferencjach lekarzy. Były one konieczne, aby dyżury
                        mogły być ułożone. Zmiany nie zostały zapisane na serwerze,
                        ale są widoczne w ustawieniach po lewej stronie.
                        Możesz cofnąć lub zapisać wszystkie zmiany lub
                        zadecydować pojedyńczo.
                        <br />
                        <span>
                            <span className="link" onClick={reverseAllModifications}>[[Cofnij wszystkie]]</span>
                            <span className="link" onClick={saveAllModifications}> [[Zapisz wszystkie]]</span>
                        </span>
                    </li>
                );
                const log = {
                    items: logItems, 
                    heading: 'Zmiany wprowadzone podczas układania dyżurów'
                };
                const info = ('Dyżury zostały ułożone, jednak konieczne było ' +
                    'wprowadzenie zmian w ustawieniach lekarzy. Wyświetl log, ' +
                    'by zobaczyć szczegółowe informacje.');
                setMessages((prevData) => ({
                    ...prevData,
                    log: log,
                    info: info
                }));
            }
            // Save duties.
            setAppData((prevData) => ({
                ...prevData,
                duties: duties
            }));

            // Update statistics.
            updateStatistics();

        } else {
            const log = {
                items: logItems, 
                heading: 'Ustawienia uniemożliwiające ułożenie dyżurów'
            };
            const settingError = ('Dyżury nie zostały ułożone z powodu ustawień lekarzy. ' +
                'Sprawdź log, aby zobaczyć szczegółowe informacje.');
            setMessages((prevData) => ({
                ...prevData,
                log: log,
                settingError: settingError
            }));
        }
    }

    const setDoctorOnDuty = (duty, doctor) => {
        appData.monthlyDuties.changeDoctor(duty, doctor);
        setAppData((prevData) => ({...prevData}));
        updateStatistics();
    }

    const transformLogData = (logData) => {
        const logItems = [];
        if (logData.length > 0) {
            const codeScheme = /^\[[A-Z]{2,3}-\d+\]/;
            logData.forEach((item, idx) => {
                const key = idx + 1;
                var elem;
                if (item.match(codeScheme)) {
                    const contentScheme = /(?<=\[.+\]).+/g;
                    const content = item.match(contentScheme)[0];
                    const code = item.match(codeScheme)[0];
                    elem = (
                        <li key={key}>
                            {content}
                            <span>
                                <span className="link" onClick={(e) => reverseDoctorModification(code, e)}> [[Cofnij]]
                                </span>
                                <span className="link" onClick={(e) => saveDoctorModification(code, e)}> [[Zapisz]]
                                </span>
                            </span> 
                        </li>
                    );
                }
                 else {
                    elem = <li key={key}>{item}</li>;
                }
                logItems.push(elem);
            });
        }
        return logItems;
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

    const toggleHighlight = (doctor) => {
        if (highlight === doctor) {
            setHighlight('');
        } else if (doctor) {
            setHighlight(doctor);
        }
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
            if (settingsPk === null) {
                // Create settings in database with current data.
                const url = (`/unit/${appData.unit.pk}/duties/${year}/${month}`+
                `/settings/`);
                const response = await axiosInstance.post(url, {
                    doctor: doctor.getPk(),
                    monthly_duties: monthlyDuties.getPk(),
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
                    monthly_duties: monthlyDuties.getPk(),
                    strain: doctor.getStrain(),
                    max_number_of_duties: data.maxDuties,
                    exceptions: data.exceptions.join(' '),
                    preferred_days: data.preferredDays.join(' '),
                    preferred_weekdays: data.preferredWeekdays.join(' '),
                    preferred_positions: data.preferredPositions.join(' '),
                    locked: data.locked,
                });
            }            
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

    const parseCode = (code) => {
        var match = code.slice(1,-1);
        match = match.split('-');
        const mod = match[0];
        const pk = parseInt(match[1]);
        return [mod, pk];
    }

    const getDoctor = (pk) => {
        return appData.doctors.find(doc => doc.pk === pk);
    }

    const reverseDoctorModification = (code, event) => {
        const [mod, pk] = parseCode(code);
        const doctor = getDoctor(pk);

        if (mod === 'RMD') {
           doctor.restoreMaxDuties();
        }
        if (mod === 'AAW') {
            doctor.restorePreferredWeekdays();
        }
        if (mod === 'CE') {
            doctor.restoreExceptions();
        }
        if (mod === 'AAP') {
            doctor.restorePreferredPositions();
        }

        event.target.parentElement.innerHTML = ' [[Cofnięto]]';
       
        // Referesh doctor forms by refreshing state.
        setAppData((prevState) => ({...prevState}));
    }

    const saveDoctorModification = async (code, event) => {
        const [mod, pk] = parseCode(code);
        const doctor = getDoctor(pk);

        const data = {pk: doctor.getSettingsPk()};

        if (mod === 'RMD') {
            data.max_number_of_duties = doctor.getMaxNumberOfDuties();
        }
        if (mod === 'AAW') {
            data.preferred_weekdays = doctor.getPreferredWeekdays().join(' ');
        }
        if (mod === 'CE') {
            data.exceptions = doctor.getExceptions().join(' ');
        }
        if (mod === 'AAP') {
            data.preferred_positions = doctor.getPreferredPositions().join(' ');
        }

        try {
            const url = (`/unit/${appData.unit.pk}/duties/${year}/${month}`+
                `/settings/${doctor.getSettingsPk()}/`);
            await axiosInstance.patch(url, data);
            event.target.parentElement.innerHTML = ' [[Zapisano]]';
            setAppData((prevState) => ({...prevState}));
        } catch (error) {
            console.log(error);
            const generalError = ("Błąd aktualizacji bazy danych. Zmienione dane " +
                "nie zostały zachowane na serwerze i nie będą dostępne po " +
                "odświeżeniu strony.");
            setMessages((prevState) => ({
                ...prevState,
                general: generalError
            }));
        }
    }

    const reverseAllModifications = (e) => {
        for (const doctor of appData.doctors) {
            doctor.restoreInit();
        }
        e.target.parentElement.innerHTML = '[[Cofnięto wszystkie zmiany]]';
        // Referesh doctor forms by refreshing state.
        setAppData((prevState) => ({...prevState}));
    }

    const saveAllModifications = (e) => {
        var success = true;
        appData.doctors.forEach(doctor => {
            const data = {
                pk: doctor.getPk(),
                maxDuties: doctor.getMaxNumberOfDuties(),
                exceptions: doctor.getExceptions(),
                preferredDays: doctor.getPreferredDays(),
                preferredWeekdays: doctor.getPreferredWeekdays(),
                preferredPositions: doctor.getPreferredPositions(),
                locked: doctor.isLocked()
            }
            const result = updateDoctor(data);
            if (!result) {
                success = false;
            }
        });
        if (success) {
            e.target.parentElement.innerHTML = '[[Zapisano wszystkie zmiany]]';
        } else {
            e.target.parentElement.innerHTML = '[[Wystąpił błąd]]';
        }
    }

    const createDoctor = async (name) => {
        try {
            // Create doctor instance in database.
            const url = `/unit/${appData.unit.pk}/doctors/`;
            const response = await axiosInstance.post(url, {
                name: name
            });
            const pk = response.data.pk;

            // Create doctor instance, with pk returned from db.
            const doctor = new Doctor(name, unit, year, month, pk);

            // Create settings
            createSettings(doctor);

            // Add doctor to unit and to schedule
            appData.unit.addDoctors([doctor]);
            appData.monthlyDuties.addDoctors([doctor]);

            // Add doctor to state.
            const newDoctors = [...appData.doctors, doctor];
            setAppData((prevState) => ({
                ...prevState,
                doctors: newDoctors,
            }));

        } catch (error) {
            console.log(error);
            const generalError = ("Nie udało się stworzyć lekarza. " +
                "Baza danych nie została zaktualizowana.");
            setMessages((prevState) => ({
                ...prevState,
                general: generalError
            }));
        }
    }

    const createSettings = async (doctor) => {
        try {
            // Create settings for current month.
            const url = (`/unit/${appData.unit.pk}/duties/` +
                `${year}/${month}/settings/`);
            const response = await axiosInstance.post(url, {
                doctor: doctor.getPk(),
                monthly_duties: monthlyDuties.getPk(),
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

    const activateDoctor = async (pk) => {
        // Get doctor; return if not found.
        const doctor = appData.inactiveDoctors.find(doctor => doctor.pk === pk);
        if (!doctor) {
            return false;
        }

        // Move doctor to correct part of the state.
        const newInactiveDoctors = appData.inactiveDoctors.filter(d => !(d.pk === doctor.pk));
        const newDoctors = [...appData.doctors, doctor];
        setAppData((prevState) => ({
            ...prevState,
            inactiveDoctors: newInactiveDoctors,
            doctors: newDoctors
        }));

        // Add doctor to MD and unit instances.
        appData.unit.addDoctors([doctor]);
        appData.monthlyDuties.addDoctors([doctor]);

        // Check if doctor settings are in DB and save them, it not.
        const settingsPk = doctor.getSettingsPk();
        if (!settingsPk) {
            createSettings(doctor);
        }

        return true;
    }

    const removeDoctor = async (pk) => {
        appData.monthlyDuties.removeDoctor(pk);
        appData.unit.removeDoctor(pk);

        const removedDoctor = appData.doctors.find(doctor => doctor.pk === pk);
        const newDoctors = appData.doctors.filter(doctor => !(doctor.pk === pk));
        const newInactiveDoctors = [...appData.inactiveDoctors, removedDoctor];
        setAppData((prevState) => ({
            ...prevState,
            doctors: newDoctors,
            inactiveDoctors: newInactiveDoctors,
            duties: appData.monthlyDuties.getDuties()
        }));

        try {
            const url = (`/unit/${appData.unit.pk}/duties/${year}/${month}`+
                `/settings/${removedDoctor.getSettingsPk()}/`);
            await axiosInstance.delete(url, {
                pk: removedDoctor.getSettingsPk()
            });
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

    const dismissAlerts = () => {
        setMessages((prevState) => ({
            ...prevState,
            general: '',
            settingError: '',
            info: ''
        }));
    }

    const doctorList = [];

    for (let i=0; i<appData.doctors.length; i++) {
        doctorList.push(
            <Accordion.Item key={appData.doctors[i].pk} eventKey={i}>
                <Accordion.Header onClick={() => setHighlight(appData.doctors[i])}>{appData.doctors[i].name}</Accordion.Header>
                <Accordion.Body>
                    <DoctorForm doctor={appData.doctors[i]} year={year} month={month} updateDoctor={updateDoctor} removeDoctor={removeDoctor} />
                </Accordion.Body>
            </Accordion.Item>
        );
    }

    doctorList.push(
        <Accordion.Item key={-1} eventKey={doctorList.length} >
            <Accordion.Header>+ Dodaj lekarza</Accordion.Header>
            <Accordion.Body>
                <DoctorActivateForm doctors={appData.inactiveDoctors} activateDoctor={activateDoctor} />
                <hr />
                <DoctorAddForm createDoctor={createDoctor} />
            </Accordion.Body>
        </Accordion.Item>
    )

    const leftCol = (
        <Accordion defaultActiveKey={['0']} alwaysOpen flush>
            {doctorList}
        </Accordion>
    );

    const rightCol = (
        <Container fluid className="vh-100">
            <Schedule appData={appData} highlight={highlight} toggleHighlight={toggleHighlight} setDoctorOnDuty={setDoctorOnDuty} />
            <DutyStatistics hide={hideStatistics} toggle={toggleStatistics} statistics={statistics} />
            <Log hide={hideLog} toggle={toggleLog} log={messages.log} />
            <Row className="duty-menu border-top">
                <Col className="d-flex align-items-center justify-content-evenly">
                    <button className="btn btn-primary border w-25" onClick={setDuties}>Ułóż grafik</button>
                    <button className="btn btn-light border w-25" onClick={toggleLog}>{hideLog ? 'Pokaż' : 'Ukryj'} log</button>
                    <button className="btn btn-light border w-25" onClick={toggleStatistics}>{hideStatistics ? 'Pokaż' : 'Ukryj'} statystyki</button>
                </Col>
            </Row>
            { messages.info && <Alert variant={'success'} header={"Uwaga!"} dismiss={dismissAlerts}>{messages.info}</Alert> }
            { messages.settingError && <Alert variant={'warning'} header={"Nie ułożono dyżurów!"} dismiss={dismissAlerts}>{messages.settingError}</Alert>}
            { messages.general && <Alert variant={'danger'} header={"Błąd przesyłania danych!"} dismiss={dismissAlerts}>{messages.generalError}</Alert>}
        </Container>
    );

    return <ColumnLayout leftCol={leftCol} rightCol={rightCol} logoPrimary={appData.unit.name} logoSecondary={`${months[month]} ${year}`} />;
}