import React from 'react';
import Container from 'react-bootstrap/Container'
import TripsContainer from '../containers/TripsContainer.js';

const Home = () => {
    return ( 
       <Container className="home">
           <TripsContainer />
       </Container>
    )
}

export default Home