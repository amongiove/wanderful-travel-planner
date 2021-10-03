import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedSignupFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedSignupFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-center">Sign Up</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required name="name" value={signupFormData.name} onChange={handleChange} type="name" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required name="email" value={signupFormData.email} onChange={handleChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" name="password" value={signupFormData.password} onChange={handleChange}placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <Card.Text className="text-center">
                    Already have an account? Log in <Card.Link href="/login">Here.</Card.Link> 
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}


export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)