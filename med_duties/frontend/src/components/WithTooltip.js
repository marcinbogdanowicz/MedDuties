import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function WithTooltip(props) {
    return (
        <OverlayTrigger
            key='top'
            placement='top'
            delay={props.delay ? props.delay : 50}
            overlay={
                <Tooltip id='tooltip-top'>
                    {props.message}
                </Tooltip>
            }>
            {props.children ? props.children : <i className="bi bi-question-circle m-1 text-primary fs-5"></i>}
        </OverlayTrigger>
    );
}