import React from 'react';

export default function DoctorTile(props) {

    let style = "doctor-tile user-select-none ";
    if (props.variant === 'normal') {
        style += 'doctor-tile-normal'
    } else if (props.variant === 'add') {
        style += 'doctor-tile-add'
    }

    return (
        <div 
            className={style}
            onClick={props.onClick}
        >
            <div className='doctor-tile-img d-flex align-items-center justify-content-center'>
                <i className="bi bi-person-circle"></i>
            </div>
            <div className='doctor-tile-name d-flex align-items-center justify-content-center'>
                {props.children}
            </div>            
        </div>
    );
}