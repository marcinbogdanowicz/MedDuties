import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function OverlaySpinner(props) {
    const show = props.show;

    if (show) {
        return (
            <div className="overlay">
                <Spinner animation="border" variant="light"/>
            </div>
        );
    }    
}