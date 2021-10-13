import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import DayCard from '../components/itinerary/DayCard.js';
// import styled from "styled-components";

const ItineraryContainer = ({trip}) => {
    
    const start_date = trip.attributes.start_date
    const end_date = trip.attributes.end_date
    const moment = extendMoment(Moment);
    const range = moment.range(start_date, end_date);

    for (let month of range.by('day')) {
        month.format('YYYY-MM-DD');
    }

    const daysArray = Array.from(range.by('day'));      
    const dayCards = daysArray.map(day => <DayCard trip={trip} day={day.format('MM-DD-YYYY')} key={day} id={day} />) 


    return ( 
        <div>
            itinerary component 
            {dayCards}
        </div>
    );
};


export default ItineraryContainer;