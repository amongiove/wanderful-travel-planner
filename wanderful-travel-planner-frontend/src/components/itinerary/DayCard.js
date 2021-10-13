import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const DayCard = ({day, dayNum, trip}) => {

    return (
        // TODO: are we adding images? make card clickable or remove hover css
        <Col>
            <Card className="card" >
                <Card.Body>
                    <Card.Title>{day}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Day {dayNum}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    )
}



export default DayCard;


