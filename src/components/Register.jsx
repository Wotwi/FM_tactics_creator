import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, {useState, useEffect} from 'react';
import { auth } from "../../firebase-config.js"
import { useHistory } from "react-router-dom";

function Register(props) {
    let history = useHistory();

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const [user, setUser] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, [])

    const register = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
            history.push("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <form className='login__form'>
                <h3 className='login__title'>Register</h3>
                <input className='login__text' type="text" placeholder='Email...' onChange={(e) => {setRegisterEmail(e.target.value)}} />
                <input className='login__text' type="password" placeholder='Password...' onChange={(e) => {setRegisterPassword(e.target.value)}} />
                <input className='login__btn' type="submit" onClick={register} value="Zarejestruj"/>
                <a href="/login" className='login__note'>Already have an account? Sign in here!</a>
            </form>
        </>
    );
}

export default Register;