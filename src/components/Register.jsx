import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState, useEffect} from 'react';
import { auth } from "../../firebase-config.js"

function Register(props) {

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const register = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <form className='register__form'>
                <h3>Register</h3>
                <input type="text" placeholder='Email...' onChange={(e) => {setRegisterEmail(e.target.value)}} />
                <input type="password" placeholder='Password...' onChange={(e) => {setRegisterPassword(e.target.value)}} />
                <input type="submit" onClick={register} value="Zarejestruj"/>
            </form>
        </>
    );
}

export default Register;