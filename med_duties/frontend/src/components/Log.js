import React from 'react';
import Offcanvas from './Offcanvas';

export default function Log(props) {
    const log = props.log;
    const hide = props.hide;
    const toggle = props.toggle;

    const heading = log ? <h5>{log.heading}</h5> : <h5>Log</h5>;
    const content = (
        <div className="log-content border">
            {
                log.items ? 
                <ul>{log.items}</ul> :
                <ul><li>Tu pojawią się informacje o błędach lub zmianach
                w ustawieniach lekarzy wprowdzonych przez algorytm.</li></ul>
            }
        </div>
    );
    

    return <Offcanvas heading={heading} content={content} hide={hide} toggle={toggle} />;
}