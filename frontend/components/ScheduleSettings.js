import React, { useState } from 'react';
import WithTooltip from './WithTooltip';

export default function ScheduleSettings(props) {
    const totalMaxDuties = props.totalMaxDuties;
    const totalDuties = props.totalDuties;
    const normalize = props.normalize;
    const [message, setMessage] = useState('');

    const handleNormalize = () => {
        const [success, message] = normalize();
        if (success) {
            setMessage('Zrobione.');
        } else {
            setMessage(message);
        }
    }

    return (
        <div>
            <h6>Maksymalna liczba dyżurów<WithTooltip message="Lekarze otrzymają dokładnie tyle dyżurów ile zadeklarowali, o ile odpowiada to równo liczbie dyżurów w miesiącu. W przeciwnym razie niektórzy mogą otrzymać mniej dyżurów." /></h6>
            <div className="mb-3">
                <div>
                    Łącznie <strong>{ totalMaxDuties ? totalMaxDuties : '-' } / { totalDuties ? totalDuties : '-' }</strong> do obsadzenia.
                </div>
            </div>
            <WithTooltip message="Program proporcjonalnie zmieni maksymalną liczbę dyżurów wszystkich lekarzy, aby suma odpowiadała liczbie dyżurów w miesiącu.">
                <button className="btn btn-primary" onClick={handleNormalize}>Dopasuj</button>
            </WithTooltip>
            {
                message &&
                <div className="fs-7">{ message }</div>
            }
        </div>
    )
}