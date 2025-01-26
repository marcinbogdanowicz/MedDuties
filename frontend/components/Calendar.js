import React, { useState, useEffect, useRef } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { range, getWeekday } from './algorithm/utils';
import WithTooltip from './WithTooltip';
import Day from './algorithm/Day';


export default function Calendar(props) {
    const weekdays = ['Pn.', 'Wt.', 'Śr.', 'Cz.', 'Pt.', 'So.', 'Nd.'];
    const doctorData = props.doctorData;
    const setDoctorData = props.setDoctorData;

    const [mode, setMode] = useState('');
    const [message, setMessage] = useState('');

    const doctor = props.doctor;
    const year = props.year;
    const month = props.month;
    const length = new Date(year, month, 0).getDate();
    const days = range(1, length+1).map(day => new Day(year, month, day));
    const weeks = [];

    const acceptedDays = useRef(new Map(days.map(d => [d.number, true])));
    const acceptedDaysInitialized = useRef(false);

    const updateAcceptedDays = (prefDays, prefWeekdays, excepts) => {
        const preferredDays = prefDays || doctorData.preferredDays;
        const preferredWeekdays = prefWeekdays || doctorData.preferredWeekdays;
        const exceptions = excepts || doctorData.exceptions;

        // Start fresh.
        acceptedDays.current = new Map(days.map(d => [d.number, true]));

        for (const day of days) {
            // Exclude not preferred days on non-preferred weekdays.
            if (!preferredWeekdays.includes(day.weekday) 
                    && !preferredDays.includes(day.number)) {
                acceptedDays.current.set(day.number, false);
                continue;
            }
            // Exclude days adjacent to preferred ones (no double duties).
            if (preferredDays.includes(day.number)) {
                day.number > 1 && acceptedDays.current.set(day.number - 1, false);
                day.number < length && acceptedDays.current.set(day.number + 1, false);
                continue;
            }
            // Exclude exceptions.
            if (exceptions.includes(day.number)) {
                acceptedDays.current.set(day.number, false);
            }
        }

        const accepted = (
            [...acceptedDays.current.entries()]
            .filter(([day, accepted]) => accepted)
            .map(([day, accepted]) => day)
        );

        for (let i = 0; i < accepted.length; i++) {
            if (accepted[i] + 1 === accepted[i+1]) {
                acceptedDays.current.set(accepted[i+1], false);
                accepted.splice(i+1, 1);
            }
        }
    }

    useEffect(() => {
        normalizeMaxDuties();
    }, [doctorData.maxDuties])

    if (doctorData.maxDuties && !acceptedDaysInitialized.current) {
        updateAcceptedDays(null, null, null);
        acceptedDaysInitialized.current = true;
    }

    const normalizeMaxDuties = (prefDays=doctorData.preferredDays.length) => {
        const count = acceptedDaysCount();
        const maxDuties = doctorData.maxDuties;
        if (maxDuties > count) {
            setDoctorData((prevState) => ({
                ...prevState,
                maxDuties: count,
            }));
            setMessage((`Maksymalna liczba dyżurów przekraczała ` +
                `liczbę dyżurów możliwych do wzięcia po uwzględnieniu preferencji. ` +
                `Zmniejszono do ${count}.`));
        } else if (maxDuties < prefDays) {
            setDoctorData((prevState) => ({
                ...prevState,
                maxDuties: prefDays
            }));
            setMessage((`Maksymalna liczba dyżurów była mniejsza ` +
            `od liczby preferowanych dni miesiąca. Zwiększono do ${prefDays}.`));
        }
    }

    const acceptedDaysCount = () => {
        return [...acceptedDays.current.values()].reduce(
            (total, curr) => total + Number(curr), 0);
    }

    const onMouseOver = (e) => {
        e.target.setAttribute('style', 
            ('background-color: var(--schedule-color-primary) !important;' +
            'color: var(--schedule-color-light) !important')
        );
    }

    const onMouseOut = (e) => {
        e.target.setAttribute('style', '');
    }

    const clearMessage = () => {
        setMessage('');
    }

    const setException = (day) => {
        clearMessage();

        var newExceptions;
        var newPreferredDays = [...doctorData.preferredDays];
        // If days is in exceptions, remove it.
        if (doctorData.exceptions.includes(day)) {
            newExceptions = [...doctorData.exceptions.filter(d => d !== day)];
            setDoctorData((prevState) => ({
                ...prevState,
                exceptions: newExceptions
            }));
        } 
        // If day is not in exceptions, add it 
        // and make sure it is removed from preferred days.
        else {
            newExceptions = [...doctorData.exceptions, day];
            newPreferredDays = [...doctorData.preferredDays.filter(d => d !== day)];
            setDoctorData((prevState) => ({
                ...prevState,
                exceptions: newExceptions,
                preferredDays: newPreferredDays
            }));
        }
        updateAcceptedDays(newPreferredDays, null, newExceptions);
        normalizeMaxDuties();
    }

    const setPreferredDay = (day) => {
        clearMessage();

        var newPreferredDays;
        var newExceptions = [...doctorData.exceptions];
        // If day is already preferred, remove it.
        if (doctorData.preferredDays.includes(day)) {
            newPreferredDays = [...doctorData.preferredDays.filter(d => d !== day)];
            setDoctorData((prevState) => ({
                ...prevState,
                preferredDays: newPreferredDays
            }));
        } 
        // If day is not preferred, prefer it
        // and make sure it is not in exceptions
        // and it is not adjacent to another preferred day.
        else {
           if (doctorData.preferredDays.includes(day - 1) ||
                    doctorData.preferredDays.includes(day + 1)) {
                setMessage('Nie można preferować dyżurów w następujące po sobie dni.');
                return;
            }

            newPreferredDays = [...doctorData.preferredDays, day];
            newExceptions = [...doctorData.exceptions.filter(d => d !== day)];
            setDoctorData((prevState) => ({
                ...prevState,
                exceptions: newExceptions,
                preferredDays: newPreferredDays
            }));
        }
        updateAcceptedDays(newPreferredDays, null, newExceptions);
        normalizeMaxDuties(newPreferredDays.length);
    }

    const setPreferredWeekday = (weekday) => {
        clearMessage();
        var newPreferredWeekdays;
        // If weekday is preferred, unprefer it.
        if (doctorData.preferredWeekdays.includes(weekday)) {
            newPreferredWeekdays = [...doctorData.preferredWeekdays.filter(wd => wd !== weekday)];
        }
        // If weekdays is not preferred, prefer it.
        else {
            newPreferredWeekdays = [...doctorData.preferredWeekdays, weekday];
        }
        setDoctorData((prevState) => ({
            ...prevState,
            preferredWeekdays: newPreferredWeekdays
        }));
        updateAcceptedDays(null, newPreferredWeekdays, null);
        normalizeMaxDuties();
    }

    const handleOnClick = (e) => {
        var day = parseInt(e.target.innerHTML);
        switch (mode) {
            case 'exceptions':
                setException(day);
                break;
            case 'preferredDays':
                setPreferredDay(day);
                break;
            case 'preferredWeekdays':
                if (isNaN(e.target.innerHTML)) {
                    day = weekdays.findIndex(wd => wd === e.target.innerHTML);
                } else {
                    day = getWeekday(year, month, day);
                }
                setPreferredWeekday(day);
        }
    }

    var currWeek = [];
    for (const day of days) {

        var classes = "";
        if (doctorData.exceptions.includes(day.number)) {
            classes = "bg-danger text-light";
        } else if (doctorData.preferredDays.includes(day.number)) {
            classes = "bg-primary text-light";
        } else if (!doctorData.preferredWeekdays.includes(day.weekday)) {
            classes = "text-muted"
        }

        if (day.number === 1) {
            range(day.weekday).forEach((x, i) => currWeek.push(
                <td key={`0-${i}-${doctor.name}`} ></td>)
            );
        }

        currWeek.push(
            <td 
                key={`${day.number}-${doctor.name}`} 
                className={classes}
                onMouseOver={onMouseOver} 
                onMouseOut={onMouseOut}
                onClick={handleOnClick}
            >
                {day.number}
            </td>
        );

        if (day.weekday === 6) {
            weeks.push([...currWeek]);
            currWeek = [];
        }

        if (day.number === length) {
            range(7-day.weekday).forEach((x, i) => currWeek.push(
                <td key={`${length}-${i}-${doctor.name}`} ></td>
            ));
            weeks.push([...currWeek]);
        }
    }

    const handleModeChange = (value) => {
        setMode(value);
    }

    let tooltipMessage = 'Kliknij, by wybrać kategorię';
    if (mode === 'exceptions') {
        tooltipMessage = 'Wybierasz dni miesiąca zastrzeżone przez lekarza (czerwone)';
    } else if (mode === 'preferredDays') {
        tooltipMessage = 'Wybierasz dni miesiąca, w które lekarz ma otrzymać dyżur (niebieskie)';
    } else if (mode === 'preferredWeekdays') {
        tooltipMessage = 'Wybierasz dni tygodnia, w które lekarz może otrzymać dyżur (zielone)';
    }

    return (
        <div>
            <WithTooltip message={tooltipMessage}>
                <ToggleButtonGroup type="radio" name="modes" value={mode} onChange={handleModeChange} className={message ? "mb-2" : "mb-4"}>
                    <ToggleButton id={`modes-1-${doctor.name}`} value={'exceptions'} variant="outline-danger">
                        Zastrz.
                    </ToggleButton>
                    <ToggleButton id={`modes-2-${doctor.name}`} value={'preferredDays'} variant="outline-primary">
                        D. Mies.
                    </ToggleButton>
                    <ToggleButton id={`modes-3-${doctor.name}`} value={'preferredWeekdays'} variant="outline-success">
                        D. Tyg.
                    </ToggleButton>
                </ToggleButtonGroup>
            </WithTooltip>
            { message && <div className="mb-2"><small className="text-danger">{message}</small></div> }
            <table className="calendar">
                <thead>
                    <tr>
                        {
                            weekdays.map((weekday, i) => {
                                var classes = '';
                                if (doctorData.preferredWeekdays.includes(i)) {
                                    classes = "bg-success text-light";
                                }
                                return <th key={`weekday-${i}-${doctor.name}`} onClick={handleOnClick} className={classes}>{weekday}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        weeks.map((week, i) => <tr key={`week-${i}-${doctor.name}`}>{week}</tr>)
                    }
                </tbody>
            </table>
        </div>
    );    
}