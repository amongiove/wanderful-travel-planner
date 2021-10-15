import React, {useState} from 'react';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GrMore, GrSchedule, GrLocation, GrNotes, GrEdit, GrTrash } from 'react-icons/gr';


const EventShow = ({event}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
    <>
        <GrMore onClick={handleShow} />
            {/* TODO: fix how this looks */}


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{event.event_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <GrSchedule />  {moment(event.event_date_time).format("h:mm A")}
                <br/>
                <br/>
                <GrLocation/>  {event.location}
                <br/>
                <br/>
                {/* todo: add notes icon here */}
                {event.notes ? `Notes: ${event.notes}` : null } 
        </Modal.Body>
        <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
            Close
            </Button> */}
            <Button variant="primary" onClick={handleClose}>
            Edit Button <GrEdit />
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Delete Button <GrTrash />
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
}


export default EventShow