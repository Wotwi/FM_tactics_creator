import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function Header() {
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
                            <a href="/login" className="nav__element">Login</a>
                            <a href="/register" className="nav__element">Register</a>
                        </span>
                    </span>
                </nav>
            </header>
        </>
    );
}

export default Header;