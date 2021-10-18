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
        {/* TODO: fix close button styling - may need to downgrade to bootstrap 4 */}
        <Modal.Header closeButton>
            <Modal.Title>{event.event_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <GrSchedule /> {moment(event.event_date_time).format("h:mm A")}
                <br/>
                <br/>
                <GrLocation/> {event.location}
                <br/>
                <br/>
                <GrNotes /> {event.notes ? `${event.notes}` : "No notes to share." } 

        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
                <GrEdit />
            </Button>
            <Button variant="outline-secondary" onClick={handleClose}>
                <GrTrash />
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
}


export default EventShow