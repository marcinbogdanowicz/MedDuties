import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColumnLayout from './ColumnLayout';
import Alert from './Alert';
import Log from './Log';
import Schedule from './Schedule';
import DoctorForm from './DoctorForm';
import DoctorAddForm from './DoctorAddForm';
import Doctor from './algorithm/Doctor';
import Duty from './algorithm/Duty';
import MonthlyDuties from './algorithm/MonthlyDuties';
import Unit from './algorithm/Unit';
import axiosInstance from '../axiosApi';

export default function DutiesSetter() {
    /* TODO
    When new doctor is created, he should be automatically appended
    to accordion list. Therefore doctor list (and possibly other
    class instances) should be kept in state, in order to
    reload element after change. Implement this.

    Also DoctorAddForm needs to be passed a function - 
    as a 'createDoctor' prop - to create a new doctor instance.

    Remember to save doctor instance and it's data to db upon creation.

    Next create a steering console on the bottom of right column, fixed.
    Create duties, restore user settings (changed by algorithm, possibly)
    should be initial commands.
    */

    // Create state.
    const [appData, setAppData] = useState({
        unit: {},
        doctors: [],
        monthlyDuties: {},
        duties: {}
    });
    const [messages, setMessages] = useState({});
    const [highlight, setHighlight] = useState('');
    const [hideLog, setHideLog] = useState(true);
    
    // Get data.
    const [unitData, doctorsData, scheduleData] = useLoaderData();
    const [month, year] = scheduleData.monthandyear.split('/');

    // Create Unit instance.
    const unit = new Unit(unitData.pk, unitData.name, unitData.duty_positions);

    // Create doctors instances.
    const doctors = doctorsData.map(doctor => {
        const doctorData = scheduleData.doctor_data.find(data => {
            return data.doctor === doctor.pk;
        });
    
        const d = new Doctor(doctor.name, unit, year, month, doctor.pk);

        if (doctorData) {
            if (doctorData.strain) {
                d.setStrain(doctorData.strain);
            }
            if (doctorData.max_number_of_duties) {
                d.setMaxNumberOfDuties(doctorData.max_number_of_duties);
            }
            if (doctorData.exceptions) {
                const exceptions = doctorData.exceptions.split(' ').map(
                    exc => parseInt(exc));
                d.setExceptions(exceptions);
            }
            if (doctorData.preferred_days) {
                const days = doctorData.preferred_days.split(' ').map(
                    day => parseInt(day));
                d.setPreferredDays(days);
            }
            if (doctorData.preferred_positions) {
                const positions = doctorData.preferred_positions.split(' ').map(
                    pos => parseInt(pos));
                d.setPreferredPositions(positions);
            }
            if (doctorData.preferred_weekdays) {
                const weekdays = doctorData.preferred_weekdays.split(' ').map(
                    weekday => parseInt(weekday));
                d.setPreferredWeekdays(weekdays);
            }
            if (doctorData.locked) {
                d.lockPreferences();
            }
            d.setSettingsPk(doctorData.pk);
        }

        return d;
    });

    // Add doctors to unit.
    unit.addDoctors(doctors);

    // Create schedule instance.
    const monthlyDuties = new MonthlyDuties(year, month, unit, scheduleData.pk);

    // Add duties to schedule 
    // (which will add them to doctors instances as well).
    scheduleData.duties.map(duty => {
        const doctor = doctors.find(doctor => doctor.pk === duty.doctor);
        const day = monthlyDuties.getDays().find(
            day => day.number === duty.day);
        const d = new Duty(
            day, doctor, duty.position, duty.strain_points, duty.pk);
        monthlyDuties.setDuty(d, d.getStrain());
    });

    // Add all the above to state.
    useEffect(() => {
        setAppData({
            unit: unit,
            doctors: doctors,
            monthlyDuties: monthlyDuties,
            duties: monthlyDuties.getDuties()
        });
    }, []);

    const setDuties = () => {
        // Cancel previous error messages.
        setMessages((prevData) => ({
            ...prevData,
            log: null
        }));
        
        const [success, duties, logData] = appData.monthlyDuties.setDuties();

        // Transform raw data into list items.
        const logItems = [];
        if (logData.length > 0) {
            const codeScheme = /^\[[A-Z]{2,3}-\d+-(\d+_)*\d+\]/;
            logData.forEach((item, idx) => {
                var elem;
                if (item.match(codeScheme)) {
                    const contentScheme = /(?<=\[.+\]).+/g;
                    const content = item.match(contentScheme)[0];
                    const code = item.match(codeScheme)[0];
                    elem = <li key={idx}>{content} <p onClick={() => reverseDoctorModification(code)}>[[Cofnij]]</p></li>;
                }
                 else {
                    elem = <li key={idx}>{item}</li>;
                }
                logItems.push(elem);
            });
        } 

        // Save response and log in appropriate state.
        if (success) {
            if (logData.length > 0) {
                const log = {
                    items: logItems, 
                    heading: 'Zmiany wprowadzone podczas układania dyżurów'
                };
                setMessages((prevData) => ({
                    ...prevData,
                    log: log,
                }));
            }
            setAppData((prevData) => ({
                ...prevData,
                duties: duties
            }));

        } else {  
            const log = {
                items: logItems, 
                heading: 'Ustawienia uniemożliwiające ułożenie dyżurów'
            };   
            setMessages((prevData) => ({
                ...prevData,
                log: log
            }));
        }
    }

    const toggleLog = () => {
        setHideLog(!hideLog);
    }

    const toggleHighlight = (doctor) => {
        if (highlight === doctor) {
            setHighlight('');
        } else {
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

    const reverseDoctorModification = async (code) => {
        const raiseMaxDuties = /\[RMD-\d+-\d{1,2}\]/g;
        const addAcceptedWeekdays = /\[AAW-\d+-[0-6]\]/g;
        const cutExceptions = /\[CE-\d+-(\d+_)*\d+\]/g;
        const addAcceptedPositions = /\[AAP-\d+-[1-3]\]/g;

        var match;
        if (code.match(raiseMaxDuties)) {
            match = code.match(raiseMaxDuties)[0];
        } else if (code.match(addAcceptedWeekdays)) {
            match = code.match(addAcceptedWeekdays)[0];
        } else if (code.match(cutExceptions)) {
            match = code.match(cutExceptions)[0];
        } else if (code.match(addAcceptedPositions)) {
            match = code.match(addAcceptedPositions)[0];
        }
        match = match.slice(1,-1);
        match = match.split('-');
        const mod = match[0];
        const pk = parseInt(match[1]);
        const info = match[2];
        const doctor = appData.doctors.find(doc => doc.pk === pk);

        const data = {pk: pk};

        if (mod === 'RMD') {
            // Verify data.
            if (isNaN(info)) {
                return;
            }
            data.maxDuties = parseInt(info) - 1;
            doctor.setMaxNumberOfDuties(data.maxDuties);
        } else {
            data.maxDuties = doctor.getMaxNumberOfDuties();
        }
        
        if (mod === 'AAW') {
            // Verify data.
            if (isNaN(info) || parseInt(info) < 0 || parseInt(info) > 6) {
                return;
            }
            const newWeekday = parseInt(info);
            const preferredWeekdays = doctor.getPreferredWeekdays();
            const idx = preferredWeekdays.findIndex(weekday => weekday === newWeekday);
            const modifiedWeekdays = (preferredWeekdays.slice(0,idx)
                .concat(preferredWeekdays
                    .slice(idx+1, preferredWeekdays.length)));
            data.preferredWeekdays = modifiedWeekdays;
            doctor.setPreferredWeekdays(data.preferredWeekdays);
        } else {
            data.preferredWeekdays = doctor.getPreferredWeekdays();
        }

        if (mod === 'CE') {
            const exceptionsBefore = info.split('_').map(item => parseInt(item));
            // Verify data.
            const dataVerified = exceptionsBefore.every(item => { 
                return (!isNaN(item)
                    && parseInt(item) > 0 
                    && parseInt(item) <= appData.monthlyDuties.days.length);
            });
            if (!dataVerified) {
                return;
            }
            data.exceptions = exceptionsBefore;
            doctor.setExceptions(exceptionsBefore);
        } else {
            data.exceptions = doctor.getExceptions();
        }

        if (mod === 'AAP') {
            // Verify data.
            if (isNaN(info) || parseInt(info) < 1 || parseInt(info) > 3) {
                return;
            }
            const newPosition = parseInt(info);
            const preferredPositions = doctor.getPreferredPositions();
            const idx = preferredPositions.findIndex(position => position === newPosition);
            const modifiedPositions = (preferredPositions.slice(0,idx)
                .concat(preferredPositions
                    .slice(idx+1, preferredPositions.length)));
            data.preferredPositions = modifiedPositions;
            doctor.setPreferredPositions(data.preferredPositions);
        } else {
            data.preferredPositions = doctor.getPreferredPositions();
        }

        setAppData((prevState) => ({...prevState}));
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
                const generalError = ("Lekarz został utworzony i zapisany " +
                    "w bazie danych. Nie udało się jednak zapisać w bazie " +
                    "jego preferencji na bieżący miesiąc. Spróbuj zapisać " +
                    "preferencje ponownie klikając przycisk Zapisz w oknie " +
                    "lekarza po lewej. W przeciwnym razie zapisane zostaną " +
                    "preferencje domyślne.");
                setMessages((prevState) => ({
                    ...prevState,
                    general: generalError
                }));
            }

            // Add doctor to unit and schedule
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

    const doctorList = [];

    for (let i=0; i<appData.doctors.length; i++) {
        doctorList.push(
            <Accordion.Item key={appData.doctors[i].pk} eventKey={i}>
                <Accordion.Header>{appData.doctors[i].name}</Accordion.Header>
                <Accordion.Body>
                    <DoctorForm doctor={appData.doctors[i]} year={year} month={month} updateDoctor={updateDoctor} />
                </Accordion.Body>
            </Accordion.Item>
        );
    }

    doctorList.push(
        <Accordion.Item key={-1} eventKey={doctorList.length} >
            <Accordion.Header>+ Dodaj lekarza</Accordion.Header>
            <Accordion.Body>
                <DoctorAddForm createDoctor={createDoctor} />
            </Accordion.Body>
        </Accordion.Item>
    )

    const leftCol = (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            {doctorList}
        </Accordion>
    );

    const rightCol = (
        <Container fluid className="vh-100">
            <Schedule appData={appData} highlight={highlight} toggleHighlight={toggleHighlight} />
            <Log hide={hideLog} toggleLog={toggleLog} log={messages.log} />
            <Row className="duty-menu border-top">
                <Col className="d-flex align-items-center justify-content-evenly">
                    <button className="btn btn-primary border w-25" onClick={setDuties}>Ułóż grafik</button>
                    <button className="btn btn-light border w-25" onClick={toggleLog}>{hideLog ? 'Pokaż' : 'Ukryj'} log</button>
                    <button className="btn btn-light border w-25">Przywróć ustawienia</button>
                </Col>
            </Row>
            { messages.error && <Alert header={"Nie można ułożyć dyżurów!"}>{messages.error}</Alert> }
        </Container>
    );

    return <ColumnLayout leftCol={leftCol} rightCol={rightCol} logoText={appData.unit.name} />;
}