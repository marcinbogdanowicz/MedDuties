import React, { useState, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import SlideMenu from './SlideMenu';

const Help = lazy(() => import(/* webpackChunkName: 'help' */ './Help'));


export default function App() {
        const [show, setShow] = useState('');
        const hide = () => setShow('');        

        return (
                <div>
                        <SlideMenu openWindow={setShow} /> 
                        {
                                show === 'Help' &&
                                <Help hide={hide} show={true} />
                        }
                        <Outlet />
                </div>
        );

}
