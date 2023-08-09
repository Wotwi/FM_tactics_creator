import React from 'react';

function Header() {
    return (
        <>
            <header className="header">
                <nav className="main__navigation">
                    <a className="logo" href="/">FM Tactics Creator</a>
                    <span className="elements__wrapper">
                        <p className="nav__element">Create tactic</p>
                        <p className="nav__element">All tactics</p>
                        <p className="nav__element">Your tactics</p>
                        <span className="account">
                            <p className="nav__element">Login</p>
                            <p className="nav__element">Register</p>
                        </span>
                    </span>
                </nav>
            </header>
        </>
    );
}

export default Header;