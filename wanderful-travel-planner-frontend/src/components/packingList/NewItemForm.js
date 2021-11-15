import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { GrAdd } from 'react-icons/gr';

const Styles = styled.div`
    
    .new-item-form {
        margin-bottom: 30px;
        text-align: center;
    }
`;

const NewItemForm = ({currentTrip, onSubmit}) => {

    const [item, setItem] = useState('');
    const newItem = () => {return {item: item, trip_id: currentTrip.id}};

    const handleSubmitItem = async (event, newItem) => {
        event.preventDefault();
        const result = await onSubmit(newItem);
        if (result && !result.error) {
            setItem('')
        } 
    }

    return (
        <Styles>
            <Form className="new-item-form" onSubmit={event => handleSubmitItem(event, newItem())}>
                <Row className="justify-content-md-center" >
                    <Col xs={6} md={4}>
                        <Form.Group className="mb-2">
                            <Form.Control 
                                id="inlineFormInputGroup"
                                required
                                value={item} 
                                maxLength="40"
                                placeholder="Add Item" 
                                onChange={event => setItem(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs="auto">
                        <Button 
                            variant="outline-secondary" 
                            type="submit" 
                            className="mb-2"
                        >
                            <GrAdd />
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Styles>
    )
}

export default NewItemForm;