import React, { useState, useEffect } from 'react';
import BootstrapAlert from 'react-bootstrap/Alert';

export default function Alert(props) {
    const [show, setShow] = useState(true);
    const dismiss = props.dismiss;
    const clickToClose = Boolean(props.clickToClose);
    const variant = props.variant || 'info';
    const header = props.header || 'Uwaga!';

    useEffect(() => {
        setShow(true);
    }, [props.children]);

    const handleClose = () => {
        setShow(false);
        dismiss();
    }

    if (show) {
        if (clickToClose) {
            return (
                <BootstrapAlert className="position-fixed start-50 translate-middle-x border pointer alert-custom"
                    key={'info'} variant={variant} onClick={handleClose} dismissible>
                    <BootstrapAlert.Heading>{header}</BootstrapAlert.Heading>
                    <div className="alert-message">
                        {props.children}
                    </div>
                    <hr />
                    <small>Kliknij, by zamknąć.</small>
                </BootstrapAlert>
            );
        } else {
            return (
                <BootstrapAlert className="position-fixed start-50 translate-middle-x border alert-custom"
                    key={'info'} variant={variant} onClose={handleClose} dismissible>
                    <BootstrapAlert.Heading>{header}</BootstrapAlert.Heading>
                    {props.children}
                    <hr />
                    <small>By zamknąć, kliknij krzyżyk w prawym górnym rogu</small>
                </BootstrapAlert>
            );
        }
    }
}