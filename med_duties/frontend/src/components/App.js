import React from 'react';
import { Outlet } from 'react-router-dom';
import SlideMenu from './SlideMenu';


export default function App() {
   
        return (
                <div>
                        <SlideMenu />
                        <Outlet />
                </div>
        );

}
