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
            <Form onSubmit={handleSubmit} >
                <Form.Label>Imię</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={handleChange}/>
                <button type="submit" className="btn btn-primary">Dodaj</button>
            </Form>
        </div>
    );
}