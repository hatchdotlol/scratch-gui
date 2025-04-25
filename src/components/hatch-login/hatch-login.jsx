import classNames from 'classnames';
import React from 'react';

import styles from './hatch-login.css';

const HatchLogin = function () {
    return (
        <div
            className={classNames(
                styles.loginWrapper
            )}
        >
            <h1>Hatch.lol Authentication</h1>
            <p>Please sign in to your Hatch account to continue.</p>
            <form
                className={classNames(
                    styles.teenForm
                )}
                onSubmit={(e) => {
                    e.preventDefault();
                    login(document.getElementById("username").value, document.getElementById("password").value);
                }}
            >
                <label for="username">Username</label>
                <input type="text" id="username" required /><br />
                <label for="password">Password</label>
                <input type="password" id="password" required /><br />
                <input type="submit" value="Sign in" />
            </form>
            <hr />
            <p>raynec.dev is owned by <a href="https://dev.hatch.lol/user/?u=r">rayne cloudy</a>, a staff member at Hatch.lol.</p>
            <p>By signing in to this site, you consent to the storage of cookies for strictly functional purposes.</p>
        </div>
    );
};

const login = async (username, password) => {
    let json = await (await fetch("https://api.hatch.lol/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })).json();

    if (json.token) {
        document.cookie = json.token;
        location.reload();
    }
}

HatchLogin.propTypes = {};
HatchLogin.defaultProps = {};

export default HatchLogin;
