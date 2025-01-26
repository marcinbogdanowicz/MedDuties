import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MenuRow from './MenuRow';

export default function Menu() {
    const userIsHeadDoctor = useLoaderData();

    if (!userIsHeadDoctor) {
        return <div>User is not a head doctor!</div>;
    }

    return (
        <>
            <MenuRow asLink to={'/doctors/'} addedClass="main-menu-item">
                <h2>Lekarze</h2>
                <p>Dodawaj i edytuj profile lekarzy</p>
            </MenuRow>
            <MenuRow asLink to={'/duties/'} addedClass="main-menu-item">
                <h2>Dyżury</h2>
                <p>Układaj i przeglądaj grafiki</p>
            </MenuRow>
            <MenuRow asLink to={'/statistics/'} addedClass="main-menu-item">
                <h2>Statystyki</h2>
                <p>Sprawdź statystyki lekarzy i oddziału</p>
            </MenuRow>
        </>
    );
}
