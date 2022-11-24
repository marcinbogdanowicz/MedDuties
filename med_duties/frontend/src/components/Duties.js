import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ColumnLayout from './ColumnLayout';
import Tile from './Tile';
import Alert from './Alert';
import axiosInstance from '../axiosApi';


export default function Duties() {
    const navigate = useNavigate();

    const [unitPk, schedules] = useLoaderData();
    const [scheduleDetails, setScheduleDetails] = useState(null);
    const [newSchedule, setNewSchedule] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function getDetails(event) {
        const [month, year] = event.target.innerHTML.split('/');
        
        // Prevent fetching stored data again.
        if (scheduleDetails) {
            const [currentMonth, currentYear] = scheduleDetails.monthandyear.split('/');
            if (currentMonth === month && currentYear === year) {
                return;
            }
        }
        try {
            const response = await axiosInstance.get('/unit/' + unitPk + '/duties/' + year + '/' + month + '/');
            setScheduleDetails(response.data);
        } catch (error) {
            console.log(error);
            setErrorMessage('Błąd pobierania danych.');
        }
    }

    const table = schedules.map(item => {
        const [month, year] = JSON.parse(item.monthandyear);
        return <Tile key={item.pk} onClick={async (e) => await getDetails(e)} addedClass="bg-info fw-bolder fs-2 text-white">{month + '/' + year}</Tile>
    });
    table.unshift(
        <Tile key={0} addedClass="bg-primary fw-bolder fs-1 text-white">+</Tile>
    );

    const rightCol = (
        <div className="d-flex flex-wrap">
            {table}
        </div>
    );

    const leftCol = (
            <div className="bg-warning min-vh-75 h-75 d-flex align-items-center justify-content-center">
                <div className="w-75 p-4 m-5 bg-light">
                    { scheduleDetails ? 
                        <div>
                            <h3>Grafik na { scheduleDetails.monthandyear }</h3>
                            <hr />
                            <p>Grafik <b>{ scheduleDetails.duties.length === (scheduleDetails.number_of_days * scheduleDetails.duty_positions) ? 'jest' : 'nie jest' }</b> ułożony.</p>
                            <hr />
                            <div>
                                <button onClick={() => navigate('/duties/' + scheduleDetails.monthandyear.split('/')[1] + '/' + scheduleDetails.monthandyear.split('/')[0] + '/')} className="btn btn-primary mb-3 w-50">Edytuj</button>
                            </div>
                            <div>
                                <button className="btn btn-primary w-50">Podgląd</button>
                            </div>
                        </div>
                        : <h3>Wybierz grafik by wyświetlić szczegóły</h3>
                    }
                </div>
            { errorMessage && <Alert>errorMessage</Alert> }
        </div>
    );

    return <ColumnLayout leftCol={leftCol} rightCol={rightCol} logoText={"Grafiki dyżurów"}/>
}