import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';
import { GrTrash } from 'react-icons/gr';
import styled from 'styled-components';
import EditAccommodationForm from './EditAccommodationForm.js';
import titleize from 'titleize';

const Styles = styled.div`

    .location, .checkin, .checkout {
        text-align: left;
    }

    .edit {
        float: right;
        margin-right: 10px;
    }

    .delete {
        float:right;
    }
`;

const AccommodationInfo = ({accommodation, trip, onDelete, onEdit}) => {

    const handleDelete = async (event) => {
        event.preventDefault();
        const result = await onDelete(accommodation.id);
        if (result && !result.error) {
            alert('Accommodation Deleted')
            return window.location.reload();
        }
    }

    return (
        <Styles>
            <ListGroup.Item> 
                <Row>
                    <Col className="location" md={4}>
                        {titleize(accommodation.attributes.location)}
                    </Col>
                    <Col className="checkin" md={3}>
                        Check in: {moment(accommodation.attributes.start_date_time).format("MM-DD-YYYY h:mm A")}  
                    </Col>
                    <Col className="checkout" md={3}>
                        Check out: {moment(accommodation.attributes.end_date_time).format("MM-DD-YYYY h:mm A")}
                    </Col>
                    <Col md={2}>
                        <Button onClick={(event) => (window.confirm('Are you sure you want to delete this accommodation?'))?handleDelete(event) : null} variant="outline-secondary" size="sm" className="delete">
                            <GrTrash />
                        </Button>
                        <EditAccommodationForm accommodation={accommodation} currentTrip={trip} onSubmit={onEdit}/>
                    </Col>
                </Row>
            </ListGroup.Item>
        </Styles>  
    )
}

export default AccommodationInfo