import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';

export default function Offcanvas(props) {
    const [shrink, setShrink] = useState(true);
    const heading = props.heading;
    const content = props.content;
    const hide = props.hide;
    const toggle = props.toggle;

    return (
        <Row className={"my-offcanvas border-top" + (hide ? " hide" : "") + (shrink ? "" : " expand")}>
            {heading}
            <div className="my-offcanvas-control mt-3 mx-3">
                <div className="my-offcanvas-resize-control" onClick={() => setShrink(!shrink)}>
                    {
                        shrink ?
                        <i className="bi bi-chevron-double-up"></i> :
                        <i className="bi bi-chevron-double-down"></i>
                    }
                </div>
                <CloseButton onClick={toggle} />
            </div>
            {content}
        </Row>
    );
}