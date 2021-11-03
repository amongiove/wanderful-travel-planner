import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';
import EventShow from './EventShow.js';
import { deleteEvent } from '../../actions/events.js';
import { connect } from 'react-redux';
import titleize from 'titleize';

const Events = ({event, deleteEvent}) => {

    return (
        <ListGroup.Item> 
            <Row>
                <Col md="3">
                    {/* todo: set timezone  */}
                    {moment(event.attributes.event_date_time).format("h:mm A")}
                </Col>
                <Col md="8">
                    {titleize(event.attributes.event_name)} 
                </Col>
                <Col>
                    <EventShow event={event} onDelete={deleteEvent} />
                </Col>
            </Row>
        </ListGroup.Item>      
    )

}

const mapDispatchToProps = dispatch => {
    return {
        deleteEvent: eventId => dispatch(deleteEvent(eventId))
    }
}

export default connect(null, mapDispatchToProps)(Events);

