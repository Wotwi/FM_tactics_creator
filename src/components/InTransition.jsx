import React, {createContext, useState} from 'react';

function InTransition({showInTransition, closeInTransition, counterPress, regroup, handleCounterPress, counter, holdShape, handleRegroup, handleCounter, handleHoldShape, distributeQuickly, setDistributeQuickly, slowPaceDown,  setSlowPaceDown, distributionType, setDistributionType, handleDistributeQuickly, handleSlowPaceDown, handleDistributionType}) {

    return (
        <>
            {showInTransition && <div className="commands-window">
                <div className="options-section">
                    <h3 className="options-title">WHEN POSSESSION HAS BEEN LOST</h3>
                    <button className={counterPress ? "options-btn-active final-third-btn" : "options-btn final-third-btn"} onClick={handleCounterPress}>Counter-Press</button>
                    <button className={regroup ? "options-btn-active final-third-btn" : "options-btn final-third-btn"} onClick={handleRegroup}>Regroup</button>
                </div>
                <div className="options-section">
                    <h3 className="options-title">WHEN POSSESSION HAS BEEN WON</h3>
                    <button className={counter ? "options-btn-active final-third-btn" : "options-btn final-third-btn"} onClick={handleCounter}>Counter</button>
                    <button className={holdShape ? "options-btn-active final-third-btn" : "options-btn final-third-btn"} onClick={handleHoldShape}>Hold Shape</button>
                </div>
                <div className="options-section">
                    <h3 className="options-title">GOALKEEPER IN POSSESSION</h3>
                    <button className={distributeQuickly ? "options-btn-active final-third-btn" : "options-btn final-third-btn"} onClick={handleDistributeQuickly}>Distribute Quickly</button>
                    <button className={slowPaceDown ? "options-btn-active final-third-btn" : "options-btn final-third-btn"} onClick={handleSlowPaceDown}>Slow Pace Down</button>

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
                    <button className={distributionType.rollItOut ? "options-btn-active final-third-btn" : "options-btn final-third-btn"} onClick={() => handleDistributionType('rollItOut')}>Roll It Out</button>
                    <button className={distributionType.throwItLong ? "options-btn-active final-third-btn" : "options-btn final-third-btn"} onClick={() => handleDistributionType('throwItLong')}>Throw It Long</button>
                    <button className={distributionType.takeShortKicks ? "options-btn-active final-third-btn" : "options-btn final-third-btn"} onClick={() => handleDistributionType('takeShortKicks')}>Take Short Kicks</button>
                    <button className={distributionType.takeLongKicks ? "options-btn-active final-third-btn" : "options-btn final-third-btn"} onClick={() => handleDistributionType('takeLongKicks')}>Take Long Kicks</button>
                </div>

                <button className="close-btn" onClick={closeInTransition}>X</button>
            </div>}
        </>
    );
}

export default InTransition;