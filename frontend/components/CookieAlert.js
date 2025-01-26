import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CookieAlert() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <div className="cookie-alert position-absolute start-50 translate-middle-x">
                <Row>
                    <Col md={9}>
                        <h5>Pliki Cookie</h5>
                        <p>
                            Serwis wykorzystuje ciasteczka (pliki cookie) do prawidłowego działania.
                            Korzystając z serwisu, wyrażasz zgodę na wykorzystywanie ciasteczek
                            i przechowywanie ich na Twoim komputerze.
                        </p>
                    </Col>
                    <Col md={3} className="d-flex align-items-center">
                        <button className="btn btn-success btn-sm" onClick={() => setShow(false)}>Akceptuję</button>
                    </Col>
                </Row>
            </div>
        );
    }

}