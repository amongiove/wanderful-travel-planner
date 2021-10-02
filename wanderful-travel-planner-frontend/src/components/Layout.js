import React from 'react';
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    return (
        <div>
            <Container>
                {props.children}
            </Container>
        </div>
    )
}


export default Layout