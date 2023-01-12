import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import ColumnLayout from './ColumnLayout';
import Alert from './Alert';
import StatisticsTable from './StatisticsTable';
import axiosInstance from '../axiosApi';
import { DefaultDict } from './algorithm/utils';

export default function Statistics() {
    const [unit, doctorsData] = useLoaderData();
    const [doctors, setDoctors] = useState({});
    const [doctorsToShow, setDoctorsToShow] = useState([]);
    const [alertData, setAlertData] = useState({
        show: false,
        message: '',
        header: ''
    });

    useEffect(() => {
        const newDoctors = {};
        for (const doctor of doctorsData) {
            const data = {
                name: doctor.name,
                pk: doctor.pk,
                schedulesCount: 0,
                avgDuties: 0,
                avgStrain: 0,
                avgMon: 0,
                avgTue: 0,
                avgWed: 0,
                avgThu: 0,
                avgFri: 0,
                avgSat: 0,
                avgSun: 0,
                avgWeekends: 0,
                avgWeekendDays: 0,
                statsLoaded: false
            };
            newDoctors[doctor.pk] = data;
        }
        setDoctors(newDoctors);
    },  []);

    const showDoctor = async (pk, e=null) => {
        let show;
        if (e) {
            show = e.target.checked;
        } else {
            show = true;
        }

        let doctor = doctors[pk];

        if (show) {
            if (!doctor.statsLoaded) {
                doctor = await getDoctorStats(doctor);
            }
            setDoctors((prevState) => ({
                ...prevState,
                [doctor.pk]: doctor
            }));
            setDoctorsToShow([...doctorsToShow, doctor]);
        } else {
            setDoctorsToShow(doctorsToShow.filter(doctor => doctor.pk !== pk));
        }
    }

    const getDoctorStats = async (doc) => {
        let doctor = {...doc}
        try {
            // Get doctor duties to compute statistics.
            const url = `/unit/${unit.pk}/doctors/${doctor.pk}/duties/`;
            const response = await axiosInstance.get(url);
            const duties = response.data;

            let schedules = new DefaultDict(Array);
            for (const duty of duties) {
                schedules[duty.monthly_duties].push(duty)
            }
            schedules = Object.values(schedules);

            doctor.schedulesCount = schedules.length;

            if (doctor.schedulesCount) {
                doctor.avgDuties = (schedules.flat().length / doctor.schedulesCount).toFixed(1);
                doctor.avgStrain = (
                    schedules
                    .flat()
                    .reduce((prevVal, currVal) => prevVal + currVal.strain_points, 0)
                    / doctor.schedulesCount
                ).toFixed(1);

                schedules.forEach(schedule => {
                    schedule.forEach(duty => {
                        switch (duty.weekday) {
                            case 0:
                                doctor.avgMon++;
                                break;
                            case 1:
                                doctor.avgTue++;
                                break;
                            case 2:
                                doctor.avgWed++;
                                break;
                            case 3:
                                doctor.avgThu++;
                                break;
                            case 4:
                                doctor.avgFri++;
                                doctor.avgWeekendDays++;
                                break;
                            case 5:
                                doctor.avgSat++;
                                doctor.avgWeekendDays++;
                                break;
                            case 6:
                                doctor.avgSun++;
                                doctor.avgWeekendDays++;
                                break;
                        }
                    });
                    doctor.avgWeekends += new Set(
                        schedule
                        .filter(d => [4,5,6].includes(parseInt(d.weekday)))
                        .map(d => parseInt(d.week))
                    ).size;
                })

                Object.entries(doctor).forEach(([k, v]) => {
                    if (['name', 'pk', 'schedulesCount', 'avgDuties', 'avgStrain'].includes(k)) {
                        return
                    }
                    let newVal = (v / schedules.length).toFixed(1);
                    doctor[k] = newVal;
                });
            }
        } catch (error) {
            // Show error message.
            const message = <div>
                    Pobieranie statystyk lekarza nie powiodło się.
                </div>;
            setAlertData({
                show: true,
                message: message,
                header: "Błąd pobierania danych"
            });
        }

        return doctor;
    }

    const toggleAll = async () => {
        if (Object.values(doctors).length === doctorsToShow.length) {
            for (let doctor of Object.values(doctors)) {
                const checkbox = document.getElementById(`checkbox-${doctor.pk}`);
                checkbox.checked = false;
            }
            setDoctorsToShow([]);
        } else {
            const newDoctors = {};
            for (let doctor of Object.values(doctors)) {
                const checkbox = document.getElementById(`checkbox-${doctor.pk}`);
                checkbox.checked = true;
    
                if (!doctor.statsLoaded) {
                    doctor = await getDoctorStats(doctor);
                }
                newDoctors[doctor.pk] = doctor;
            }
            setDoctors(newDoctors);
            setDoctorsToShow(Object.values(newDoctors));
        }
    }

    const closeAlert = () => {
        setAlertData((prevState) => ({
            ...prevState,
            show: false
        }));
    }

    const keys = new Map([
        ['name', ''],
        ['schedulesCount', 'M-ce'],
        ['avgDuties', 'Dyżury'],
        ['avgWeekends', 'Weekendy'],
        ['avgWeekendDays', 'Dyż. w week.'],
        ['avgMon', 'Pon'],
        ['avgTue', 'Wto'],
        ['avgWed', 'Śro'],
        ['avgThu', 'Czw'],
        ['avgFri', 'Pią'],
        ['avgSat', 'Sob'],
        ['avgSun', 'Nie'],
    ]);

    const rightCol = (
        <div className="tile-table">
            <div className="">
                <div className="mb-4">
                    <h3><center>Statystyki oddziału</center></h3>
                    <h6><center>(średnio miesięcznie)</center></h6>
                </div>
                <StatisticsTable statistics={doctorsToShow} keys={keys} />
                <p className="fs-7">Kolumny zawierają wartości średnie 
                w ujęciu miesięcznym, za wyjątkiem liczby grafików,
                w których lekarz jest obsadzony.<br/>
                Klikaj na nagłówki kolumn, by sortować dane.</p>
            </div>
        </div>
    );

    const leftCol = (
        <div className="left-col d-flex justify-content-center">
            <div className="m-5 w-100">
                <h5>Wybierz lekarzy</h5>
                <Form className="mb-4">
                    {
                        Object.values(doctors).map(doctor =>
                            <Form.Check
                                type="checkbox"
                                key={`checkbox-${doctor.pk}`}
                                id={`checkbox-${doctor.pk}`}
                                label={doctor.name}
                                onChange={(e) => showDoctor(doctor.pk, e)}
                            />
                        )
                    }
                </Form>
                <button className="btn btn-primary" onClick={toggleAll}>
                    { 
                        (Object.values(doctors).length === doctorsToShow.length ?
                        "Odznacz" : 
                        "Zaznacz") 
                        + " wszystkich" 
                    }
                </button>
                {
                    alertData.show &&
                    <Alert 
                        header={alertData.header}
                        variant="warning"
                        dismiss={closeAlert}
                    >
                        {alertData.message}
                    </Alert>
                }
            </div>
        </div>
    );

    return <ColumnLayout leftCol={leftCol} rightCol={rightCol} logoPrimary={unit.name} logoSecondary={"Statystyki"}/>
}