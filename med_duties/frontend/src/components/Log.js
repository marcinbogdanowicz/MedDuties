import React from 'react';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';

export default function Log(props) {
    const log = props.log;

    return (
        <Row className={"log border-top" + (props.hide ? " hide" : "")}>
            <h5>
                {
                    log ? 
                    log.heading : 
                    'Log'
                }
            </h5>
            <CloseButton onClick={props.toggleLog} className="position-absolute top-0 end-0 mt-3 me-3" />
            <div className="log-content border">
                <ul>
                    {
                        log ?
                        log.items :
                        ('Tu pojawią się informacje o błędach lub zmianach ' +
                        'w ustawieniach lekarzy wprowdzonych przez algorytm.')
                    }
                </ul>
            </div>
        </Row>
    );
}