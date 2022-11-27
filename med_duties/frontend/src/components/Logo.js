import React from 'react';


export default function Logo(props) {
    return (
        <div className="logo d-flex flex-column align-items-center justify-content-center text-white">
            <h1>{props.primary}</h1>
            <h2>{props.secondary}</h2>
        </div>
    );
}
