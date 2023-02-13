import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DutyTile from './DutyTile';
import DutyTileInactive from './DutyTileInactive';
import Day from './algorithm/Day';
import Duty from './algorithm/Duty';

var months = {
    1: 'Styczeń',
    2: 'Luty',
    3: 'Marzec',
    4: 'Kwiecień',
    5: 'Maj',
    6: 'Czerwiec',
    7: 'Lipiec',
    8: 'Sierpień',
    9: 'Wrzesień',
    10: 'Październik',
    11: 'Listopad',
    12: 'Grudzień'
};

export default function Schedule(props) {
    const appData = props.appData;
    const setDoctorOnDuty = props.setDoctorOnDuty;
    const highlight = props.highlight;
    const toggleHighlight = props.toggleHighlight;

    const mobile = window.matchMedia("(max-width: 768px)").matches;

    const dayTiles = [];
    if (appData.monthlyDuties.year) {
        const weekdays = ['Pon.', 'Wto.', 'Śro.', 'Czw.',
                          'Pią.', 'Sob.', 'Nie.'];
        const monthlyDuties = appData.monthlyDuties;
        const month = parseInt(monthlyDuties.getMonth());
        const year = parseInt(monthlyDuties.getYear());
        const positions = appData.unit.dutyPositions;
        const preferences = appData.monthlyDuties.getPreferences();

        // Add current month's rows.
        for (let i = 1; i < monthlyDuties.getDays().length + 1; i++) {
            // Create position tiles.
            const rowContent = [];
            positions.forEach(position => {
                const duty = monthlyDuties.getDuty(i, position);
                rowContent.push(
                    <DutyTile
                        key={`${i}-${position}`}
                        setDoctorOnDuty={setDoctorOnDuty}
                        highlight={highlight}
                        toggleHighlight={toggleHighlight}
                        duty={duty}
                        doctors={preferences[i][position]}
                    />
                );
            });
            // Create day number.
            const day = monthlyDuties.getDay(i);
            let dayClass = "weekday";
            if (day.weekday === 5 || day.weekday === 6) {
                if (day.category === 'holiday') {
                    dayClass = "weekend-holiday";
                } else {
                    dayClass = "weekend";
                }
            } else if (day.category === 'holiday') {
                dayClass = 'weekday-holiday';
            }
            rowContent.unshift(
                <Col md={1} key={`${i}-0`} className={"border-2 border-light duty-calendar-tile " + dayClass + (mobile ? "" : " border-end")}>
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

        // Push current month's name.
        dayTiles.unshift(
            <Row key={'1000'} className="border border-bottom-0 border-5 border-light">
                <Col className="duty-tile-month">
                    <h2>{`${months[month]} ${year}`}</h2>
                </Col>
            </Row>
        );

        // Create prev and next month's inactive tiles.
        const createRow = (currYear, currMonth, currDay, duties) => {
            // Create position tiles.
            const rowContent = [];
            positions.forEach(position => {
                // Get duty.
                var duty = duties.find(duty => {
                    return (duty.day.number === currDay && duty.position === position);
                });
                // Create duty if there was none (eg. number of positions has changed).
                if (!duty) {
                    const day = new Day(currYear, currMonth, currDay);
                    duty = new Duty(day, null, position, day.strainPoints, null, false);
                }
                // Create tile.
                rowContent.push(
                    <DutyTileInactive
                        key={`prev-${currDay}-${position}`}
                        highlight={highlight}
                        toggleHighlight={toggleHighlight}
                        duty={duty}
                    />
                );
            });
            // Create day number.
            const day = new Day(currYear, currMonth, currDay);
            let dayClass = "weekday";
            if (day.weekday === 5 || day.weekday === 6) {
                if (day.category === 'holiday') {
                    dayClass = "weekend-holiday";
                } else {
                    dayClass = "weekend";
                }
            } else if (day.category === 'holiday') {
                dayClass = 'weekday-holiday';
            }
            rowContent.unshift(
                <Col md={1} key={`${currMonth}-${day.number}-0`} className={"border-2 border-light duty-calendar-tile inactive " + dayClass + (mobile ? "" : " border-end")}>
                    <p className="duty-calendar-tile-day">{currDay}</p>
                    <p className="duty-calendar-tile-weekday">{weekdays[day.weekday]}</p>
                </Col>
            );
            return rowContent;
        }

        // Add previous month's duties.
        const prevDuties = monthlyDuties.getPrevMonthDuties();
        const prevYear = month === 1 ? year-1 : year;
        const prevMonth = month === 1 ? 12 : month-1;
        const prevMonthLen = new Date(prevYear, prevMonth, 0).getDate();

        for (let i = prevMonthLen; i > prevMonthLen-7; i--) {
            const rowContent = createRow(prevYear, prevMonth, i, prevDuties);
            dayTiles.unshift(
                <Row key={`prev-${i}`} className="border border-bottom-0 border-5 border-light">
                    {rowContent}
                </Row>
            );
        }

        // Add next month's duties
        const nextDuties = monthlyDuties.getNextMonthDuties();
        const nextYear = month === 12 ? year+1 : year;
        const nextMonth = month === 12 ? 1 : month+1;

        // Push next month's name.
        dayTiles.push(
            <Row key={'3000'} className="border border-bottom-0 border-5 border-light">
                <Col className="duty-tile-month inactive">
                    <h2>{`${months[nextMonth]} ${nextYear}`}</h2>
                </Col>
            </Row>
        );

        for (let i = 1; i < 8; i++) {
            const rowContent = createRow(nextYear, nextMonth, i, nextDuties);
            dayTiles.push(
                <Row key={`prev-${i}`} className="border border-bottom-0 border-5 border-light">
                    {rowContent}
                </Row>
            );
        }
    }

    return (
        <Row className="duty-view bg-light" id="schedule">
            <Col>
                {dayTiles}
            </Col>
        </Row>
    );
}