import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function DoctorAddForm(props) {
    const [name, setName] = useState('');
    const createDoctor = props.createDoctor;

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createDoctor(name);
    }
    return (
        <div>
            <h5>Nowy lekarz</h5>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-4">
                    <Form.Label>Imię</Form.Label>
                    <Form.Control type="text" name="name" value={name} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <button type="submit" className="btn btn-primary">Dodaj</button>
                </Form.Group>
            </Form>
        </div>
    );
}