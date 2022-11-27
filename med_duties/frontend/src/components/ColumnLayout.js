import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './Logo';


export default function ColumnLayout(props) {
    return (
        <Container fluid className="px-0 mx-0">
            <Row className="g-0">
                <Col xs={3} className="border-end">
                    <Logo primary={props.logoPrimary} secondary={props.logoSecondary} />
                    <div className="left-col">
                        {props.leftCol}
                    </div>
                </Col>
                <Col xs={9} className="right-col">
                    {props.rightCol}
                </Col>
            </Row>
        </Container>
    );
}