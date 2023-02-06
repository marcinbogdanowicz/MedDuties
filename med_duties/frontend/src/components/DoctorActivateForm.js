import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function DoctorActivateForm(props) {
    const [doctor, setDoctor] = useState(0);
    const [message, setMessage] = useState('');
    const doctors = props.doctors;
    const activateDoctor = props.activateDoctor;

    const options = [];
    if (doctors) {
        doctors.forEach((doctor, i) => {
            options.push(
                <option key={i} value={doctor.pk}>{doctor.name}</option>
            );
        });
    }

    const handleChange = (event) => {
        setDoctor(event.target.value);
    }

    const handleSubmit = (event) => {
        setMessage('');
        event.preventDefault();
        const result = activateDoctor(parseInt(doctor));
        if (!result) {
            setMessage('Nie udało się dodać lekarza.')
        }
        setDoctor(0);
    }

    const addAll = () => {
        const pks = doctors.map(d => d.pk);
        const result = activateDoctor(...pks);
        if (!result) {
            setMessage('Nie udało się dodać żadnego lekarza.');
        }
        setDoctor(0);
    }

    const disabled = doctors.length === 0;

    return (
        <div>
            <h6>Istniejący lekarz</h6>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-4">
                    <Form.Label>Imię</Form.Label>
                    <Form.Select value={doctor} onChange={handleChange}>
                        <option disabled value={0}>{ disabled ? "Brak dostępnych lekarzy" : "Wybierz..." }</option>
                        {options}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <button type="submit" className="btn btn-primary me-3" disabled={disabled}>Dodaj</button>
                    <button className="btn btn-primary" onClick={addAll} disabled={disabled}>Dodaj wszystkich</button>
                </Form.Group>
                { message && <Form.Text>{message}</Form.Text> }
            </Form>
        </div>
    );
}