import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './Logo';


export default function ColumnLayout(props) {
    const alwaysShowLeftCol = Boolean(props.alwaysShowLeftCol);
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const showLeftCol = props.showLeftCol;
    const setShowLeftCol = props.setShowLeftCol;

    const [showLeft, setShowLeft] = useState(false);

    useEffect(() => {
        setShowLeft(Boolean(showLeftCol));
    }, [showLeftCol])

    const hideLeftCol = () => {
        setShowLeftCol('');
    }

    return (
        <Container fluid className="px-0 mx-0">
            <Row className="g-0" style={{width: "100vw"}}>
                <Col md={3} className="border-end">
                    <Logo primary={props.logoPrimary} secondary={props.logoSecondary} />
                    {
                        (mobile && alwaysShowLeftCol) &&
                        <div className="col-toggle link" onClick={() => setShowLeft(!showLeft)}>
                            { 
                                showLeft ? 
                                <i className="bi bi-gear-fill"></i> :
                                <i className="bi bi-gear"></i>
                            }
                        </div>
                    }
                    <div className={"left-col " + ((!mobile || showLeft) ? "" : "d-none")}>
                        {
                            (mobile && !alwaysShowLeftCol) &&
                            <div>
                                <i className="bi bi-x-lg link close-sign" onClick={hideLeftCol}></i>
                            </div>
                        }
                        {props.leftCol}
                    </div>
                </Col>
                <Col md={9} className={"right-col " + ((!mobile || !showLeft) ? "" : "d-none")}>
                    {props.rightCol}
                </Col>
            </Row>
        </Container>
    );
}