import React from 'react';
import Offcanvas from './Offcanvas';
import StatisticsTable from './StatisticsTable';


export default function DutyStatistics(props) {
    const statistics = props.statistics;
    const hide = props.hide;
    const toggle = props.toggle;

    const keys = new Map([
        ['name', ''],
        ['duties', 'Dyżury'],
        ['holidays', 'Święta'],
        ['weekends', 'Weekendy'],
        ['weekendDays', 'Pią-Nie'],
        ['0', 'Pon'],
        ['1', 'Wto'],
        ['2', 'Śro'],
        ['3', 'Czw'],
        ['4', 'Pią'],
        ['5', 'Sob'],
        ['6', 'Nie'],        
        ['strain', 'Obciążenie']
    ]);

    const heading = <h5>Statystyki</h5>
    const content = statistics ? 
        <StatisticsTable statistics={statistics} keys={keys} /> : 
        'Statystyki';
    

    return <Offcanvas heading={heading} content={content} hide={hide} toggle={toggle} />;
}