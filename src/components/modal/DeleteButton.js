import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const DeleteButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} className="btn-danger col-3">
                Delete
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} className="text-black" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this data?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose} className="col-3">
                        Yes
                    </Button>
                    <Button variant="danger" onClick={handleClose} className="col-3">
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteButton