import React from 'react';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';

export default function Offcanvas(props) {
    const heading = props.heading;
    const content = props.content;
    const hide = props.hide;
    const toggle = props.toggle;

    return (
        <Row className={"my-offcanvas border-top" + (hide ? " hide" : "")}>
            {heading}
            <CloseButton onClick={toggle} className="position-absolute top-0 end-0 mt-3 me-3" />
            {content}
        </Row>
    );
}