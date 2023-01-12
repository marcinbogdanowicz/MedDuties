import React from 'react';
import Col from 'react-bootstrap/Col';

export default function DutyTileInactive(props) {
    const highlight = props.highlight;
    const toggleHighlight = props.toggleHighlight;

    const duty = props.duty;
    const doctor = duty.getDoctor();
    const position = duty.getPosition();

    var doctorDiv = <div className="duty-tile-off-duty"></div>;
    if (doctor) {
        doctorDiv = <div className="duty-tile-on-duty" onClick={() => toggleHighlight(doctor)}>{doctor.name}</div>;
    }

    let colClasses = "border-start border-2 border-light text-light duty-tile ";
    if (highlight === doctor) {
        colClasses += "inactive highlight";
    } else {
        colClasses += `inactive-${position}`;
    }   

    return (
        <Col className={colClasses} >
            { doctorDiv }
        </Col>
    );
}