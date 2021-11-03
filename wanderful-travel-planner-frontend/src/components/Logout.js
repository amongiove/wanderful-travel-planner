import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth.js';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Logout = ({ logout }) => {

    return (
        <Form onSubmit={logout}>
            <Button variant="outline-light" type="submit">
                Log Out
            </Button>
        </Form>
    )
}

export default connect(null, { logout } )(Logout)