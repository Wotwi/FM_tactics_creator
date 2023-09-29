import React from 'react';
import { auth } from '../../firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function Header() {
    let history = useHistory();

    const [user, setUser] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, [])

    const logout = async () => {
        await signOut(auth)
    }

    return (
        <>
            <header className="header">
                <nav className="main__navigation">
                    <a className="logo" href="/">FM Tactics Creator</a>
                    <span className="elements__wrapper">
                        {user ? (
                            <>
                                <a href="/create" className="nav__element">Create tactic</a>
                            </>
                        ) : (
                            <>
                                <a href='/login' className="nav__element">Create tactic</a>
                            </>
                        )}
                        <a href="/alltactics" className="nav__element">All tactics</a>
                        <p className="nav__element">Your tactics</p>
                        <span className="account">
                            {user ? (
                                <>
                                    <p className='nav__element'>Hello {user.email}!</p>
                                    <button className='logout__button' onClick={logout}>Log Out</button>
                                </>
                            ) : (
                                <>
                                    <a href="/login" className="nav__element">Login</a>
                                    <a href="/register" className="nav__element">Register</a>
                                </>
                            )}
                            
                        </span>
                    </span>
                </nav>
            </header>
        </>
    );
}

export default Header;