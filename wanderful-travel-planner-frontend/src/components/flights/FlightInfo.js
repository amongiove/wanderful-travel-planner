import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';
import { GrFormNextLink, GrTrash, GrEdit } from 'react-icons/gr';
import styled from 'styled-components';

const Styles = styled.div`

    .edit {
        float: right;
        margin-right: 10px;
    }

    .delete {
        float:right;
    }

`;

const FlightInfo = ({flight}) => {

    const handleDelete = (event) => {
        event.preventDefault();
        console.log('handle delete')
    }

    return (
        <Styles>
            <ListGroup.Item> 
                <Row>
                    <Col>
                        {flight.starting_airport} <GrFormNextLink/> {flight.return_airport}
                    </Col>
                    <Col>
                        {flight.airline}
                    </Col>
                    <Col>
                        {moment(flight.date_time).format("MMM Do, YYYY h:mm A")} 
                    </Col>
                    <Col>
                        <Button onClick={(event) => (window.confirm('Are you sure you want to delete this flight?'))?handleDelete(event) : null} variant="outline-secondary" size="sm" className="delete">
                            <GrTrash />
                        </Button>
                        <Button variant="outline-secondary" size="sm"className="edit">
                            <GrEdit/>
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        </Styles>  
    )
}

export default FlightInfo