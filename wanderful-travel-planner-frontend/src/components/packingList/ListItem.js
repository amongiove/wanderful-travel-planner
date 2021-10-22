import React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { GrCheckbox, GrCheckboxSelected, GrTrash } from 'react-icons/gr';
import styled from 'styled-components';

const Styles = styled.div`
    
    .item {
        text-align: center;
    }
    .delete-button {
        float: right;
    }

    .check {
        float: left;
    }
`;


const ListItem = ({item, onDelete}) => {

    const handleDelete = async (event) => {
        event.preventDefault();
        const result = await onDelete(item.id);
        if (result && !result.error) {
            // todo: can we get this to update without reload?
            return window.location.reload();
        }
    } 

    const handleCheck = (event) => {
        return (console.log('handle check'))
    }

    return (
        <Styles>
            <Col className="container-fluid col-md-8  col-md-offset-2 col-sm-2 col-sm-offset-2">
                <ListGroup.Item className="item"  as='li'>

                    {/* TODO: add check functionality option */}
                    {/* <GrCheckbox className='check' onClick={handleCheck} /> */}
                    
                    {item.attributes.item} 

                    <Button onClick={(event) => (window.confirm('Are you sure you want to delete this item?'))?handleDelete(event) : null} variant="outline-secondary" size="sm" className="delete-button">
                            <GrTrash />
                    </Button>

                </ListGroup.Item>
            </Col>
        </Styles>
        
    )
}

export default ListItem;

