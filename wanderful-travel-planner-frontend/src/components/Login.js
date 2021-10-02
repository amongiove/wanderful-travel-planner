import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Login = ({ loginFormData, updateLoginForm, login }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedLoginFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedLoginFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-center">Log In</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" value={loginFormData.email} onChange={handleChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={loginFormData.password} onChange={handleChange}placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
                <Card.Text className="text-center">
                    {/* TODO: add signup link */}
                    Don't have an account? Sign up <Card.Link href="/signup">Here.</Card.Link> 
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}


export default connect(mapStateToProps, { updateLoginForm, login } )(Login)