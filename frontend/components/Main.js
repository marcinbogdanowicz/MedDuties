import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './Logo';

export default function Main() {
    const mobile = window.matchMedia("(max-width: 768px)").matches;

    return (
        <Container fluid className="d-flex align-items-stretch vh-100 px-0">
            {
                mobile ?
                <Logo primary={"Dyżury Medyczne"}/> :
                <Col className="d-flex align-items-stretch w-100">
                    <Row className="d-flex align-items-center w-100 gx-0 p-5 main-logo">
                        <center>
                            <h1>Dyżury Medyczne</h1>
                        </center>
                    </Row>
                </Col>
            }
            <Col className={"d-flex flex-column align-items-stretch w-100 " + (mobile ? "shrink-for-logo" : "")} id="right-col">
                <Outlet />
            </Col>
        </Container>
    );
}
