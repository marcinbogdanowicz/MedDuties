import React, { useState, useEffect } from 'react';
import BootstrapAlert from 'react-bootstrap/Alert';

export default function Alert(props) {
    const [show, setShow] = useState(true);
    const dismiss = props.dismiss;

    useEffect(() => {
        setShow(true);
    }, [props.children]);

    const handleClose = () => {
        setShow(false);
        dismiss();
    }

    if (show) {
        return (
            <BootstrapAlert className="position-fixed start-50 translate-middle-x border pointer alert-custom"
                key={'info'} variant={props.variant ? props.variant : 'info'} onClick={handleClose} dismissible>
                <BootstrapAlert.Heading>{props.header ? props.header : 'Uwaga!'}</BootstrapAlert.Heading>
                {props.children}
                <hr />
                <small>Kliknij, by zamknąć.</small>
            </BootstrapAlert>
        );
    }
}