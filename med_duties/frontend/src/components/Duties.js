import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import ColumnLayout from './ColumnLayout';
import Tile from './Tile';
import Alert from './Alert';
import axiosInstance from '../axiosApi';
import { range } from './algorithm/utils';
import Day from './algorithm/Day';


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

export default function Duties() {
    const navigate = useNavigate();

    const [unit, schedules] = useLoaderData();
    const [showScheduleDetails, setShowScheduleDetails] = useState(false);
    const [scheduleDetails, setScheduleDetails] = useState(null);
    const [showNewSchedule, setShowNewSchedule] = useState(false);
    const [newSchedule, setNewSchedule] = useState({
        month: 0,
        monthMessage: '',
        year: 0,
        yearMessage: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    async function getDetails(event) {
        const [month, year] = event.target.innerHTML.split('/');
        
        // Prevent fetching stored data again.
        if (scheduleDetails) {
            const [currentMonth, currentYear] = scheduleDetails.monthandyear.split('/');
            if (currentMonth === month && currentYear === year) {
                setShowNewSchedule(false);
                setShowScheduleDetails(true);
                return;
            }
        }
        try {
            const response = await axiosInstance.get('/unit/' + unit.pk + '/duties/' + year + '/' + month + '/');
            setScheduleDetails(response.data);
            setShowNewSchedule(false);
            setShowScheduleDetails(true);
        } catch (error) {
            console.log(error);
            setErrorMessage('Błąd pobierania danych.');
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewSchedule((prevState) => ({
            ...prevState,
            [name]: [value]
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        cancelNewScheduleMessages();

        const month = parseInt(newSchedule.month);
        const year = parseInt(newSchedule.year);

        // Verify data.
        const messages = {};
        if (month === 0) {
            messages.monthMessage = 'Proszę wybrać miesiąc!';
        }
        if (year === 0) {
            messages.yearMessage = 'Proszę wybrać rok!';
        }
        if (Object.keys(messages).length) {
            setNewSchedule((prevState) => ({
                ...prevState,
                ...messages
            }));
            return;
        }

        // Create schedule
        const monthLength = new Date(year, month, 0).getDate()
        const duties = [];
        range(1, monthLength+1).forEach(day => {
            range(1, unit.duty_positions+1).forEach(position => {
                const d = new Day(year, month, day);
                duties.push({
                    day: d.number,
                    position: position,
                    doctor: null,
                    strain_points: d.strainPoints,
                    user_set: false
                });
            });
        })
        const data = {
            monthandyear: `${month}/${year}`,
            duties: duties
        }
        const url = `/unit/${unit.pk}/duties/`;
        try {
            await axiosInstance.post(url, data);
            navigate(`/duties/${year}/${month}/`);
        } catch (error) {
            console.log(error);
            setErrorMessage('Nie udało się utworzyć grafiku.');
        }
    }

    const cancelNewScheduleMessages = () => {
        setNewSchedule((prevState) => ({
            ...prevState,
            monthMessage: '',
            yearMessage: ''
        }));
    }

    const changeToNew = () => {
        setShowNewSchedule(true);
        setShowScheduleDetails(false);
    }

    const table = (
        schedules
        .sort((sA, sB) => {
            const [monthA, yearA] = JSON.parse(sA.monthandyear);
            const [monthB, yearB] = JSON.parse(sB.monthandyear);
            if (yearA !== yearB) {
                return (yearA - yearB);
            } else {
                return (monthA - monthB);
            }
        })
        .map(item => {
            const [month, year] = JSON.parse(item.monthandyear);
            return <Tile key={item.pk} onClick={async (e) => await getDetails(e)} addedClass="bg-info fw-bolder fs-2 text-white">{month + '/' + year}</Tile>
        })
    );
    table.unshift(
        <Tile key={0} addedClass="bg-primary fw-bolder fs-1 text-white" onClick={changeToNew}>+</Tile>
    );

    const rightCol = (
        <div className="d-flex flex-wrap">
            {table}
        </div>
    );

    const leftCol = (
            <div className="bg-warning left-col d-flex align-items-center justify-content-center">
                <div className="w-75 p-4 m-5 bg-light">
                    {
                        showScheduleDetails && 
                        <div>
                            <h4>Grafik na { scheduleDetails.monthandyear }</h4>
                            <hr />
                            <p>Grafik <b>{ scheduleDetails.duties.filter(d => d.doctor !== null).length === (scheduleDetails.number_of_days * scheduleDetails.duty_positions) ? 'jest' : 'nie jest' }</b> ułożony.</p>
                            <hr />
                            <div>
                                <button onClick={() => navigate('/duties/' + scheduleDetails.monthandyear.split('/')[1] + '/' + scheduleDetails.monthandyear.split('/')[0] + '/')} className="btn btn-primary mb-3 w-50">Otwórz</button>
                            </div>
                        </div>
                    }
                    {
                        showNewSchedule &&
                        <Form onSubmit={handleSubmit} >
                            <h4 className="mb-4">Dodaj grafik</h4>
                            <Form.Group className="mb-4">
                                <Form.Select name="month" value={newSchedule.month} onChange={handleChange}>
                                    <option disabled value={0}>Wybierz miesiąc</option>
                                    {
                                        range(1,13).map((month, i) => {
                                            return <option key={`month-${i}`} value={month}>{month}. {months[month]}</option>;
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Select name="year" value={newSchedule.year} onChange={handleChange}>
                                    <option disabled value={0}>Wybierz rok</option>
                                    {
                                        range(2022,2033).map((year, i) => {
                                            return <option key={`year-${i}`} value={year}>{year}</option>;
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="submit" value="Utwórz" className="btn btn-primary" />
                            </Form.Group>
                        </Form>
                    }
                    {
                        (!showNewSchedule && !showScheduleDetails) &&
                        <h4>Wybierz grafik by wyświetlić szczegóły</h4>
                    }
                </div>
            { errorMessage && <Alert>{errorMessage}</Alert> }
        </div>
    );

    return <ColumnLayout leftCol={leftCol} rightCol={rightCol} logoPrimary={"Grafiki dyżurów"}/>
}