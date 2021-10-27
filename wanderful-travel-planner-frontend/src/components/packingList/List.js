import React from 'react';
import ListItem from './ListItem.js';
import NewItemForm from './NewItemForm.js';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const Styles = styled.div`
    .list-title {
        text-align: center;
        margin-top: 20px;
    }

    .list {
        
        margin: 30px;
        margin-bottom: 60px;
    }
`;

const List = ({trip, tripItems, createNewItem, deleteItem}) => {

    const items = tripItems.map (item => <ListItem item={item} key={item.id} id={item.id} onDelete={deleteItem}/>)

    return (
        <Styles>
            <Container>
                <h2 className="list-title">Packing List</h2>
                <ListGroup as='ul' className="list">
                    <NewItemForm  currentTrip={trip} onSubmit={createNewItem}/> 
                    {items}
                </ListGroup>
            </Container>
        </Styles>
    )
}

export default List;