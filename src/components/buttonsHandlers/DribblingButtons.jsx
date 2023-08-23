import React, { useState } from 'react';

function DribblingButtons({ dribbleLess, setDribbleLess, runAtDefence, setRunAtDefence }) {

    const handleFirstToggle = () => {
        setDribbleLess(!dribbleLess);
        setRunAtDefence(false);
    };
    const handleSecondToggle = () => {
        setDribbleLess(false);
        setRunAtDefence(!runAtDefence);
    };

    return (
        <>
            <h3 className="options-title final-third-title">DRIBBLING</h3>

            <button className="options-btn final-third-btn" onClick={handleFirstToggle} style={{backgroundColor: dribbleLess ? '#0DC453' : ''}}>
                {dribbleLess ? 'Dribble Less' : 'Dribble Less'}
            </button>

            <button className="options-btn final-third-btn" onClick={handleSecondToggle} style={{ backgroundColor: runAtDefence ? '#0DC453' : '' }}>
                {runAtDefence ? 'Run At Defence' : 'Run At Defence'}
            </button>
        </>
    );
}

export default DribblingButtons;
