import React, { useState }from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosApi';
import refreshTokenNotExpired from './refreshTokenNotExpired';
import Contact from './Contact';

export default function SlideMenu(props) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow(!show);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/logout/', {
                refresh_token: localStorage.getItem('refresh_token')
            });
            if (response.status === 205) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                axiosInstance.defaults.headers['Authorization'] = null;
                navigate('/login/');
            }
        } catch (error) {
            console.log(error)
        }
        handleClose();
    }

    const openWindow = (e, name) => {
        e.preventDefault();
        handleClose();
        props.openWindow(name);
    }

    return (
        <>
            <div className='menu-trigger' onClick={toggleShow}>☰</div>
            <Offcanvas show={show} onHide={handleClose} className="sliding-menu">
                <Offcanvas.Header>
                    <Offcanvas.Title>Dyżury Medyczne</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li>
                            <Link to="/" onClick={handleClose}>STRONA GŁÓWNA</Link>
                        </li>
                        {
                            refreshTokenNotExpired() ?
                            <React.Fragment>
                                <li>
                                    <Link to="/doctors/" onClick={handleClose}>LEKARZE</Link>
                                </li>
                                <li>
                                    <Link to="/duties/" onClick={handleClose}>DYŻURY</Link>
                                </li>
                                <li>
                                    <Link to="/statistics/" onClick={handleClose}>STATYSTYKI</Link>
                                </li>
                                <li>
                                    <a href="/" onClick={(e) => openWindow(e, 'Help')}>WSKAZÓWKI</a>
                                </li>
                                <li>
                                    <a href="/" onClick={handleLogout} className="highlight-link">WYLOGUJ <i className="bi bi-power"></i></a>
                                </li>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <li>
                                    <Link to="/register/" onClick={handleClose}>REJESTRACJA</Link>
                                </li>
                                <li>
                                    <Link to="/login/" onClick={handleClose}>LOGOWANIE <i className="bi bi-power"></i></Link>
                                </li>
                            </React.Fragment>
                        }
                        <li>
                            <Contact />
                        </li>
                    </ul>
                    <div className="copyright">© Marcin Bogdanowicz 2023</div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}