import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Calendar from './Calendar';
import { range } from './algorithm/utils';


export default function DoctorForm(props) {
    var doctor = props.doctor;
    const year = props.year;
    const month = props.month;
    const updateDoctor = props.updateDoctor;
    const removeDoctor = props.removeDoctor;
    const daysInMonth = new Date(year, month, 0).getDate();

    const [messages, setMessages] = useState({});

    const [doctorData, setDoctorData] = useState({
        maxDuties: 0,
        exceptions: [],
        preferredDays: [],
        preferredWeekdays: [],
        preferredPositions: [false, false, false],
        locked: false,
    });

    useEffect(() => {
        setDoctorData((prevData) => ({
            maxDuties: doctor.getMaxNumberOfDuties(),
            exceptions: doctor.getExceptions(),
            preferredDays: doctor.getPreferredDays(),
            preferredWeekdays: doctor.getPreferredWeekdays(),
            preferredPositions: doctor.unit.dutyPositions.map(position => {
                return doctor.getPreferredPositions().includes(position);
            }),
            locked: doctor.isLocked()
        }));
    }, [
        doctor.maxNumberOfDuties, 
        doctor.exceptions, 
        doctor.preferredDays, 
        doctor.preferredWeekdays, 
        doctor.preferredPositions, 
        doctor.locked
    ]);

    const inputHandler = (event) => {
        var { name, value } = event.target;

        if (name.slice(0,8) === 'position') {
            const index = parseInt(name.slice(-1)) - 1;
            const positions = [...doctorData.preferredPositions];
            value = event.target.checked;
            name = 'preferredPositions';
            positions.splice(index,1,value);
            value = positions;
        } else if (name === 'locked') {
            value = event.target.checked;
        }

        setDoctorData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const submitHandler = (event) => {
        event.preventDefault();

        // Validate form fields.
        const newMessages = {};

        if (isNaN(doctorData.maxDuties)) {
            newMessages.maxDuties = "Proszę podać liczbę.";
        } 
        else if (doctorData.maxDuties > 15 || doctorData.maxDuties < 1) {
            newMessages.maxDuties = "Proszę podać liczbę w przedziale 1 - 15";
        }

        if (doctorData.exceptions.some(exc => (exc < 1 || exc > daysInMonth))) {
            newMessages.exceptions = `Zastrzeżenia: proszę wybrać liczby z przedziału 1-${daysInMonth}`;
        }

        if (doctorData.preferredDays.some(d => (d < 1 || d > daysInMonth))) {
            newMessages.preferredDays = `Preferowane dni miesiąca: proszę wybrać liczbę z przedziału 1-${daysInMonth}`;
        }

        if (doctorData.preferredWeekdays.some(wd => (wd < 0 || wd > 6))) {
            newMessages.preferredWeekdays = `Preferowane dni tygodnia: proszę wybrać liczbę z przedziału 0 - 6`;
        }

        if (doctorData.preferredPositions.every(pos => !pos)) {
            newMessages.preferredPositions = "Proszę zaznaczyć przynajmmniej jedną pozycję.";
        }

        if (Object.keys(newMessages).length > 0) {
            setMessages(newMessages);
            return;
        } else {
            // Reset messages, if there were any.
            setMessages({});
        }

        // Send data up to update doctor instance and database.
        const data = {};
        data.pk = doctor.pk;
        data.maxDuties = parseInt(doctorData.maxDuties);
        data.exceptions = doctorData.exceptions;
        data.preferredDays = doctorData.preferredDays;
        data.preferredWeekdays = doctorData.preferredWeekdays;
        data.preferredPositions = [];
        doctorData.preferredPositions.forEach((item, index) => {
            if (item) {
                data.preferredPositions.push(index + 1);
            }
        });
        data.locked = doctorData.locked;

        const updatedDoctor = updateDoctor(data);
        
        if (updatedDoctor) {
            setMessages({success: 'Zapisano.'});
            doctor = updatedDoctor;
        } else {
            setMessages({success: 'Nie zapisano.'});
        }
    }

    const removeHandler = (e) => {
        e.preventDefault();
        removeDoctor(doctor.pk);
    }

    const positionChecks = doctorData.preferredPositions.map((position, index) => {
        return <Form.Check inline type="checkbox" name={`position-${index+1}`} label={`${index+1}`} id={`position-${index+1}-doc-${doctor.pk}`} key={`position-${index+1}-doc-${doctor.pk}`} checked={doctorData.preferredPositions[index]} onChange={inputHandler} />
    });

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-4">
                    <Form.Control type="submit" value="Zapisz ustawienia" className='btn btn-primary' />
                    { messages.success && <Form.Text>{messages.success}</Form.Text> }
                </Form.Group>
                <Form.Group className="mb-4">
                    <FloatingLabel label="Maksymalna liczba dyżurów">
                        <Form.Control type="number" name="maxDuties" value={doctorData.maxDuties} onChange={inputHandler} placeholder="" />
                    </FloatingLabel>
                    { messages.maxDuties && <Form.Text className="text-danger">{ messages.maxDuties }</Form.Text> }
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Wybierz preferencje dni</Form.Label>
                    <Calendar 
                        year={year} 
                        month={month} 
                        doctor={doctor}
                        doctorData={{
                            exceptions: doctorData.exceptions, 
                            preferredDays: doctorData.preferredDays, 
                            preferredWeekdays: doctorData.preferredWeekdays
                        }} 
                        setDoctorData={setDoctorData}
                    />
                    { messages.exceptions && <Form.Text className="text-danger">{ messages.exceptions }</Form.Text> }
                    { messages.preferredDays && <Form.Text className="text-danger">{ messages.preferredDays }</Form.Text> }
                    { messages.preferredWeekdays && <Form.Text className="text-danger">{ messages.preferredWeekdays }</Form.Text> }
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Pozycje dyżurowe</Form.Label>
                    <div>
                        {positionChecks}
                    </div>
                    { messages.preferredPositions && <Form.Text className="text-danger">{ messages.preferredPositions }</Form.Text> }
                </Form.Group>
                <hr />
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" name="locked" label="Zablokuj ustawienia" id={`lock-doc-${doctor.pk}`} checked={doctorData.locked} onChange={inputHandler} />
                    <Form.Text>
                        Program nie zmieni ustawień tego lekarza, nawet jeśli ułożenie dyżurów nie będzie możliwe.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="submit" value="Usuń z grafiku" className='btn btn-light border' onClick={removeHandler} />
                    <Form.Text>
                        Lekarza możesz dodać z powrotem w zakładce "Dodaj lekarza" na dole strony.
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    );
}
