import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// Okta auth imports
// import { Redirect } from 'react-router-dom';
// import OktaSignInwidget from './SigninWidget';
// import { withAuth } from '@okta/okta-react';

const Login = props => {
    const [loginInfo, setloginInfo] = useState({
        email: "",
        password: ""
    });
    console.log(loginInfo)

    const handleChange = e => {
        let name = e.target.name;
        setloginInfo({ ...loginInfo, [name]: e.target.value });
    };

    //needs to put in the backend URL in the Axios post request
    const login = e => {
        e.preventDefault();
        axios
            .post("", loginInfo)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userId", res.data.id);
                console.log(res.data);

                props.history.push(`/dashboard/${res.data.id}`);
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={loginInfo.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginInfo.password}
                    onChange={handleChange}
                />
                    <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;