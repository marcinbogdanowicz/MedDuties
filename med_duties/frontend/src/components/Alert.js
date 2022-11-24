import React, { useState, useEffect } from 'react';
import BootstrapAlert from 'react-bootstrap/Alert';

export default function Alert(props) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setShow(true);
    }, [props.children]);

    if (show) {
        return (
            <BootstrapAlert className="position-absolute top-0 start-50 translate-middle-x w-50 mt-3"
                key={'info'} variant={'info'} onClose={() => setShow(false)} dismissible>
                <BootstrapAlert.Heading>{props.header ? props.header : 'Uwaga!'}</BootstrapAlert.Heading>
                {props.children}
            </BootstrapAlert>
        );
    } else {
        return (
            <BootstrapAlert className="position-absolute top-0 end-0 mt-3 w-auto"
                key={'info'} variant={'info'} onClick={() => setShow(true)}>
                Rozwiń
            </BootstrapAlert>
        );
    }
}