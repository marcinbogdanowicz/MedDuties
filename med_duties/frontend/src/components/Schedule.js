import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScheduleTile from './ScheduleTile';

export default function Schedule(props) {
    const appData = props.appData;
    const setDoctorOnDuty = props.setDoctorOnDuty;
    const highlight = props.highlight;
    const toggleHighlight = props.toggleHighlight;

    const [showForm, setShowForm] = useState('');

    const dayTiles = [];
    if (appData.monthlyDuties.constructor.name === 'MonthlyDuties') {
        const weekdays = ['Pon.', 'Wto.', 'Śro.', 'Czw.',
                          'Pią.', 'Sob.', 'Nie.'];

        for (let i = 1; i < appData.monthlyDuties.getDays().length + 1; i++) {
            // Create position tiles.
            const rowContent = [];
            appData.monthlyDuties.dutyPositions.forEach(position => {
                const duty = appData.monthlyDuties.getDuty(i, position);
                rowContent.push(
                    <ScheduleTile
                        key={`${i}-${position}`}
                        setDoctorOnDuty={setDoctorOnDuty}
                        highlight={highlight}
                        toggleHighlight={toggleHighlight}
                        showForm={showForm}
                        setShowForm={setShowForm}
                        duty={duty}
                        doctors={appData.doctors}
                    />
                );
            });
            // Create day number.
            const day = appData.monthlyDuties.getDay(i);
            rowContent.unshift(
                <Col xs={1} key={`${i}-0`} className={"border-end border-2 border-light duty-calendar-tile " + (day.weekday === 5 || day.weekday === 6 ? "weekend" : "weekday")}>
                    <p className="duty-calendar-tile-day">{i}</p>
                    <p className="duty-calendar-tile-weekday">{weekdays[day.weekday]}</p>
                </Col>
            );
            // Push row to tiles array.
            dayTiles.push(
                <Row key={i} className="border border-bottom-0 border-5 border-light">
                    {rowContent}
                </Row>                
            );
        }
    }

    return (
        <Row className="duty-view bg-light">
            <Col>
                {dayTiles}
            </Col>
        </Row>
    );
}