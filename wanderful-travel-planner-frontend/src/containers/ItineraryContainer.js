import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import DayCard from '../components/itinerary/DayCard.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewEventForm from '../components/itinerary/NewEventForm.js';

const ItineraryContainer = ({trip, createNewEvent}) => {
    
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
        <div >
            <Row> 
                <Col md={{span:9, offset: 1}}>
                    <h2>Trip Itinerary</h2>
                </Col>
                <Col>
                    <NewEventForm onSubmit={createNewEvent} />
                </Col>
            </Row>
            
            <Col md={{ span: 10, offset: 1 }}>
                <Row xs={1} className="g-4">
                    {dayCards}
                </Row>
            </Col>
        </div>
);
};

export default ItineraryContainer;
