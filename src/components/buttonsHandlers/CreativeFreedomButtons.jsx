import React, { useState } from 'react';

function CreativeFreedomButtons({ isMoreExpressive, setIsMoreExpressive, isMoreDesciplined, setIsMoreDesciplined }) {


    const beExpressiveToggle = () => {
        setIsMoreExpressive(!isMoreExpressive);
        setIsMoreDesciplined(false);
    };
    const beDesciplinedToggle = () => {
        setIsMoreExpressive(false);
        setIsMoreDesciplined(!isMoreDesciplined);
    };

    return (
        <>
            <h3 className="options-title final-third-title">DRIBBLING</h3>

            <button className="options-btn final-third-btn" onClick={beExpressiveToggle} style={{backgroundColor: isMoreExpressive ? '#0DC453' : ''}}>
                {isMoreExpressive ? 'Be More Expressive' : 'Be More Expressive'}
            </button>

            <button className="options-btn final-third-btn" onClick={beDesciplinedToggle} style={{ backgroundColor: isMoreDesciplined ? '#0DC453' : '' }}>
                {isMoreDesciplined ? 'Be More Desciplined' : 'Be More Desciplined'}
            </button>
        </>
    );
}

export default CreativeFreedomButtons;
