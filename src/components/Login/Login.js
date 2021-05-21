import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';

async function loginUser(cridentials) {
    return fetch('http://localhost:8080/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cridentials)
    }).then((data) => data.json());
}



export default function Login ({ setToken }) {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    const handleOnSubmitForm = async e => {
        e.preventDefault();
        const token = await loginUser({
            userName,
          password
        });
        setToken(token);
      };

    return (
        <div className="login-wrapper">
            <h1>Please login</h1>
            <form onSubmit={handleOnSubmitForm}>
                <label>
                    <p>UserName: </p>
                    <input type='text' onChange={(event) => setUserName(event.target.value)}/>
                </label>
                <label>
                    <p>Password: </p>
                    <input type='password' onChange={(event) => setPassword(event.target.value)}/>
                </label>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
