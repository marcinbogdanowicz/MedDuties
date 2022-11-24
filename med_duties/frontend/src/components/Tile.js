import React from 'react';

export default function Tile(props) {
    return (
        <div className={"tile d-flex align-items-center justify-content-center border border-1 border-light " + props.addedClass}
            onMouseOver={e => e.target.style="opacity: 0.8"} onMouseOut={e => e.target.style="opacity: 1"}
            onClick={props.onClick}>
            {props.children}
        </div>
    );
}