import React from 'react';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

export default function MenuRow(props) {
    if (props.asLink) {
        return (
            <Row as={Link} to={props.to} className={
                "d-flex flex-grow-1 align-items-center justify-content-center w-100 g-0 p-5 " 
                + props.addedClass}>
            <div className="w-50">
                {props.children}
            </div>
        </Row>
        );

    } else {
        return (
            <Row className={
                    "d-flex flex-grow-1 align-items-center justify-content-center w-100 g-0 p-5 " 
                    + props.addedClass}>
                <div className="w-50">
                    {props.children}
                </div>
            </Row>
        );
    }

}