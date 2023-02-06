import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SlideMenu from './SlideMenu';
import Help from './Help';


export default function App() {
        const [show, setShow] = useState('');
        const hide = () => setShow('');

        return (
                <div>
                        <SlideMenu openWindow={setShow} />
                        <Help hide={hide} show={show === 'Help'} />
                        <Outlet />
                </div>
        );

}
