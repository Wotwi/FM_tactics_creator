import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, {useState, useEffect} from 'react';
import { auth } from "../../firebase-config.js";
import { useHistory } from "react-router-dom";

function Login(props) {
    let history = useHistory();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    })

    const login = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
            history.push("/")
        } catch (error) {
            console.log(error.message);
        }    
    };

    

    return (
        <>
            <form className='login__form'>
                <h3 className='login__title'>Login</h3>
                <input className='login__text' type="text" placeholder='Email...' onChange={(e) => {setLoginEmail(e.target.value)}} />
                <input className='login__text' type="password" placeholder='Password...' onChange={(e) => {setLoginPassword(e.target.value)}} />
                <input className='login__btn' type="submit" value="Zaloguj" onClick={login} />
                <a href="/register" className='login__note'>Don't have an account? Register here!</a>
            </form>
            <h1>{user?.email}</h1>
        </>
    );
}

export default Login;