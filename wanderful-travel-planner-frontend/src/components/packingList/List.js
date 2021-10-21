import React from 'react';
import ListItem from './ListItem.js';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const Styles = styled.div`
    .list-title {
        text-align: center;
    }

    .list {
        text-align: center;
        margin: 30px;
    }
`;

const List = ({tripItems}) => {

    const items = tripItems.map (item => <ListItem item={item} key={item.id} id={item.id}/>)

    return (
        <Styles>
            <Container>
                <h3 className="list-title">Packing List</h3>
                <ListGroup className="list">
                    {items}
                </ListGroup>
            </Container>
        </Styles>
    )
}

export default List;