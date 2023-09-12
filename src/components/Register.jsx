import React, {useState, useEffect} from 'react';

function Register(props) {

    return (
        <>
            <form>
                <h3>Register</h3>
                <input type="text" placeholder='Email...' />
                <input type="password" placeholder='Password...' />
            </form>
        </>
    );
}

export default Register;