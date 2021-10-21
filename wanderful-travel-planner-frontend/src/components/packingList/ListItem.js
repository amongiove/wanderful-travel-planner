import React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';

const ListItem = ({item}) => {
    return (
        <ListGroup.Item>
            {item.attributes.item}
        </ListGroup.Item>
        
    )
}

export default ListItem;

