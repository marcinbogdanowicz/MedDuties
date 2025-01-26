import React from 'react';

export default function ScheduleTile(props) {

    let style = "schedule-tile d-flex align-items-center justify-content-center border border-1 user-select-none ";
    if (props.variant === 'normal') {
        style += 'schedule-tile-normal'
    } else if (props.variant === 'add') {
        style += 'schedule-tile-add'
    }

    return (
        <div className={style}
            onClick={props.onClick}>
            {props.children}
        </div>
    );
}