import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, {useState, useEffect} from 'react';
import { auth } from "../../firebase-config.js"

function Login(props) {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    })

    const login = async (e) => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth)
    }

    return (
        <>
            <form>
                <h3>Login</h3>
                <input type="text" placeholder='Email...' onChange={(e) => {setLoginEmail(e.target.value)}} />
                <input type="password" placeholder='Password...' onChange={(e) => {setLoginPassword(e.target.value)}} />
                <input type="submit" value="Zaloguj" onClick={login} />
                <button onClick={logout}>Wyloguj</button>
            </form>
            <h1>{user?.email}</h1>
        </>
    );
}

export default Login;