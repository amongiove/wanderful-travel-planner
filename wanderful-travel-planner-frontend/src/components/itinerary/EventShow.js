import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GrMore, GrSchedule, GrLocation, GrNotes, GrEdit, GrTrash } from 'react-icons/gr';


const EventShow = ({event, onDelete}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const { tripId } = useParams();
    const history = useHistory();
    const reload=()=>window.location.reload();

    const handleDelete = async (e) => {
        e.preventDefault();
        const result = await onDelete(event.id);
        if (result && !result.error) {
            handleClose();
            return reload();
        }
    } 
    
    const handleEdit = (e) => {
        console.log('handle edit')
        return history.push(`/trips/${tripId}/itinerary/${event.id}`);
    }

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
                <Button onClick={(e) => handleEdit(e)} variant="outline-secondary" style={{marginLeft: "10px"}}>
                    <GrEdit />
                </Button>
                <Button onClick={(e) => (window.confirm('Are you sure you want to delete this event?'))?handleDelete(e) : null} variant="outline-secondary" style={{marginLeft: "10px"}}>
                    <GrTrash />
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}


export default EventShow