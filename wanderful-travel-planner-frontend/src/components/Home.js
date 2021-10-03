import React from 'react';
import Container from 'react-bootstrap/Container'
import Trips from './Trips';

const Home = () => {
    return ( 
       <Container className="home">
           <Trips />
       </Container>
    )
}

export default Home