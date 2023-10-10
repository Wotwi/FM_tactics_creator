import React from 'react';
import { auth } from '../../firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';
import hamburger from "../assets/hamburger.png";

function Header() {

    const [user, setUser] = useState("");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const logout = async () => {
        await signOut(auth)
    }

    return (
        <>
            <header className="header">
                <nav className="main__navigation">
                    <a className="logo" href="/">FM Tactics Creator</a>
                    {windowWidth < 420 ? (
                            <img src={hamburger} className='hamburger'></img>
                        ) : (
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
                                {user ? (
                                    <>
                                        <a className="nav__element" href="/yourtactics">Your tactics</a>
                                    </>
                                ) : (
                                    <>
                                        <a href='/login' className="nav__element">Your tactics</a>
                                    </>
                                )}
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
                        )}
                </nav>
            </header>
        </>
    );
}

export default Header;