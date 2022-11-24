import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { range } from './algorithm/utils';


export default function DoctorForm(props) {
    var doctor = props.doctor;
    const year = props.year;
    const month = props.month;
    const updateDoctor = props.updateDoctor;
    const daysInMonth = new Date(year, month, 0).getDate();

    const [messages, setMessages] = useState({});

    const [doctorData, setDoctorData] = useState({
        maxDuties: 0,
        exceptions: '',
        preferredDays: '',
        preferredWeekdays: [true, true, true, true, true, true, true],
        preferredPositions: [false, false, false],
        locked: false,
    });

    useEffect(() => {
        setDoctorData((prevData) => ({
            maxDuties: doctor.getMaxNumberOfDuties(),
            exceptions: doctor.getExceptions().join(', '),
            preferredDays: doctor.getPreferredDays().join(', '),
            preferredWeekdays: range(7).map((_, index) => {
                return doctor.getPreferredWeekdays().includes(index);
            }),
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

        if (name.slice(0,7) === 'weekday') {
            const index = parseInt(name.slice(-1));
            const weekdays = [...doctorData.preferredWeekdays];
            value = event.target.checked;
            name = 'preferredWeekdays';
            weekdays.splice(index,1,value);
            value = weekdays;
        } else if (name.slice(0,8) === 'position') {
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

        ['exceptions', 'preferredDays'].forEach(key => {
            const testRegex = /(^(\d{1,2},\s*)*\d{1,2}$)|^$/;
            if (doctorData[key] === '') {
                // pass
            }
            else if (!testRegex.test(doctorData[key])) {
                newMessages[key] = ("Upewnij się, że podano liczby " +
                 "oznaczające dni miesiąca, oddzielone przecinkami.");
            }
            else {
                const regex = /(?<=,|^|\s)\d{1,2}(?=,|$)/g;
                const outOfRange = (doctorData[key]
                    .match(regex)
                    .some(number => number < 1 || number > daysInMonth ));
                if (outOfRange) {
                    newMessages[key] = (`Proszę podać liczby w przedziale ` +
                        `od 1 do ${daysInMonth}`);
                }
            }
        });

        ['preferredWeekdays', 'preferredPositions'].forEach(key => {
            const allFalse = doctorData[key].every(item => !item);
            if (allFalse) {
                newMessages[key] = ("Proszę zaznaczyć przynajmniej jedną pozycję.");
            }
        });

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
        ['exceptions', 'preferredDays'].forEach(key => {
            if (doctorData[key] === '') {
                data[key] = [];
            } 
            else {
                const regex = /(?<=,|^|\s)\d{1,2}(?=,|$)/g;
                const daysArr = doctorData[key].match(regex).map(day => parseInt(day));
                data[key] = [...new Set(daysArr)];
            }
        });
        data.preferredWeekdays = [];
        doctorData.preferredWeekdays.forEach((item, index) => {
            if (item) {
                data.preferredWeekdays.push(index);
            }
        });
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

    const positionChecks = doctorData.preferredPositions.map((position, index) => {
        return <Form.Check inline type="checkbox" name={`position-${index+1}`} label={`${index+1}`} id={`position-${index+1}-doc-${doctor.pk}`} key={`position-${index+1}-doc-${doctor.pk}`} checked={doctorData.preferredPositions[index]} onChange={inputHandler} />
    });

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-4">
                    <FloatingLabel label="Maksymalna liczba dyżurów">
                        <Form.Control type="number" name="maxDuties" value={doctorData.maxDuties} onChange={inputHandler} placeholder="" />
                    </FloatingLabel>
                    { messages.maxDuties && <Form.Text className="text-danger">{ messages.maxDuties }</Form.Text> }
                </Form.Group>
                <Form.Group className="mb-1">
                    <FloatingLabel label="Zastrzeżenia">
                        <Form.Control type="text" name="exceptions" value={doctorData.exceptions} onChange={inputHandler} placeholder="" />
                    </FloatingLabel>
                    <Form.Text>Wpisz numery dni po przecinku.</Form.Text>
                    { messages.exceptions && <Form.Text className="text-danger"><br />{ messages.exceptions }</Form.Text> }
                </Form.Group>
                <Form.Group className="mb-1">
                    <FloatingLabel label="Preferowane dni miesiąca">
                        <Form.Control type="text" name="preferredDays" value={doctorData.preferredDays} onChange={inputHandler} placeholder="" />
                    </FloatingLabel>
                    <Form.Text>Wpisz numery dni po przecinku.</Form.Text>
                    { messages.preferredDays && <Form.Text className="text-danger"><br />{ messages.preferredDays }</Form.Text> }
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Preferowane dni tygodnia</Form.Label>
                    <div>
                        <Form.Check inline type="checkbox" name="weekday-0" label="Pon." id={`weekday-0-doc-${doctor.pk}`} checked={doctorData.preferredWeekdays[0]} onChange={inputHandler} />
                        <Form.Check inline type="checkbox" name="weekday-1" label="Wt." id={`weekday-1-doc-${doctor.pk}`} checked={doctorData.preferredWeekdays[1]} onChange={inputHandler} />
                        <Form.Check inline type="checkbox" name="weekday-2" label="Śr." id={`weekday-2-doc-${doctor.pk}`} checked={doctorData.preferredWeekdays[2]} onChange={inputHandler} />
                        <Form.Check inline type="checkbox" name="weekday-3" label="Czw." id={`weekday-3-doc-${doctor.pk}`} checked={doctorData.preferredWeekdays[3]} onChange={inputHandler} />
                        <Form.Check inline type="checkbox" name="weekday-4" label="Pt." id={`weekday-4-doc-${doctor.pk}`} checked={doctorData.preferredWeekdays[4]} onChange={inputHandler} />
                        <Form.Check inline type="checkbox" name="weekday-5" label="Sob." id={`weekday-5-doc-${doctor.pk}`} checked={doctorData.preferredWeekdays[5]} onChange={inputHandler} />
                        <Form.Check inline type="checkbox" name="weekday-6" label="Nied." id={`weekday-6-doc-${doctor.pk}`} checked={doctorData.preferredWeekdays[6]} onChange={inputHandler} />
                    </div>
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
                    <Form.Control type="submit" value="Zapisz" className='btn btn-primary' />
                    { messages.success && <Form.Text>{messages.success}</Form.Text> }
                </Form.Group>
            </Form>
        </div>
    );
}
