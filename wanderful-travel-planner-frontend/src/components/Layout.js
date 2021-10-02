import React from 'react';
import Container from 'react-bootstrap/Container';
import NavigationBar from './NavigationBar.js';

const Layout = (props) => {
    return (
        <div>
            {/* TODO: dont want navbar unless logged in */}
            <NavigationBar />
            <Container>
                {props.children}
            </Container>
        </div>
    )
}


export default Layout