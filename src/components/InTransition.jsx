import React from 'react';

function InTransition({showInTransition, closeInTransition}) {
    return (
        <>
            {showInTransition && <div className="commands-window">
                <div className="options-section">
                    <h3 className="options-title">WHEN POSSESSION HAS BEEN LOST</h3>
                    <button className="options-btn final-third-btn">Counter-Press</button>
                    <button className="options-btn final-third-btn">Regroup</button>
                </div>
                <div className="options-section">
                    <h3 className="options-title">WHEN POSSESSION HAS BEEN WON</h3>
                    <button className="options-btn final-third-btn">Counter</button>
                    <button className="options-btn final-third-btn">Hold Shape</button>
                </div>
                <div className="options-section">
                    <h3 className="options-title">GOALKEEPER IN POSSESSION</h3>
                    <button className="options-btn final-third-btn">Distribute Quickly</button>
                    <button className="options-btn final-third-btn">Slow Pace Down</button>

                    <section className="small-pitch">
                        <span className="oop-pitch-element">Distribute Over Opposition Defence</span>

                        <span className="oop-pitch-element">Distribute To Flanks</span>
                        <span className="oop-pitch-element">Distribute to Target...</span>
                        <span className="oop-pitch-element">Distribute to Playmaker</span>
                        <span className="oop-pitch-element">Distribute to Flanks</span>

                        <span className="oop-pitch-element">Distribute to Full-Backs</span>
                        <span className="oop-pitch-element">Distribute To Centre Backs</span>
                        <span className="oop-pitch-element">Distribute to Full-Backs</span>
                    </section>

                    <h3 className="options-title">DISTRIBUTION TYPE</h3>
                    <button className="options-btn final-third-btn">Roll It Out</button>
                    <button className="options-btn final-third-btn">Throw It Long</button>
                    <button className="options-btn final-third-btn">Take Short Kicks</button>
                    <button className="options-btn final-third-btn">Take Long Kicks</button>
                </div>

                <button className="close-btn" onClick={closeInTransition}>X</button>
            </div>}
        </>
    );
}

export default InTransition;