import React, { useState } from 'react';

function DribblingButtons({ isFirstPressed, setIsFirstPressed, isSecondPressed, setIsSecondPressed }) {


    const handleFirstToggle = () => {
        setIsFirstPressed(!isFirstPressed);
        setIsSecondPressed(false);
    };
    const handleSecondToggle = () => {
        setIsFirstPressed(false);
        setIsSecondPressed(!isSecondPressed);
    };

    return (
        <>
            <h3 className="options-title final-third-title">DRIBBLING</h3>

            <button className="options-btn final-third-btn" onClick={handleFirstToggle} style={{backgroundColor: isFirstPressed ? '#0DC453' : ''}}>
                {isFirstPressed ? 'Dribble Less' : 'Dribble Less'}
            </button>

            <button className="options-btn final-third-btn" onClick={handleSecondToggle} style={{ backgroundColor: isSecondPressed ? '#0DC453' : '' }}>
                {isSecondPressed ? 'Run At Defence' : 'Run At Defence'}
            </button>
        </>
    );
}

export default DribblingButtons;
