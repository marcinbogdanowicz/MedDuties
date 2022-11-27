import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default function ScheduleTile(props) {
    const setDoctorOnDuty = props.setDoctorOnDuty;
    const highlight = props.highlight;
    const toggleHighlight = props.toggleHighlight;

    const doctors = props.doctors;
    const duty = props.duty;
    const date = duty.getDay().number;
    const doctor = duty.getDoctor();
    const position = duty.getPosition();

    const showForm = props.showForm;
    const setShowForm = props.setShowForm;
    const thisForm = `${duty.getDay().number}-${duty.getPosition()}`;

    const [newDoctor, setNewDoctor] = useState(0);

    const handleChange = (event) => {
        setNewDoctor(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const doc = doctors.find(d => d.pk === newDoctor.pk);
        setDoctorOnDuty(duty, doc);
        setShowForm(false);
    }

    const toggleForm = () => {
        if (showForm === thisForm) {
            setShowForm('');
            return;
        }
        doctor ? setNewDoctor(doctor.pk) : setNewDoctor(0);
        setShowForm(thisForm);
        if (highlight !== doctor) {
            toggleHighlight(doctor);
        }
    }

    const handleToggleHighlight = (doctor) => {
        // Effectively disable changing highlight, when form is shown.
        if (showForm !== thisForm) {
            toggleHighlight(doctor);
            showForm && setShowForm('');
        }
    }

    const setDoctor = () => {
        const pk = parseInt(newDoctor);
        const doc = doctors.find(d => d.pk === pk);
        setDoctorOnDuty(duty, doc);
        setShowForm('');
    }

    const doctorDiv = doctor === null ? 
        <div className="duty-tile-off-duty">Nie obsadzono</div> : 
        <div className="duty-tile-on-duty">{doctor.name}</div>;

    const edit = <div className="duty-tile-control control" onClick={toggleForm}>✎</div>;
    const empty = <div className="duty-tile-control control" onClick={() => setDoctorOnDuty(duty, null)}>✕</div>

    const options = [];
    if (doctors) {
        doctors.forEach((currentDoctor, i) => {
            var unsafe = false;
            if (currentDoctor !== doctor) {
                const dutyDates = currentDoctor.getDuties().map(d => d.getDay().number);
                unsafe = [date-1, date, date+1].some(d => dutyDates.includes(d));
            }
            options.push(
                <option key={i} value={currentDoctor.pk}>{currentDoctor.name} {unsafe && '(konflikt)'}</option>
            );
        });
    }

    const doctorForm = (
        <Form onSubmit={handleSubmit} className="w-75">
            <Form.Group className="m-0 p-0 d-flex align-items-center">
                <Form.Select value={newDoctor} onChange={handleChange} className="me-2">
                    <option disabled value={0}>Wybierz...</option>
                    {options}
                </Form.Select>
                <div className="duty-tile-control control" onClick={setDoctor}>✓</div>
            </Form.Group>
        </Form>
    );

    return (
        <Col className={"border-start border-2 border-light text-light duty-tile " + (highlight === doctor ? "highlight" : "normal")} onClick={() => handleToggleHighlight(doctor)} >
            { showForm === thisForm ? doctorForm : doctorDiv }
            <div className="duty-tile-controls">
                { (showForm !== thisForm ) && edit }
                { (showForm !== thisForm && doctor) && empty }
                <div className="duty-tile-control position">{position}</div>
            </div>
        </Col>
    );
}