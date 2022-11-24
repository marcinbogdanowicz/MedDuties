import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Schedule(props) {
    const appData = props.appData;
    const highlight = props.highlight;
    const toggleHighlight = props.toggleHighlight;

    const dayTiles = [];
    if (appData.monthlyDuties.constructor.name === 'MonthlyDuties') {
        const weekdays = ['Pon.', 'Wto.', 'Śro.', 'Czw.',
                          'Pią.', 'Sob.', 'Nie.'];

        for (let i = 1; i < appData.monthlyDuties.getDays().length + 1; i++) {
            // Get doctors (or nulls) on duty.
            const onDuty = {};
            const day = appData.monthlyDuties.getDay(i);
            appData.unit.dutyPositions.forEach(position => {
                if ([...appData.duties[position].keys()].includes(day)) {
                    onDuty[position] = appData.duties[position].get(day).getDoctor();
                } else {
                    onDuty[position] = null;
                }                
            });
            // Create position tiles.
            const rowContent = [];
            appData.unit.dutyPositions.forEach(position => {
                rowContent.push(
                    <Col className={"border-start border-2 border-light text-light " + (highlight === onDuty[position] ? "duty-tile-highlight" : "duty-tile")} key={`${i}-${position}`} onClick={() => toggleHighlight(onDuty[position])}>
                        <h4>{position}</h4>
                        {onDuty[position] === null ? <div><i>Nie obsadzono</i></div> : <div className="fs-3">{onDuty[position].name}</div>}
                    </Col>
                );
            });
            // Create day number.
            rowContent.unshift(
                <Col xs={1} key={`${i}-0`} className={"border-end border-2 border-light"} style={day.weekday === 5 || day.weekday === 6 ? {backgroundColor: "brown", color: "white"} : {color: "brown"}}>
                    <p className="fs-1 mb-0 fw-bold">{i}</p>
                    <p className="fs-6 mb-0 fw-italic">{weekdays[day.weekday]}</p>
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