import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ColumnLayout from './ColumnLayout';
import DoctorTile from './DoctorTile';
import Alert from './Alert';
import DoctorDataForm from './DoctorDataForm';
import axiosInstance from '../axiosApi';
import { DefaultDict } from './algorithm/utils';

export default function Doctors() {
    const [unit, doctorsData] = useLoaderData();
    const [doctors, setDoctors] = useState([]);
    const [doctorDetail, setDoctorDetail] = useState({
        pk: null,
        name: '',
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
        avgWeekendDays: 0
    });
    const [doctorDetails, setDoctorDetails] = useState([]);
    const [show, setShow] = useState('');
    const [alertData, setAlertData] = useState({
        show: false,
        message: '',
        header: ''
    });

    useEffect(() => {
        const d = doctorsData;
        setDoctors(d);
    },  []);

    const hide = () => {
        setShow('');
    }

    const showDoctor = async (doctor) => {
        // Check if data has been already downloaded.
        const detail = doctorDetails.find(d => d.pk === doctor.pk);
        if (detail) {
            setDoctorDetail(detail);
            setShow('doctorDetail');
            return;
        }

        // Get doctor duties to compute statistics.
        try {
            const url = `/unit/${unit.pk}/doctors/${doctor.pk}/duties/`;
            const response = await axiosInstance.get(url);
            const duties = response.data;

            let schedules = new DefaultDict(Array);
            for (const duty of duties) {
                schedules[duty.monthly_duties].push(duty)
            }
            schedules = Object.values(schedules);

            const avg = {
                duties: 0,
                strain: 0,
                mon: 0,
                tue: 0,
                wed: 0,
                thu: 0,
                fri: 0,
                sat: 0,
                sun: 0,
                weekends: 0,
                weekendDays: 0
            };

            const schedulesCount = schedules.length;

            if (schedulesCount) {
                avg.duties = (schedules.flat().length / schedulesCount).toFixed(1);
                avg.strain = (
                    schedules
                    .flat()
                    .reduce((prevVal, currVal) => prevVal + currVal.strain_points, 0)
                    / schedulesCount
                ).toFixed(1);

                schedules.forEach(schedule => {
                    schedule.forEach(duty => {
                        switch (duty.weekday) {
                            case 0:
                                avg.mon++;
                                break;
                            case 1:
                                avg.tue++;
                                break;
                            case 2:
                                avg.wed++;
                                break;
                            case 3:
                                avg.thu++;
                                break;
                            case 4:
                                avg.fri++;
                                avg.weekendDays++;
                                break;
                            case 5:
                                avg.sat++;
                                avg.weekendDays++;
                                break;
                            case 6:
                                avg.sun++;
                                avg.weekendDays++;
                                break;
                        }
                    });
                    avg.weekends += new Set(
                        schedule
                        .filter(d => [4,5,6].includes(parseInt(d.weekday)))
                        .map(d => parseInt(d.week))
                    ).size;
                })

                Object.entries(avg).forEach(([k, v]) => {
                    if (k === 'strain') {
                        return;
                    }
                    let newVal = '';
                    if (k === 'duties') {
                        newVal = v;
                    } else {
                        newVal = ((v / schedules.length).toFixed(1)).toString();
                    }
                    newVal = (
                        <span>
                            { newVal.slice(0,-1) }<span className="fs-7">{ newVal.slice(-1,newVal.length) }</span>
                        </span>
                    );
                    avg[k] = newVal;
                });
            }

            const stats = {
                pk: doctor.pk,
                name: doctor.name,
                schedulesCount: schedulesCount,
                avgDuties: avg.duties,
                avgStrain: avg.strain,
                avgMon: avg.mon,
                avgTue: avg.tue,
                avgWed: avg.wed,
                avgThu: avg.thu,
                avgFri: avg.fri,
                avgSat: avg.sat,
                avgSun: avg.sun,
                avgWeekends: avg.weekends,
                avgWeekendDays: avg.weekendDays
            }

            setDoctorDetail(stats);
            setDoctorDetails([...doctorDetails, stats]);

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
            // Show basic doctor data.
            setDoctorDetail((prevState) => ({
                ...prevState,
                pk: doctor.pk,
                name: doctor.name
            }));
        }

        setShow('doctorDetail');
    }

    const removeDoctor = () => {
        const message = (
            <div>
                <p>Próbujesz <strong>usunąć lekarza { doctorDetail.name }</strong>.<br />
                Spowoduje to <strong>usunięcie wszystkich dyżurów i ustawień</strong> 
                tego lekarza z wszystkich grafików, także już ułożonych.<br />
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
            header: "Usuwasz lekarza!"
        });
    }

    const _remove = async () => {
        const pk = doctorDetail.pk;

        try {
            // Remove doctor from database.
            const url = `/unit/${unit.pk}/doctors/${pk}/`;
            await axiosInstance.delete(url, {pk: pk});

            // Remove from state
            const newDoctors = doctors.filter(doctor => doctor.pk !== pk);
            setDoctors(newDoctors);
            hide();
            setDoctorDetail(null);
        } catch (error) {
            console.log(error);
            setAlertData({
                show: true,
                message: 'Nie udało się usunąć lekarza z bazy danych.',
                header: 'Błąd!'
            });
        }
    }

    const editDoctor = async (name) => {
        try {
            const pk = doctorDetail.pk;
            const url = `/unit/${unit.pk}/doctors/${pk}/`;
            await axiosInstance.patch(url, {
                name: name
            })
            doctors.find(d => d.pk === pk).name = name;
            setDoctorDetail((prevState) => ({
                ...prevState,
                name: name
            }));
            setShow('doctorDetail');
        } catch (error) {
            console.log(error);
            setAlertData({
                show: true,
                message: ("Modyfikacja lekarza nie powiodła się. " +
                    "Baza danych nie została zaktualizowana."),
                header: 'Błąd!'
            });
        }
    }

    const createDoctor = async (name) => {
        try {
            // Create doctor instance in database.
            const url = `/unit/${unit.pk}/doctors/`;
            const response = await axiosInstance.post(url, {
                name: name
            });
            const doctor = response.data;

            // Add doctor to state.
            const newDoctors = [...doctors, doctor];
            setDoctors(newDoctors);
            setDoctorDetail(doctor);
            setShow('doctorDetail');

        } catch (error) {
            console.log(error);
            setAlertData({
                show: true,
                message: ("Nie udało się stworzyć lekarza. " +
                    "Baza danych nie została zaktualizowana."),
                header: 'Błąd!'
            });
        }
    }

    const closeAlert = () => {
        setAlertData((prevState) => ({
            ...prevState,
            show: false
        }));
    }

    const table = (
        doctors
        .sort((dA, dB) => {
            const nameA = dA.name;
            const nameB = dB.name;
            if (nameA > nameB) {
                return 1;
            } else if (nameB > nameA) {
                return -1;
            }
        })
        .map(doc => 
            (
                <DoctorTile 
                    key={doc.pk}
                    onClick={() => showDoctor(doc)} 
                    variant={"normal"}
                >
                    {doc.name}
                </DoctorTile>
            )
        )
    );
    table.unshift(
        <DoctorTile 
            key={0} 
            variant={"add"}
            onClick={() => {
                setShow('newDoctor');
            }}
        >
            +
        </DoctorTile>
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
                    !show &&
                    <h5>Wybierz lekarza, by wyświetlić szczegóły</h5>
                }
                {
                    show === 'doctorDetail' &&
                    <React.Fragment>
                        <h4 className="mb-4"><i className="bi bi-person-circle"></i> { doctorDetail.name }</h4>
                        <h6><strong>Statystyki</strong></h6>
                        <hr className="m-1" />
                        <table className="left-col-detail-table">
                            <tbody>
                                <tr>
                                    <td>Obsadza miesięcy</td>
                                    <td>{ doctorDetail.schedulesCount }</td>
                                </tr>
                                <tr>
                                    <td><strong>Średnio miesięcznie:</strong></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Liczba dyżurów</td>
                                    <td>{ doctorDetail.avgDuties }</td>
                                </tr>
                                <tr>
                                    <td>Poniedziałki</td>
                                    <td>{ doctorDetail.avgMon }</td>
                                </tr>
                                <tr>
                                    <td>Wtorki</td>
                                    <td>{ doctorDetail.avgTue }</td>
                                </tr>
                                <tr>
                                    <td>Środy</td>
                                    <td>{ doctorDetail.avgWed }</td>
                                </tr>
                                <tr>
                                    <td>Czwartki</td>
                                    <td>{ doctorDetail.avgThu }</td>
                                </tr>
                                <tr>
                                    <td>Piątki</td>
                                    <td>{ doctorDetail.avgFri }</td>
                                </tr>
                                <tr>
                                    <td>Soboty</td>
                                    <td>{ doctorDetail.avgSat }</td>
                                </tr>
                                <tr>
                                    <td>Niedziele</td>
                                    <td>{ doctorDetail.avgSun }</td>
                                </tr>
                                <tr>
                                    <td>Dni weekendowe</td>
                                    <td>{ doctorDetail.avgWeekendDays }</td>
                                </tr>
                                <tr>
                                    <td>Weekendy na dyżurze</td>
                                    <td>{ doctorDetail.avgWeekends }</td>
                                </tr>
                                <tr>
                                    <td>Obciążenie (pkt.)</td>
                                    <td>{ doctorDetail.avgStrain }</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-between mt-4">
                            <button 
                                onClick={() => setShow('editDoctor')} 
                                className="btn btn-primary mb-3 w-45"
                            >
                                Edytuj
                            </button>
                            <button 
                                onClick={removeDoctor}
                                className="btn btn-light border mb-3 w-45"
                            >
                                Usuń
                            </button>
                        </div>
                    </React.Fragment>
                }
                {
                    show === 'newDoctor' &&
                    <div className="d-flex flex-column mt-4">
                        <h5>Nowy lekarz</h5>
                        <DoctorDataForm 
                            handleData={createDoctor}
                        />
                    </div>
                }
                {
                    show === 'editDoctor' &&
                    <div className="d-flex flex-column mt-4">
                        <h4 className="mb-4"><i className="bi bi-person-circle"></i> { doctorDetail.name }</h4>
                        <h5>Nowe dane</h5>
                        <DoctorDataForm 
                            handleData={editDoctor}
                        />
                    </div>
                }
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

    return <ColumnLayout 
        leftCol={leftCol} 
        rightCol={rightCol} 
        logoPrimary={unit.name} 
        logoSecondary={"Lekarze"}
        showLeftCol={show}
        setShowLeftCol={setShow}
    />
}