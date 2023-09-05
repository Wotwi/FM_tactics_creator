import React from 'react';
import DribblingButtons from "./buttonsHandlers/DribblingButtons.jsx";
import CreativeFreedomButtons from "./buttonsHandlers/CreativeFreedomButtons.jsx";

function InPossession({showInPossession, widthRange, handleRange, approachPlayHandle, approachPlay, leftLapStates, handleLeftLap, handleElementClick, rightLapStates, handleRightLap, secondLineOptions, passRange, handlePass, tempoRange, handleTempo, timeWasteRange, handleTimeWaste, handleMiddle, playOutDef, handlePlayOutDef, finishing, handleFinishing, setPieces, playForSetPieces, dribbleLess, setDribbleLess, isSecondPressed, setIsSecondPressed, isMoreExpressive, setIsMoreExpressive, IsMoreDisciplined, setIsMoreDisciplined, closeInPossession }) {
    return (
        <>
            {showInPossession && <div className="commands-window">
                <div className="options-section">
                    <h3 className="options-title">ATTACKING WIDTH</h3>
                    <p className="options-chosen">
                        {widthRange === 0 ? "Very tight" : ""}
                        {widthRange === 1 ? "Tight" : ""}
                        {widthRange === 2 ? "Standard" : ""}
                        {widthRange === 3 ? "Wide" : ""}
                        {widthRange === 4 ? "Very wide" : ""}
                    </p>
                    <input className="range-input" type="range" min="0" max="4" value={widthRange}
                           onChange={handleRange}/>
                </div>
                <div className="options-section">
                    <h3 className="options-title">APPROACH PLAY</h3>
                    <button className="options-btn" onClick={approachPlayHandle} style={{backgroundColor: approachPlay ? '#0DC453' : ''}}>
                        Approach Play
                    </button>

                    <section className="small-pitch">
                                        <span
                                            className={leftLapStates.overlapLeft ? 'options-element-clicked' : 'options-element'}
                                            onClick={() => handleLeftLap('overlapLeft') && handleElementClick('overlapLeft')}>Overlap Left
                                        </span>
                        <span
                            className={leftLapStates.underlapLeft ? 'options-element-clicked' : 'options-element'}
                            onClick={() => handleLeftLap('underlapLeft') && handleElementClick('underlapLeft')}>Underlap Left
                                        </span>
                        <span
                            className={rightLapStates.underlapRight ? 'options-element-clicked' : 'options-element'}
                            onClick={() => handleRightLap('underlapRight') && handleElementClick('underlapRight')}>Underlap Right
                                        </span>
                        <span
                            className={rightLapStates.overlapRight ? 'options-element-clicked' : 'options-element'}
                            onClick={() => handleRightLap('overlapRight') && handleElementClick('overlapRight')}>Overlap Right
                                        </span>

                        <span
                            className={secondLineOptions.playDownLeft ? 'options-element-clicked' : 'options-element'}
                            onClick={() => handleMiddle('playDownLeft') && handleElementClick('playDownLeft')}>Focus Play Down The Left
                                        </span>
                        <span
                            className={secondLineOptions.playThroughMiddle ? 'options-element-clicked' : 'options-element'}
                            onClick={() => handleMiddle('playThroughMiddle') && handleElementClick('playThroughMiddle')}>Focus Play Through The Middle
                                        </span>
                        <span
                            className={secondLineOptions.playDownRight ? 'options-element-clicked' : 'options-element'}
                            onClick={() => handleMiddle('playDownRight') && handleElementClick('playDownRight')}>Focus Play Down The Right
                                        </span>

                        <span
                            className={playOutDef ? 'options-element-clicked' : 'options-element'}
                            onClick={() => handlePlayOutDef() && handleElementClick('playOutDef')}>Play Out Of Defence
                                        </span>
                    </section>

                    <h3 className="options-title">PASSING DIRECTNESS</h3>
                    <p className="options-chosen">
                        {passRange === 0 ? "Very short" : ""}
                        {passRange === 1 ? "Short" : ""}
                        {passRange === 2 ? "Standard" : ""}
                        {passRange === 3 ? "Long" : ""}
                        {passRange === 4 ? "Very long" : ""}
                    </p>
                    <input className="range-input" type="range" min="0" max="4" value={passRange}
                           onChange={handlePass}/>

                    <h3 className="options-title">TEMPO</h3>
                    <p className="options-chosen">
                        {tempoRange === 0 ? "V Slow" : ""}
                        {tempoRange === 1 ? "Slow" : ""}
                        {tempoRange === 2 ? "Standard" : ""}
                        {tempoRange === 3 ? "Fast" : ""}
                        {tempoRange === 4 ? "V Fast" : ""}
                    </p>
                    <input className="range-input" type="range" min="0" max="4" value={tempoRange}
                           onChange={handleTempo}/>

                    <h3 className="options-title">TIME WASTING</h3>
                    <p className="options-chosen">
                        {timeWasteRange === 0 ? "Never" : ""}
                        {timeWasteRange === 1 ? "Waste Time Sometimes" : ""}
                        {timeWasteRange === 2 ? "Waste Time Whenever" : ""}
                    </p>
                    <input className="range-input" type="range" min="0" max="2" value={timeWasteRange} onChange={handleTimeWaste}/>
                </div>
                <div className="options-section">
                    <h3 className="options-title final-third-title">FINAL THIRD</h3>
                    <select className="cross-select" name="" id="">
                        <option value="Low Crosses">Low Crosses</option>
                        <option value="Medium Crosses">Medium Crosses</option>
                        <option value="High Crosses">High Crosses</option>
                    </select>

                    <section className="small-pitch final-third-pitch">
                        <span
                            className={finishing.ballIntoBox ? 'final-third-pitch-element-clicked' : 'final-third-pitch-element'}
                            onClick={() => handleFinishing('ballIntoBox') &&  handleElementClick('ballIntoBox')}>Work Ball Into Box
                        </span>
                        <span
                            className={finishing.hitEarlyCrosses ? 'final-third-pitch-element-clicked' : 'final-third-pitch-element'}
                            onClick={() => handleFinishing('hitEarlyCrosses') && handleElementClick('hitEarlyCrosses')}>Hit Early Crosses
                                        </span>
                        <span
                            className={finishing.shootOnSight ? 'final-third-pitch-element-clicked' : 'final-third-pitch-element'}
                            onClick={() => handleFinishing('shootOnSight') && handleElementClick('shootOnSight')}>Shoot On Sight
                                        </span>
                        <span
                            className={finishing.hitEarlyCrosses ? 'final-third-pitch-element-clicked' : 'final-third-pitch-element'}
                            onClick={() => handleFinishing('hitEarlyCrosses') && handleElementClick('hitEarlyCrosses')}>Hit Early Crosses
                                        </span>
                    </section>
                    <button className="options-btn final-third-btn" onClick={setPieces} style={{backgroundColor: playForSetPieces ? '#0DC453' : ''}}>
                        Play For Set Pieces
                    </button>

                    <DribblingButtons
                        dribbleLess={dribbleLess}
                        setDribbleLess={setDribbleLess}
                        runAtDefence={isSecondPressed}
                        setRunAtDefence={setIsSecondPressed}
                    />

                    <CreativeFreedomButtons
                        isMoreExpressive={isMoreExpressive}
                        setIsMoreExpressive={setIsMoreExpressive}
                        isMoreDesciplined={IsMoreDisciplined}
                        setIsMoreDesciplined={setIsMoreDisciplined}
                    />
                </div>
                <button className="close-btn" onClick={closeInPossession}>X</button>
            </div>}
        </>
    );
}

export default InPossession;