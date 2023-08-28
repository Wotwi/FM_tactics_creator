import {createElement, useState} from "react";
import DribblingButtons from "./buttonsHandlers/DribblingButtons.jsx";
import CreativeFreedomButtons from "./buttonsHandlers/CreativeFreedomButtons.jsx";

function CreateTactic() {
    const [selectedFormation, setSelectedFormation] = useState('');

    const [showInPossession, setShowInPossession] = useState(false);
    const [showInTransition, setShowInTransition] = useState(false);
    const [showOutOfPossession, setShowOutOfPossession] = useState(false);

    const [approachPlay, setApproachPlay] = useState(false);
    const [playForSetPieces, setPlayForSetPieces] = useState(false)
    const [dribbleLess, setDribbleLess] = useState(false);
    const [isSecondPressed, setIsSecondPressed] = useState(false);
    const [isMoreExpressive, setIsMoreExpressive] = useState(false);
    const [IsMoreDisciplined, setIsMoreDisciplined] = useState(false);

    const [widthRange, setWidthRange] = useState(2)
    const [passRange, setPassRange] = useState(2)
    const [tempoRange, setTempoRange] = useState(2)
    const [timeWasteRange, setTimeWasteRange] = useState(0)
    const [defensiveWidthRange, setDefensiveWidthRange] = useState(1)
    const [triggerPressRange, setTriggerPressRange] = useState(2)

     const [playOptionStates, setPlayOptionStates] = useState({
         playOutDef: false,
         playDownLeft: false,
         playThroughMiddle: false,
         playDownRight: false,
         overlapLeft: false,
         underlapLeft: false,
         underlapRight: false,
         overlapRight: false,

         hitEarlyCrosses: false,
         shootOnSight: false,
         ballIntoBox: false,
     })

    const handleElementClick = (element) => {
        setPlayOptionStates((prevStates) => ({
            ...prevStates,
            [element]: !prevStates[element],
        }));
    };

    function handleSelectFormation(e) {
        setSelectedFormation(e.target.value);

        if (e.target.value === "3-5-2") {
            generateElement();
        } else if (e.target.value === "4-3-3") {
            generateElement();
        } else if (e.target.value === "4-4-2") {
            generateElement();
        }
    }

    function generateElement() {
        const arr = [];

        if (selectedFormation === "3-5-2") {
            for (let i = 1; i <= 11; i++) {
                const player = createElement(
                    'img',
                    {className: `formation-352-${[i]}`, src: "src/assets/shirt3.png"}
                );
                const position = createElement(
                    'select',
                    {className: `position-352-${[i]}`},
                    (() => {
                        if (i === 1) {
                            return [
                                createElement('option', {value: "option1"}, "Goalkeeper"),
                                createElement('option', {value: "option2"}, "Goalkeeper-libero"),
                            ];
                        } else if (i === 2 || i === 3 || i === 4) {
                            return [
                                createElement('option', {value: "option3"}, "Central Back"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                            ];
                        } else if (i === 6 || i === 7 || i === 8) {
                            return [
                                createElement('option', {value: "option3"}, "Midfielder"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                                createElement('option', {value: "option4"}, "Opcja 4")
                            ];
                        } else if (i === 5 || i === 9) {
                            return [
                                createElement('option', {value: "option3"}, "Winger"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                                createElement('option', {value: "option4"}, "Opcja 4")
                            ];
                        } else if (i === 10 || i === 11) {
                            return [
                                createElement('option', {value: "option3"}, "Central Forward"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                                createElement('option', {value: "option4"}, "Opcja 4")
                            ];
                        }
                        return null;
                    })()
                );
                arr.push(player, position);
            }
            return arr;
        } else if (selectedFormation === "4-3-3") {
            for (let i = 1; i <= 11; i++) {
                const player = createElement(
                    'img',
                    {className: `formation-433-${[i]}`, src: "src/assets/shirt3.png"}
                );
                const position = createElement(
                    'select',
                    {className: `position-433-${[i]}`},
                    (() => {
                        if (i === 1) {
                            return [
                                createElement('option', {value: "option1"}, "Goalkeeper"),
                                createElement('option', {value: "option2"}, "Goalkeeper-libero"),
                            ];
                        } else if (i === 2 || i === 3 || i === 4) {
                            return [
                                createElement('option', {value: "option3"}, "Central Defender"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                            ];
                        } else if (i === 6 || i === 7 || i === 8) {
                            return [
                                createElement('option', {value: "option3"}, "Central Midfielder"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                                createElement('option', {value: "option4"}, "Opcja 4")
                            ];
                        } else if (i === 9 || i === 10 || i === 11) {
                            return [
                                createElement('option', {value: "option3"}, "Advanced Forward"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                                createElement('option', {value: "option4"}, "Opcja 4")
                            ];
                        }
                        return null;
                    })()
                );
                arr.push(player, position);
            }
            return arr;
        } else if (selectedFormation === "4-4-2") {
            for (let i = 1; i <= 11; i++) {
                const player = createElement(
                    'img',
                    {className: `formation-442-${[i]}`, src: "src/assets/shirt3.png"}
                );
                const position = createElement(
                    'select',
                    {className: `position-442-${[i]}`},
                    (() => {
                        if (i === 1) {
                            return [
                                createElement('option', {value: "option1"}, "Goalkeeper"),
                                createElement('option', {value: "option2"}, "Goalkeeper-libero"),
                            ];
                        } else if (i === 2 || i === 3 || i === 4 || i === 5) {
                            return [
                                createElement('option', {value: "option3"}, "Central Defender"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                            ];
                        } else if (i === 7 || i === 8) {
                            return [
                                createElement('option', {value: "option3"}, "Central Midfielder"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                                createElement('option', {value: "option4"}, "Opcja 4")
                            ];
                        } else if (i === 6 || i === 9) {
                            return [
                                createElement('option', {value: "option3"}, "Winger"),
                                createElement('option', {value: "option4"}, "Opcja 4")
                            ];
                        } else if (i === 10 || i === 11) {
                            return [
                                createElement('option', {value: "option3"}, "Advanced Forward"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                                createElement('option', {value: "option4"}, "Opcja 4")
                            ];
                        }
                        return null;
                    })()
                );
                arr.push(player, position);
            }
            return arr;
        }
    }

    function openInPossession() {
        setShowInPossession(true);
    }

    function openInTransition() {
        setShowInTransition(true);
    }

    function openOutOfPossession() {
        setShowOutOfPossession(true);
    }

    function closeInPossession() {
        setShowInPossession(false);
    }

    function closeInTransition() {
        setShowInTransition(false);
    }

    function closeOutOfPossession() {
        setShowOutOfPossession(false);
    }

    function handleRange(e) {
        setWidthRange(parseInt(e.target.value, 10))
    }

    function handlePass(e) {
        setPassRange(parseInt(e.target.value, 10))
    }

    function handleTempo(e) {
        setTempoRange(parseInt(e.target.value, 10))
    }

    function handleTimeWaste(e) {
        setTimeWasteRange(parseInt(e.target.value, 10))
    }

    function handleDefensiveWidth(e) {
        setDefensiveWidthRange(parseInt(e.target.value, 10))
    }

    function handleTriggerPress(e) {
        setTriggerPressRange(parseInt(e.target.value, 10))
    }

    const widthRangeLabels = (
        <>
            {widthRange === 0 ? "Very tight" : ""}
            {widthRange === 1 ? "Tight" : ""}
            {widthRange === 2 ? "" : ""}
            {widthRange === 3 ? "Wide" : ""}
            {widthRange === 4 ? "Very wide" : ""}
        </>
    );

    const approachPlayHandle = () => {
        setApproachPlay(!approachPlay);
        console.log(approachPlay);
    }

    const setPieces = () => {
        setPlayForSetPieces(!playForSetPieces);
        console.log(playForSetPieces);
    }

    const passRangeLabels = (
        <>
            {passRange === 0 ? "Very short" : ""}
            {passRange === 1 ? "Short" : ""}
            {passRange === 2 ? "" : ""}
            {passRange === 3 ? "Long" : ""}
            {passRange === 4 ? "Very long" : ""}
        </>
    );

    const tempoRangeLabels = (
        <>
            {tempoRange === 0 ? "V Slow" : ""}
            {tempoRange === 1 ? "Slow" : ""}
            {tempoRange === 2 ? "" : ""}
            {tempoRange === 3 ? "Fast" : ""}
            {tempoRange === 4 ? "V Fast" : ""}
        </>
    );

    const timeWasteRangeLabels = (
        <>
            {timeWasteRange === 0 ? "" : ""}
            {timeWasteRange === 1 ? "Waste Time Sometimes" : ""}
            {timeWasteRange === 2 ? "Waste Time Whenever" : ""}
        </>
    );

    const handleLeftLap = (clickedOption) => {
        setPlayOptionStates((prevState) => ({
            overlapLeft: prevState.overlapLeft === false && clickedOption === 'overlapLeft',
            underlapLeft: prevState.underlapLeft === false && clickedOption === 'underlapLeft',
        }));
    };

    return (
        <>
            <div className="container">
                <span className="tactic__wrapper">
                    <label htmlFor="formations" className="formation">Choose your formation:</label>
                    <select value={selectedFormation} onChange={handleSelectFormation} name="formations"
                            className="formation-select" id="formations">
                        <option className="formation-select__item"></option>
                        <option className="formation-select__item" value="3-5-2">3-5-2</option>
                        <option className="formation-select__item" value="4-2-2-2 DP Wąsko">4-2-2-2 DP Wąsko</option>
                        <option className="formation-select__item" value="4-2-3-1">4-2-3-1</option>
                        <option className="formation-select__item" value="4-3-3">4-3-3</option>
                        <option className="formation-select__item" value="4-4-2">4-4-2</option>
                    </select>
                    <main className="tactics">
                        <section className="options">
                            <label htmlFor="mentality" className="mentality option-font">Mentality</label>
                            <select name="mentality-select" className="mentality-select option-font" id="mentality">
                                <option value="very defensive">very defensive</option>
                                <option value="defensive">defensive</option>
                                <option value="standard">standard</option>
                                <option value="positive">positive</option>
                                <option value="offensive">offensive</option>
                                <option value="very offensive">very offensive</option>
                            </select>

                            <div className="in-possession option-font" onClick={openInPossession}>
                                <h3 className="options-title">IN POSSESSION</h3>
                                <span className="displayed-options">
                                    <p>{widthRangeLabels}</p>
                                    <p>{approachPlay && "Approach Play"}</p>
                                    <p>{passRangeLabels}</p>
                                    <p>{tempoRangeLabels}</p>
                                    <p>{timeWasteRangeLabels}</p>
                                    <p>{playForSetPieces && "Play For Set Pieces"}</p>
                                    <p>{dribbleLess && "Dribble Less"}</p>
                                    <p>{isSecondPressed && "Run At Defence"}</p>
                                    <p>{isMoreExpressive && "Be More Expressive"}</p>
                                    <p>{IsMoreDisciplined && "Be More Disciplined"}</p>

                                    <p>{playOptionStates.playOutDef && "Play Out Def"}</p>
                                    <p>{playOptionStates.playDownLeft && "Play Down Left"}</p>
                                    <p>{playOptionStates.playThroughMiddle && "Play Through Middle"}</p>
                                    <p>{playOptionStates.playDownRight && "Play Down Right"}</p>
                                    <p>{playOptionStates.overlapLeft && "Over Lap Left"}</p>
                                    <p>{playOptionStates.underlapLeft && "Under Lap Left"}</p>
                                    <p>{playOptionStates.underlapRight && "Under Lap Right"}</p>
                                    <p>{playOptionStates.overlapRight && "Over Lap Right"}</p>

                                    <p>{playOptionStates.hitEarlyCrosses && "Hit Early Crosses"}</p>
                                    <p>{playOptionStates.shootOnSight && "Shoot On Sight"}</p>
                                    <p>{playOptionStates.ballIntoBox && "Ball Into Box"}</p>
                                </span>
                            </div>
                            <div className="in-transition option-font" onClick={openInTransition}>
                                <h3>IN TRANSITION</h3>
                            </div>
                            <div className="out-of-possession option-font" onClick={openOutOfPossession}>
                                <h3>OUT OF POSSESSION</h3>
                            </div>
                        </section>
                        <section className="pitch">
                            {selectedFormation === '3-5-2' && generateElement()}
                            {selectedFormation === '4-3-3' && generateElement()}
                            {selectedFormation === '4-4-2' && generateElement()}

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
                                            className={playOptionStates.overlapLeft ? 'options-element-clicked' : 'options-element'}
                                            onClick={() => handleLeftLap('overlapLeft') && handleElementClick('overlapLeft')}>Overlap Left
                                        </span>
                                        <span
                                            className={playOptionStates.underlapLeft ? 'options-element-clicked' : 'options-element'}
                                            onClick={() => handleLeftLap('underlapLeft') && handleElementClick('underlapLeft')}>Underlap Left
                                        </span>
                                        <span className={playOptionStates.underlapRight ? 'options-element-clicked' : 'options-element'} onClick={() => handleElementClick('underlapRight')}>Underlap Right</span>
                                        <span className={playOptionStates.overlapRight ? 'options-element-clicked' : 'options-element'} onClick={() => handleElementClick('overlapRight')}>Overlap Right</span>

                                        <span className={playOptionStates.playDownLeft ? 'options-element-clicked' : 'options-element'} onClick={() => handleElementClick('playDownLeft')}>Focus Play Down The Left</span>
                                        <span className={playOptionStates.playThroughMiddle ? 'options-element-clicked' : 'options-element'} onClick={() => handleElementClick('playThroughMiddle')}>Focus Play Through The Middle</span>
                                        <span className={playOptionStates.playDownRight ? 'options-element-clicked' : 'options-element'} onClick={() => handleElementClick('playDownRight')}>Focus Play Down The Right</span>

                                        <span className={playOptionStates.playOutDef ? 'options-element-clicked' : 'options-element'} onClick={() => handleElementClick('playOutDef')}>Play Out Of Defence</span>
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
                                        <span className={playOptionStates.ballIntoBox ? 'final-third-pitch-element-clicked' : 'final-third-pitch-element'} onClick={() => handleElementClick('ballIntoBox')}>Work Ball Into Box</span>
                                        <span className={playOptionStates.hitEarlyCrosses ? 'final-third-pitch-element-clicked' : 'final-third-pitch-element'} onClick={() => handleElementClick('hitEarlyCrosses')}>Hit Early Crosses</span>
                                        <span className={playOptionStates.shootOnSight ? 'final-third-pitch-element-clicked' : 'final-third-pitch-element'} onClick={() => handleElementClick('shootOnSight')}>Shoot On Sight</span>
                                        <span className={playOptionStates.hitEarlyCrosses ? 'final-third-pitch-element-clicked' : 'final-third-pitch-element'} onClick={() => handleElementClick('hitEarlyCrosses')}>Hit Early Crosses</span>
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
                            {showOutOfPossession && <div className="commands-window">
                                <div className="options-section oop-section">
                                    <h3 className="options-title">DEFENSIVE SHAPE</h3>
                                    <section className="small-pitch oop-pitch">

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
                                    <button className="options-btn final-third-btn">Use Tighter Marking</button>

                                    <h3 className="options-title">TRIGGER PRESS</h3>
                                    <p className="options-chosen">
                                        {triggerPressRange === 0 ? "Much Less Often" : ""}
                                        {triggerPressRange === 1 ? "Slightly Less Often" : ""}
                                        {triggerPressRange === 2 ? "Slightly More Often" : ""}
                                        {triggerPressRange === 3 ? "More Often" : ""}
                                        {triggerPressRange === 4 ? "Much More Often" : ""}
                                    </p>
                                    <input type="range" className="range-input" min="0" max="4" value={triggerPressRange} onChange={handleTriggerPress}/>
                                    <button className="options-btn final-third-btn">Prevent Short GK Distribu...</button>

                                    <h3 className="options-title">TACKLING</h3>
                                    <button className="options-btn final-third-btn">Stay On Feet</button>
                                    <button className="options-btn final-third-btn">Get Stuck It</button>
                                </div>
                                <button className="close-btn" onClick={closeOutOfPossession}>X</button>
                            </div>}
                        </section>
                    </main>
                    <button className="btn">Anuluj</button>
                    <button className="btn">Zapisz</button>
                </span>
            </div>
        </>
    );
}

export default CreateTactic;