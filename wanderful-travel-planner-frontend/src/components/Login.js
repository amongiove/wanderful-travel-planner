import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js';

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
        <form onSubmit={handleSubmit}>
            <input placeholder="email" type="text" name="email" value={loginFormData.email} onChange={handleChange} />
            <input placeholder="password" type="text" name="password" value={loginFormData.password} onChange={handleChange} />
            <input type="submit" value="Log In" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}


export default connect(mapStateToProps, { updateLoginForm, login } )(Login)