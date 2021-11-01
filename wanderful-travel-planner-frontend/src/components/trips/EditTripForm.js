import React, {useState} from 'react';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Styles = styled.div`
  .image {
    color: transparent;
  }

  #preview {
    height: 100px;
    width: 100px;
  }
`;

const EditTripForm = ({trip, onEditSubmit}) => {
    
    const reload=()=>window.location.reload();
    const [show, setShow] = useState(false);
    
    const handleClose = () => {
        setShow(false)
        reload();
    };
    const handleShow = () => setShow(true);

    // const id = trip.id
    const [name, setName] = useState(trip.attributes.name);
    const [location, setLocation] = useState(trip.attributes.location);
    const [start_date, setStartDate] = useState(trip.attributes.start_date);
    const [end_date, setEndDate] = useState(trip.attributes.end_date);
    const [image, setImage] = useState(null)
    //need to figure out how to get actual image file here if trip has an image already 

    // let updatedTrip = {id: id, name: name, location: location, start_date: start_date, end_date: end_date};

    const handleSubmitEditTrip = async (event) => {
      event.preventDefault();
        const id = trip.id
        const formData = new FormData()
            // formData.append('id', id)
            formData.append('name', name);
            formData.append('location', location);
            formData.append('start_date', start_date);
            formData.append('end_date', end_date);
            formData.append('image', image);

        const result = await onEditSubmit(formData, id);
        if (result && !result.error) {
            handleClose();
            return window.location.reload();
        }
    }

    const preview = () => {
        let url = URL.createObjectURL(image)
        return url
    }

    return (
        <>
            <Button variant="outline-secondary" onClick={handleShow}>
                Edit Trip
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Edit Trip</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Form.Row} className="justify-content-center">
                            <Form.Label column sm="2">Name</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    defaultValue={trip.attributes.name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Form.Row} className="justify-content-center">
                            <Form.Label column sm="2">Location</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    name="location"
                                    defaultValue={trip.attributes.location}
                                    onChange={e => setLocation(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Form.Row} className="justify-content-center">
                            <Form.Label column sm="2">Start Date</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="date"
                                    name="start_date"
                                    defaultValue={trip.attributes.start_date}
                                    min={moment().format("YYYY-MM-DD")}
                                    onChange={e => setStartDate(e.target.value)}
                                />
                            </Col>

                            <Form.Label column sm="2">End Date</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="date"
                                    name="end_date"
                                    defaultValue={trip.attributes.end_date}
                                    min={start_date? start_date : moment().format("YYYY-MM-DD") }
                                    onChange={e => setEndDate(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Styles>
                                <Form.Label column sm="2">
                                Image
                                </Form.Label>
                                <Form.Control
                                className="image"
                                type="file"
                                accept="image/*"
                                multiple={false}
                                onChange={event => setImage(event.target.files[0])}
                                />
                                <br/>
                                {image !== null ? 
                                <><img id="preview" src={preview()}></img><br/></>
                                :
                                null}
                            </Styles>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-secondary" onClick={event => handleSubmitEditTrip(event)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTripForm;