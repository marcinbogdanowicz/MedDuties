import React from 'react';


export default function Logo(props) {
    return (
        <div className="logo">
            {
                props.primary &&
                <h1>{props.primary}</h1>
            }
            {
                props.secondary &&
                <h2 className="fs-3">{props.secondary}</h2>
            }
        </div>
    );
}
