import React from 'react';
import Col from 'react-bootstrap/Col';

export default function ScheduleTileInactive(props) {
    const highlight = props.highlight;
    const toggleHighlight = props.toggleHighlight;

    const duty = props.duty;
    const doctor = duty.getDoctor();
    const position = duty.getPosition();

    var doctorDiv = <div className="duty-tile-off-duty"></div>;
    if (doctor) {
        doctorDiv = <div className="duty-tile-on-duty" onClick={() => toggleHighlight(doctor)}>{doctor.name}</div>;
    }

    return (
        <Col className={"border-start border-2 border-light text-light duty-tile inactive " + (highlight === doctor ? "highlight" : "normal")} >
            { doctorDiv }
            <div className="duty-tile-controls">
                <div className="duty-tile-control position">{position}</div>
            </div>
        </Col>
    );
}