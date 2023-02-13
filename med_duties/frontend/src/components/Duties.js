import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import ColumnLayout from './ColumnLayout';
import ScheduleTile from './ScheduleTile';
import Alert from './Alert';
import OverlaySpinner from './OverlaySpinner';
import axiosInstance from '../axiosApi';
import { range, getHolidays } from './algorithm/utils';
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

var holidays = getHolidays();

export default function Duties() {
    const navigate = useNavigate();

    const [unit, schedulesData] = useLoaderData();
    const [schedules, setSchedules] = useState([]);
    const [show, setShow] = useState('');
    const [scheduleDetails, setScheduleDetails] = useState({
        pk: 0,
        monthandyear: '0/0',
        addedDoctors: 0,
        duties: null,
        numberOfDays: 0,
        weekendDays: 0,
        holidays: 0,
        dutyPositions: 0,
        dutiesSet: 0,
        dutiesToBeSet: 0,
        isSet: false,
        dutiesPerDoctor: 0,
        doctorData: null
    });
    const [newSchedule, setNewSchedule] = useState({
        month: 0,
        monthMessage: '',
        year: 0,
        yearMessage: ''
    });
    const [alertData, setAlertData] = useState({
        show: false,
        message: '',
        header: ''
    });
    const [spinnerData, setSpinnerData] = useState({
        show: false,
        content: []
    });

    useEffect(() => {
        const s = schedulesData.map(data => {
            if (data.monthandyear) {
                const [month, year] = JSON.parse(data.monthandyear);
                data.month = month;
                data.year = year;
                delete data.monthandyear;
            }
        });
        setSchedules(schedulesData);
    }, []);

    useEffect(() => {
        setNewSchedule((prevState) => ({
            ...prevState,
            month: 0
        }));
    }, [newSchedule.year])

    const hide = () => {
        setShow('');
    }

    async function getDetails(event) {
        const [month, year] = event.target.innerHTML.split('/');
        // Prevent fetching stored data again.
        if (scheduleDetails) {
            const [currentMonth, currentYear] = scheduleDetails.monthandyear.split('/');
            if (currentMonth === month && currentYear === year) {
                setShow('scheduleDetails')
                return;
            }
        }
        try {
            const url = ('/unit/' + unit.pk + '/duties/' + year + '/' + month + '/');
            const response = await axiosInstance.get(url);

            const data = _getScheduleData(response);

            setScheduleDetails(data);
            setShow('scheduleDetails')
        } catch (error) {
            console.log(error);
            setAlertData({
                show: true,
                message: 'Błąd pobierania danych.',
                header: null
            });
        }
    }
    
    const _getScheduleData = (response) => {
        const data = response.data;

        const dutiesToBeSet = data.number_of_days * data.duty_positions;
        const dutiesPerDoctor = (
            data.doctor_data.length ? 
            Math.ceil(dutiesToBeSet / data.doctor_data.length) :
            '-'
        );
        const dutiesSet = data.duties.filter(d => d.doctor !== null).length;
        const isSet = (
            dutiesSet === (data.number_of_days * data.duty_positions));
        let weekendDays = 0;
        [4,5,6].forEach(weekday => {
            const firstWeekdayDate = (
                weekday - data.first_weekday > 0 ?
                1 + (weekday - data.first_weekday) :
                (weekday - data.first_weekday) + 8
            );
            const weekdayCount = (
                Math.floor((data.number_of_days - firstWeekdayDate) / 7) + 1);
            weekendDays += weekdayCount
        })
        const [month, year] = data.monthandyear.split('/');
        const holidaysCount = holidays[year][month].length;

        return {
            pk: data.pk,
            monthandyear: data.monthandyear,
            addedDoctors: data.doctor_data.length,
            duties: data.duties,                
            numberOfDays: data.number_of_days,
            weekendDays: weekendDays,
            holidays: holidaysCount,
            dutyPositions: data.duty_positions,
            dutiesSet: dutiesSet,
            dutiesToBeSet: dutiesToBeSet,
            isSet: isSet,
            dutiesPerDoctor: dutiesPerDoctor,
            doctorData: data.doctor_data
        };
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = parseInt(event.target.value);
        setNewSchedule((prevState) => ({
            ...prevState,
            [name]: value
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

        // Show spinner.
        showSpinner('Tworzę grafik...', 'Sprawdzam kalendarz...', 'Rysuję tabele...');

        // Create new duties
        const monthLength = new Date(year, month, 0).getDate()
        const duties = [];
        range(1, monthLength+1).forEach(day => {
            range(1, unit.duty_positions+1).forEach(position => {
                const d = new Day(year, month, day);
                duties.push({
                    day: d.number,
                    weekday: d.weekday,
                    week: d.week,
                    position: position,
                    doctor: null,
                    strain_points: d.strainPoints,
                    user_set: false
                });
            });
        })
        // Prepare schedule data
        const data = {
            monthandyear: `${month}/${year}`,
            duties: duties
        }
        // Create schedule
        const url = `/unit/${unit.pk}/duties/`;
        try {
            const response = await axiosInstance.post(url, data);
            const [month, year] = response.data.monthandyear.split('/');
            const newSchedule = {month: month, year: year, pk: response.data.pk};
            const newSchedules = [...schedules, newSchedule];
            const newDetails = _getScheduleData(response);
            setSchedules(newSchedules);
            setScheduleDetails(newDetails);
            setShow('scheduleDetails');
            hideSpinner();
        } catch (error) {
            console.log(error);
            hideSpinner();
            setAlertData({
                show: true,
                message: 'Nie udało się utworzyć grafiku.',
                header: null
            });
        }
    }

    const cancelNewScheduleMessages = () => {
        setNewSchedule((prevState) => ({
            ...prevState,
            monthMessage: '',
            yearMessage: ''
        }));
    }

    const removeSchedule = () => {
        const message = (
            <div>
                <p>Próbujesz <strong>usunąć grafik</strong>. Wszystkie ustawienia
                tego grafiku, w tym ułożone dyżury i preferencje lekarzy, 
                zostaną usunięte.<br />
                Czy chcesz kontynuować?</p>
                <div>
                    <button 
                        className='btn btn-warning'
                        onClick={_remove}
                    >
                        Usuń
                    </button>
                    <button 
                        className='btn btn-success ms-4' 
                        onClick={closeAlert}
                    >
                        Anuluj
                    </button>
                </div>
            </div>
        );
        setAlertData({
            show: true,
            message: message,
            header: "Usuwasz grafik!"
        });
    }

    const _remove = async () => {
        const pk = scheduleDetails.pk;
        const [month, year] = scheduleDetails.monthandyear.split('/');

        try {
            // Remove schedule from database.
            const url = `/unit/${unit.pk}/duties/${year}/${month}/`;
            await axiosInstance.delete(url, {pk: pk});

            // Remove from state
            const newSchedules = schedules.filter(schedule => schedule.pk !== pk);
            setSchedules(newSchedules);
            hide();
            setScheduleDetails({
                pk: 0,
                monthandyear: '0/0',
                addedDoctors: 0,
                duties: null,
                numberOfDays: 0,
                weekendDays: 0,
                holidays: 0,
                dutyPositions: 0,
                dutiesSet: 0,
                dutiesToBeSet: 0,
                isSet: false,
                dutiesPerDoctor: 0,
                doctorData: null
            });
        } catch (error) {
            console.log(error);
            setAlertData({
                show: true,
                message: 'Nie udało się usunąć grafiku z bazy danych.',
                header: null
            });
        }
    }

    const closeAlert = () => {
        setAlertData((prevState) => ({
            ...prevState,
            show: false
        }));
    }

    const showSpinner = (...content) => {
        setSpinnerData({
            show: true,
            content: content
        });
    }

    const hideSpinner = () => {
        setSpinnerData({
            show: false,
            content: []
        })
    }

    const table = (
        schedules
        .sort((sA, sB) => {
            const monthA = sA.month;
            const yearA = sA.year;
            const monthB = sB.month;
            const yearB = sB.year;
            if (yearA !== yearB) {
                return (yearA - yearB);
            } else {
                return (monthA - monthB);
            }
        })
        .map(item => {
            const month = item.month;
            const year = item.year;
            return (
                <ScheduleTile 
                    key={item.pk} 
                    onClick={async (e) => await getDetails(e)} 
                    variant={"normal"}
                >{month + '/' + year}</ScheduleTile>
            );
        })
        .reverse()
    );
    table.unshift(
        <ScheduleTile 
            key={0} 
            variant={"add"}
            onClick={() => setShow('newSchedule')}
        >
            +
        </ScheduleTile>
    );

    const scheduleDetailsView = (
        <React.Fragment>
            <h5>Grafik na { scheduleDetails.monthandyear }</h5>
            <hr className="mt-0 mb-4 hr-bold" />
            <p className="mb-4">Grafik <b>{ scheduleDetails.isSet ? 'jest' : 'nie jest' }</b> ułożony.</p>
            <h6><strong>Statystyki</strong></h6>
            <hr className="m-1" />
            <table className="left-col-detail-table">
                <tbody>
                    <tr>
                        <td>Liczba dni</td>
                        <td>{ scheduleDetails.numberOfDays }</td>
                    </tr>
                    <tr>
                        <td>Dni pt. - nd.</td>
                        <td>{ scheduleDetails.weekendDays }</td>
                    </tr>
                    <tr>
                        <td>Święta i dł.week.</td>
                        <td>{ scheduleDetails.holidays }</td>
                    </tr>
                    <tr>
                        <td>Dodani lekarze</td>
                        <td>{ scheduleDetails.addedDoctors }</td>
                    </tr>
                    <tr>
                        <td>Dyżury na lekarza</td>
                        <td>{ scheduleDetails.dutiesPerDoctor }</td>
                    </tr>
                    <tr>
                        <td>Lekarzy na dyżur</td>
                        <td>{ scheduleDetails.dutyPositions }</td>
                    </tr>
                    <tr>
                        <td>Dyżury łącznie</td>
                        <td>{ scheduleDetails.dutiesToBeSet }</td>
                    </tr>
                    <tr>
                        <td>Dyżury obsadzone</td>
                        <td>{ scheduleDetails.dutiesSet }</td>
                    </tr>
                    <tr>
                        <td>Dyżury nieobsadzone</td>
                        <td>{ scheduleDetails.dutiesToBeSet - scheduleDetails.dutiesSet }</td>
                    </tr>
                </tbody>
            </table>
            <hr className="mb-4" />
            <div className="d-flex justify-content-between">
                <button 
                    onClick={() => {
                        const url = (`/duties/${scheduleDetails.monthandyear.split('/')[1]}` +
                            `/${scheduleDetails.monthandyear.split('/')[0]}/`);
                        navigate(url)}} 
                    className="btn btn-primary mb-3 w-45"
                >
                    Otwórz
                </button>
                <button 
                    onClick={removeSchedule} 
                    className="btn btn-light border mb-3 w-45"
                >
                    Usuń
                </button>
            </div>
        </React.Fragment>
    );

    const currYear = new Date().getFullYear();
    const currMonth = new Date().getMonth() + 1;
    const newScheduleView = (
        <Form onSubmit={handleSubmit} >
            <h4 className="mb-4">Dodaj grafik</h4>
            <Form.Group className="mb-4">
                <Form.Select name="year" value={newSchedule.year} onChange={handleChange}>
                    <option disabled value={0}>Wybierz rok</option>
                    {
                        range(currYear,2033).map((year, i) => {
                            return <option key={`year-${i}`} value={year}>{year}</option>;
                        })
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Select name="month" value={newSchedule.month} onChange={handleChange} disabled={newSchedule.year === 0}>
                    <option disabled value={0}>Wybierz miesiąc</option>
                    {
                        newSchedule.year !== 0 &&
                        range(1,13).filter(month => {
                            if (newSchedule.year === currYear) {
                                return month >= currMonth;
                            }
                            return true;
                        }).map((month, i) => {
                            const disabled = schedules.find(s => (s.year === newSchedule.year && s.month === month));
                            return <option key={`month-${i}`} value={month} disabled={disabled}>{month}. {months[month]} {disabled ? '(istnieje)' : ''}</option>;
                        })
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control type="submit" value="Dodaj" className="btn btn-primary" />
            </Form.Group>
        </Form>
    );

    const rightCol = (
        <div className="tile-table-flex tile-table">
            {table}
        </div>
    );

    const leftCol = (
            <div className="d-flex justify-content-center">
                <div className="m-5 w-100">
                    {
                        show === 'scheduleDetails' && scheduleDetailsView
                    }
                    {
                        show === 'newSchedule' && newScheduleView
                    }
                    {
                        !show &&
                        <h5>Wybierz grafik by wyświetlić szczegóły</h5>
                    }
                </div>
                {
                    alertData.show &&
                    <Alert 
                        header={alertData.header}
                        variant="warning"
                        dismiss={closeAlert}
                        clickToClose
                    >
                        {alertData.message}
                    </Alert>
                }
            <OverlaySpinner show={spinnerData.show} messages={spinnerData.content} />
        </div>
    );

    return <ColumnLayout 
        leftCol={leftCol} 
        rightCol={rightCol} 
        logoPrimary={unit.name} 
        logoSecondary={"Grafiki dyżurów"}
        showLeftCol={show}
        setShowLeftCol={setShow}
    />
}