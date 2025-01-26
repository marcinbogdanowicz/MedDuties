import React, { useState, useRef } from 'react';
import WithTooltip from './WithTooltip'

export default function Contact() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const a = 'marcin.bogdanowicz@wp.eu';

    const toggleShow = (e) => {
        doNothing(e);
        setShow(!show);
    }

    const doNothing = (e) => e.preventDefault();

    const copy = (e) => {
        navigator.clipboard.writeText(a);
        e.target.className = 'bi bi-clipboard-check link fs-5';
        setMessage('Skopiowano do schowka.');
        setTimeout(() => setMessage(''), 1500);
    }

    if (show) {
        return (
            <div>
                <p className="vegetables">
                    <span className="tomato">marcin.</span><span className="leek">jacek.</span><span className="lettuce">karolewicz@</span><span className="salad">bogdanowicz@</span><span className="carrot">marek.</span><span className="potato">dyzurymedyczne</span><span className="broccoli">vp.</span><span className="cauliflower">rs.</span><span className="cucumber">wp.</span><span className="celery">pl</span><span className="salad">eu</span> <WithTooltip message="Kopiuj"><i className="bi bi-clipboard link fs-5" onClick={copy}></i></WithTooltip>
                    {
                        message &&
                        <small>{ message }</small>
                    }
                </p>
            </div>
        )
    } else {
        return <a href="" onClick={toggleShow}>KONTAKT</a>;
    }
}