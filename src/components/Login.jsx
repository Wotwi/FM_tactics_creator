import React, {useState, useEffect} from 'react';

function Login(props) {

    return (
        <>
            <form>
                <h3>Login</h3>
                <input type="text" placeholder='Email...' />
                <input type="password" placeholder='Password...' />
            </form>
        </>
    );
}

export default Login;