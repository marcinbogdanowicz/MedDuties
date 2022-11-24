import React from 'react';


export default function Logo(props) {
    return (
        <div className="logo-size">
            <div className="position-fixed top-0 start-0 logo logo-size d-flex flex-column align-items-center justify-content-center bg-danger text-white">
                <h1>Dyżury Medyczne</h1>
                <h2>{props.children}</h2>
            </div>
        </div>
    );
}