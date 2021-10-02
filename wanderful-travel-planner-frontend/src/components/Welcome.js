import React from 'react';
import Card from 'react-bootstrap/Card';

const Welcome = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>WELCOME</Card.Title>
                <Card.Link href="/signup">Signup</Card.Link>
                <Card.Link href="/login">Login</Card.Link>
            </Card.Body>
        </Card>
    )


}

export default Welcome