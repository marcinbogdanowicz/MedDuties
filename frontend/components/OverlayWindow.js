import React from 'react';

export default function OverlayWindow(props) {
    const show = props.show;
    const hide = props.hide;

    if (show) {
        return (
            <div className='overlay'>
                <div className='overlay-window position-relative'>
                    <div className='btn-close link position-absolute top-0 end-0 m-3' onClick={hide}></div>
                    <div className='overlay-window-content'>
                        { props.header && 
                            <div className='overlay-window-header mb-4'>
                                <h1>{ props.header }</h1>
                            </div>
                        }
                        <div className='overlay-window-body'>
                            { props.children }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}