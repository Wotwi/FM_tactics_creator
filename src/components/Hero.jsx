import React from 'react';

function Hero(props) {
    return (
        <>
            <section className="container hero__wrapper">
                <h1 className="hero__header">Hello in FM Tactics Creator</h1>
                <p className="hero__content">"FM Tactics Creator" is a tool that allows you to design and improve your tactics for Football Manager. Create and share your own tactics with others.</p>
                <p className="hero__content">Work on completing the application is still ongoing.</p>
                <h5 className="features">Upcoming features:</h5>
                <ul className="features-ul">
                    <li className="features-element">Log in/log out</li>
                    <li className="features-element">Saving tactics on your profile</li>
                    <li className="features-element">Sharing your tactics with others</li>
                    <li className="features-element">Viewing other users tactics</li>
                    <li className="features-element">RWD</li>
                </ul>
            </section>
        </>
    );
}

export default Hero;