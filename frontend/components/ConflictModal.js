import React from 'react'
import Modal from 'react-bootstrap/Modal';


export default function ConflictModal(props) {
    const data = props.modalData;
    const hideModal = props.hideModal;

    return (
        <Modal 
            show={data.show}
            onHide={hideModal}
            size="lg"
            backdrop="static"
            centered
        >
            <Modal.Header><h3>Konflikt ustawień</h3></Modal.Header>
            <Modal.Body>
                {data.body}
            </Modal.Body>
            <Modal.Footer>
                { 
                    data.btnAVal && 
                    <button 
                        className="btn btn-success"
                        onClick={data.btnAFunc}
                    >
                        {data.btnAVal}
                    </button>
                }
                {
                    data.btnBVal && 
                    <button 
                        className="btn btn-danger"
                        onClick={data.btnBFunc}
                    >
                        {data.btnBVal}
                    </button>
                }
            </Modal.Footer>
        </Modal>
    );
}