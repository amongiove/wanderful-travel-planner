import React from 'react';
import { connect } from 'react-redux';
import { createNewEvent } from '../actions/events.js';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import DayCard from '../components/itinerary/DayCard.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewEventForm from '../components/itinerary/NewEventForm.js';

class ItineraryContainer extends React.Component {
    render () { 
        const { trip } = this.props

        const start_date = trip.attributes.start_date
        const end_date = trip.attributes.end_date
        const moment = extendMoment(Moment);
        const range = moment.range(start_date, end_date);

        for (let month of range.by('day')) {
            month.format('YYYY-MM-DD');
        }

        const daysArray = Array.from(range.by('day'));      
        const dayCards = daysArray.map(day => <DayCard trip={trip} dayNum={daysArray.indexOf(day) +1 } day={day.format('MM-DD-YYYY')} key={day} id={day} />) 


        return ( 
            <div>
                <h2>Trip Itinerary</h2>
                <NewEventForm onSubmit={this.props.createNewEvent} />
                <Col md={{ span: 10, offset: 1 }}>
                    <Row xs={1} className="g-4">
                        {dayCards}
                    </Row>
                </Col>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    createNewEvent: event => dispatch(createNewEvent(event))
    //edit and delete event methods to pass to day card and events and event show?? of pull the closer??
})

export default connect(null, mapDispatchToProps)(ItineraryContainer);