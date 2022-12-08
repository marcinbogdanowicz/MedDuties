import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { range, getWeekday } from './algorithm/utils';


export default function Calendar(props) {
    const weekdays = ['Pn.', 'Wt.', 'Śr.', 'Cz.', 'Pt.', 'So.', 'Nd.'];
    const doctorData = props.doctorData;
    const setDoctorData = props.setDoctorData;

    const [mode, setMode] = useState(null);
    const [message, setMessage] = useState('');

    const doctor = props.doctor;
    const year = props.year;
    const month = props.month;
    const length = new Date(year, month, 0).getDate();
    const days = range(1, length+1);
    const weeks = [];

    
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
        var newPreferredDays;
        // If days is in exceptions, remove it.
        if (doctorData.exceptions.includes(day)) {
            newExceptions = [...doctorData.exceptions.filter(d => d !== day)];
            setDoctorData((prevState) => ({
                ...prevState,
                exceptions: newExceptions
            }));
        } 
        // If day is not in exceptions, add it 
        // and make sure it is removed from preferred days too.
        else {
            newExceptions = [...doctorData.exceptions, day];
            newPreferredDays = [...doctorData.preferredDays.filter(d => d !== day)];
            setDoctorData((prevState) => ({
                ...prevState,
                exceptions: newExceptions,
                preferredDays: newPreferredDays
            }));
        }
    }

    const setPreferredDay = (day) => {
        clearMessage();

        var newPreferredDays;
        var newExceptions;
        // If day is already preferred, remove it.
        if (doctorData.preferredDays.includes(day)) {
            newPreferredDays = [...doctorData.preferredDays.filter(d => d !== day)];
            setDoctorData((prevState) => ({
                ...prevState,
                preferredDays: newPreferredDays
            }));
        } 
        // If day is not preferred, prefer it
        // and make sure it is not in exceptions.
        else {
            // Make sure preferred day is on a preferred weekday.
            const weekday = getWeekday(year, month, day);
            if (!doctorData.preferredWeekdays.includes(weekday)) {
                setMessage('Nie można żądać dyżuru w niechciany dzień tygodnia. ' +
                    'Dopuść ten dzień tygodnia i użyj zastrzeżeń.');
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
    }

    const setPreferredWeekday = (weekday) => {
        clearMessage();
        var newPreferredWeekdays;
        // If weekday is preferred, unprefer it.
        if (doctorData.preferredWeekdays.includes(weekday)) {
            // Make sure there are no preferred days on this weekday.
            const preferredDayOnUnpreferredWeekday = doctorData.preferredDays.some(day => {
                return weekday === getWeekday(year, month, day);
            });
            if (preferredDayOnUnpreferredWeekday) {
                setMessage('Preferujesz dyżur w ten dzień tygodnia! ' +
                    'Usuń preferencję albo oznacz pozostałe dni tygodnia ' +
                    'jako zastrzeżenia.');
                return;
            }
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
        const weekday = getWeekday(year, month, day);

        var classes = "";
        if (doctorData.exceptions.includes(day)) {
            classes = "bg-danger text-light";
        } else if (doctorData.preferredDays.includes(day)) {
            classes = "bg-primary text-light";
        } else if (!doctorData.preferredWeekdays.includes(weekday)) {
            classes = "text-muted"
        }

        if (day === 1) {
            range(weekday).forEach((x, i) => currWeek.push(
                <td key={`0-${i}-${doctor.name}`} ></td>)
            );
        }

        currWeek.push(
            <td 
                key={`${day}-${doctor.name}`} 
                className={classes}
                onMouseOver={onMouseOver} 
                onMouseOut={onMouseOut}
                onClick={handleOnClick}
            >
                {day}
            </td>
        );

        if (weekday === 6) {
            weeks.push([...currWeek]);
            currWeek = [];
        }
        
        if (day === length) {
            range(7-weekday).forEach((x, i) => currWeek.push(
                <td key={`${length}-${i}-${doctor.name}`} ></td>
            ));
            weeks.push([...currWeek]);
        }
    }

    const handleModeChange = (value) => {
        setMode(value);
    }

    return (
        <div>
            <ToggleButtonGroup type="radio" name="modes" value={mode} onChange={handleModeChange} className={message ? "mb-2" : "mb-4"}>
                <ToggleButton id={`modes-1-${doctor.name}`} value={'exceptions'} variant="outline-danger">
                    Zastrzeżone
                </ToggleButton>
                <ToggleButton id={`modes-2-${doctor.name}`} value={'preferredDays'} variant="outline-primary">
                    D. Miesiąca
                </ToggleButton>
                <ToggleButton id={`modes-3-${doctor.name}`} value={'preferredWeekdays'} variant="outline-success">
                    D. Tygodnia
                </ToggleButton>
            </ToggleButtonGroup>
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