import {createElement, useState} from "react";

function OutOfPossession({showOutOfPossession, defensiveWidthRange, triggerPressRange, closeOutOfPossession, handleDefensiveWidth, handleTriggerPress, tighterMarking, setTighterMarking, preventShortGK, setPreventShortGK, stayOnFeet, setStayOnFeet, getStuckIn, setGetStuckIn, handleTighterMarking, handlePreventShortGK, handleStayOnFeet, handleGetOnStuck, generateArrows}) {

    return (
        <>
            {showOutOfPossession && <div className="commands-window">
                <div className="options-section oop-section">
                    <h3 className="options-title">DEFENSIVE SHAPE</h3>
                    <section className="small-pitch oop-pitch">
                        {defensiveWidthRange === 0 && generateArrows()}
                        {defensiveWidthRange === 2 && generateArrows()}
                    </section>

                    <h3 className="options-title">DEFENSIVE WIDTH</h3>
                    <p className="options-chosen">
                        {defensiveWidthRange === 0 ? "Force Opposition Outside" : ""}
                        {defensiveWidthRange === 1 ? "Standard" : ""}
                        {defensiveWidthRange === 2 ? "Force Opposition Inside" : ""}
                    </p>
                    <input type="range" className="range-input oop-range" min="0" max="2" value={defensiveWidthRange} onChange={handleDefensiveWidth}/>
                </div>
                <div className="options-section oop-section">
                    <h3 className="options-title">MARKING AND TACKLING</h3>
                    <button className={tighterMarking ? 'options-btn-active final-third-btn' : 'options-btn final-third-btn'} onClick={handleTighterMarking}>Use Tighter Marking</button>

                    <h3 className="options-title">TRIGGER PRESS</h3>
                    <p className="options-chosen">
                        {triggerPressRange === 0 ? "Much Less Often" : ""}
                        {triggerPressRange === 1 ? "Slightly Less Often" : ""}
                        {triggerPressRange === 2 ? "Slightly More Often" : ""}
                        {triggerPressRange === 3 ? "More Often" : ""}
                        {triggerPressRange === 4 ? "Much More Often" : ""}
                    </p>
                    <input type="range" className="range-input" min="0" max="4" value={triggerPressRange} onChange={handleTriggerPress}/>
                    <button className={preventShortGK ? 'options-btn-active final-third-btn' : 'options-btn final-third-btn'} onClick={handlePreventShortGK}>Prevent Short GK Distribu...</button>

                    <h3 className="options-title">TACKLING</h3>
                    <button className={stayOnFeet ? 'options-btn-active final-third-btn' : 'options-btn final-third-btn'} onClick={handleStayOnFeet}>Stay On Feet</button>
                    <button className={getStuckIn ? 'options-btn-active final-third-btn' : 'options-btn final-third-btn'} onClick={handleGetOnStuck}>Get Stuck In</button>
                </div>
                <button className="close-btn" onClick={closeOutOfPossession}>X</button>
            </div>}
        </>
    );
}

export default OutOfPossession;