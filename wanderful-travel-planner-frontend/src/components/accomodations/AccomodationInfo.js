import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';
import { GrTrash } from 'react-icons/gr';
import styled from 'styled-components';
import EditAccomodationForm from './EditAccomodationForm.js';

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

const AccomodationInfo = ({accomodation, trip, onDelete, onEdit}) => {

    const handleDelete = async (event) => {
        event.preventDefault();
        const result = await onDelete(accomodation.id);
        if (result && !result.error) {
            return alert('Accomodation Deleted')
            // TODO: reload page without switching tab??? 
        }
    }

    return (
        <Styles>
            <ListGroup.Item> 
                <Row>
                    <Col className="location" md={3}>
                        {accomodation.attributes.location}
                    </Col>
                    <Col className="checkin" md={4}>
                        Check in: {moment(accomodation.attributes.start_date_time).format("MMM Do, YYYY h:mm A")}  
                    </Col>
                    <Col className="checkout" md={3}>
                        Check out: {moment(accomodation.attributes.end_date_time).format("MMM Do, YYYY h:mm A")}
                    </Col>
                    <Col md={2}>
                        <Button onClick={(event) => (window.confirm('Are you sure you want to delete this accomodation?'))?handleDelete(event) : null} variant="outline-secondary" size="sm" className="delete">
                            <GrTrash />
                        </Button>
                        <EditAccomodationForm accomodation={accomodation} currentTrip={trip} onSubmit={onEdit}/>
                        {/* <Button variant="outline-secondary" size="sm"className="edit">
                            <GrEdit/>
                        </Button> */}
                    </Col>
                </Row>
            </ListGroup.Item>
        </Styles>  
    )
}

export default AccomodationInfo