import React, { useEffect, useState, useRef } from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function OverlaySpinner(props) {
    const show = props.show;
    const content = props.content;
    const [message, setMessage] = useState('');
    const timeout = useRef(null);

    useEffect(() => {
        if (show && content && content.length) {
            const messages = getMessage();
            setMessage(messages.next().value);
            timeout.current = setInterval(() => {
                setMessage(messages.next().value);
            }, 6000);
        } else {
            clearInterval(timeout.current);
            setMessage('');
        }
    }, [show])

    function* getMessage() {
        let i = 0;
        while (true) {
            yield content[i % content.length];
            i++;
        }
    }

    if (show) {
        return (
            <div className="overlay">
                <Spinner animation="border" variant="light"/>
                {
                    message &&
                    <div className="overlay-text">
                        { message }
                    </div>
                }

            </div>
        );
    }    
}