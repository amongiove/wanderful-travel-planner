import React from 'react';
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

const NewItemForm = () => {
    return (
        <Styles>
            <Form className="new-item-form">
                <Row className="justify-content-md-center" >
                    <Col xs={6} md={4}>
                        <Form.Group className="mb-2">
                            <Form.Control id="inlineFormInputGroup" placeholder="Add Item" />
                        </Form.Group>
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-secondary" type="submit" className="mb-2">
                            <GrAdd />
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Styles>
    )
}

export default NewItemForm;