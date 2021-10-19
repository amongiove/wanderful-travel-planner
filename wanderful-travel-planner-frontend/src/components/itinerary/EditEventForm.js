import React from 'react';
import { useParams } from 'react-router-dom';

const EditEventForm = () => {
    const {tripId, eventId} = useParams(1)
    console.log(eventId)
    return (
        <h1>EDIT EVENT FORM</h1>
    )
}

export default EditEventForm;