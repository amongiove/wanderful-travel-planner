import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Styles = styled.div`
    .welcome {
        padding: '10px'
    }
`

const Welcome = () => {
    return (
        <Styles>
            <Card className="welcome">
                <Card.Body>
                    <Card.Title>WELCOME</Card.Title>
                    <Card.Link href="/signup">Signup</Card.Link>
                    <Card.Link href="/login">Login</Card.Link>
                </Card.Body>
            </Card>
        </Styles>
    )


}

export default Welcome