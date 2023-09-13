import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { auth } from '../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

function Header() {

    const [user, setUser] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, [])

    return (
        <>
            <header className="header">
                <nav className="main__navigation">
                    <a className="logo" href="/">FM Tactics Creator</a>
                    <span className="elements__wrapper">
                        <a href="/create" className="nav__element">Create tactic</a>
                        <a href="/alltactics" className="nav__element">All tactics</a>
                        <p className="nav__element">Your tactics</p>
                        <span className="account">
                            {user ? (
                                <p className='nav__element'>Hello {user.email}!</p>
                            ) : (
                                <div>
                                    <a href="/login" className="nav__element">Login</a>
                                    <a href="/register" className="nav__element">Register</a>
                                </div>
                            )}
                            
                        </span>
                    </span>
                </nav>
            </header>
        </>
    );
}

export default Header;