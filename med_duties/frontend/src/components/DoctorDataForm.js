import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function DoctorDataForm(props) {
    const [name, setName] = useState('');
    const handleData = props.handleData;

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleData(name);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-4">
                    <Form.Label>Imię</Form.Label>
                    <Form.Control type="text" name="name" value={name} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <button type="submit" className="btn btn-primary">Wyślij</button>
                </Form.Group>
            </Form>
        </div>
    );
}