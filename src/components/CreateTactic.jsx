import {createElement, useState} from "react";
import InTransition from "./InTransition.jsx";
import InPossession from "./InPossession.jsx";
import OutOfPossession from "./OutOfPossession.jsx";

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



     })

    const [playOutDef, setPlayOutDef] = useState(false);

    const [secondLineOptions, setSecondLineOptions] = useState({
        playDownLeft: false,
        playThroughMiddle: false,
        playDownRight: false,
    })

    const [leftLapStates, setLeftLapStates] = useState({
        overlapLeft: false,
        underlapLeft: false,
    });

    const [rightLapStates, setRightLapStates] = useState({
        overlapRight: false,
        underlapRight: false,
    });

    const [finishing, setFinishing] = useState({
        hitEarlyCrosses: false,
        shootOnSight: false,
        ballIntoBox: false,
    })

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

    const handleElementClick = (element) => {
        setPlayOptionStates((prevStates) => ({
            ...prevStates,
            [element]: !prevStates[element],
        }));
    };

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

    const handlePlayOutDef = () => {
        setPlayOutDef(false);
        setPlayOutDef(!playOutDef);
    }

    const handleMiddle = (clickedOption) => {
        setSecondLineOptions((prevState) => ({
            playDownLeft: (clickedOption === 'playDownLeft' && !prevState.playDownLeft) || (clickedOption === 'playDownRight' && prevState.playDownLeft) ? true : false,
            playThroughMiddle: clickedOption === 'playThroughMiddle' && !prevState.playThroughMiddle,
            playDownRight: (clickedOption === 'playDownRight' && !prevState.playDownRight) || (clickedOption === 'playDownLeft' && prevState.playDownRight) ? true : false,
        }));
    };

    const handleLeftLap = (clickedOption) => {
        setLeftLapStates((prevState) => ({
            ...prevState,
            overlapLeft: prevState.overlapLeft === false && clickedOption === 'overlapLeft',
            underlapLeft: prevState.underlapLeft === false && clickedOption === 'underlapLeft',
        }));
    };

    const handleRightLap = (clickedOption) => {
        setRightLapStates((prevState) => ({
            ...prevState,
            overlapRight: prevState.overlapRight === false && clickedOption === 'overlapRight',
            underlapRight: prevState.underlapRight === false && clickedOption === 'underlapRight',
        }));
    };

    const handleFinishing = (clickedOption) => {
        setFinishing((prevState) => ({
            shootOnSight: (clickedOption === 'shootOnSight' && !prevState.shootOnSight) || (clickedOption === 'hitEarlyCrosses' && prevState.shootOnSight) ? true : false,
            ballIntoBox: clickedOption === 'ballIntoBox' && !prevState.ballIntoBox,
            hitEarlyCrosses: (clickedOption === 'hitEarlyCrosses' && !prevState.hitEarlyCrosses) || (clickedOption === 'shootOnSight' && prevState.hitEarlyCrosses) ? true : false,
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

                                    <p>{playOutDef && "Play Out Def"}</p>
                                    <p>{secondLineOptions.playDownLeft && "Play Down Left"}</p>
                                    <p>{secondLineOptions.playThroughMiddle && "Play Through Middle"}</p>
                                    <p>{secondLineOptions.playDownRight && "Play Down Right"}</p>
                                    <p>{leftLapStates.overlapLeft && "Over Lap Left"}</p>
                                    <p>{leftLapStates.underlapLeft && "Under Lap Left"}</p>
                                    <p>{rightLapStates.underlapRight && "Under Lap Right"}</p>
                                    <p>{rightLapStates.overlapRight && "Over Lap Right"}</p>

                                    <p>{finishing.hitEarlyCrosses && "Hit Early Crosses"}</p>
                                    <p>{finishing.shootOnSight && "Shoot On Sight"}</p>
                                    <p>{finishing.ballIntoBox && "Ball Into Box"}</p>
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

                            <InPossession
                                showInPossession={showInPossession}
                                widthRange={widthRange}
                                handleRange={handleRange}
                                approachPlayHandle={approachPlayHandle}
                                approachPlay={approachPlay}
                                leftLapStates={leftLapStates}
                                handleLeftLap={handleLeftLap}
                                handleElementClick={handleElementClick}
                                rightLapStates={rightLapStates}
                                handleRightLap={handleRightLap}
                                secondLineOptions={secondLineOptions}
                                passRange={passRange}
                                handlePass={handlePass}
                                tempoRange={tempoRange}
                                handleTempo={handleTempo}
                                timeWasteRange={timeWasteRange}
                                handleTimeWaste={handleTimeWaste}
                                handleMiddle={handleMiddle}
                                playOutDef={playOutDef}
                                handlePlayOutDef={handlePlayOutDef}
                                finishing={finishing}
                                handleFinishing={handleFinishing}
                                setPieces={setPieces}
                                playForSetPieces={playForSetPieces}
                                dribbleLess={dribbleLess}
                                setDribbleLess={setDribbleLess}
                                isSecondPressed={isSecondPressed}
                                setIsSecondPressed={setIsSecondPressed}
                                isMoreExpressive={isMoreExpressive}
                                setIsMoreExpressive={setIsMoreExpressive}
                                IsMoreDisciplined={IsMoreDisciplined}
                                setIsMoreDisciplined={setIsMoreDisciplined}
                                closeInPossession={closeInPossession}
                            />
                            <InTransition
                                showInTransition={showInTransition}
                                closeInTransition={closeInTransition}
                            />

                            <OutOfPossession
                                showOutOfPossession={showOutOfPossession}
                                defensiveWidthRange={defensiveWidthRange}
                                triggerPressRange={triggerPressRange}
                                closeOutOfPossession={closeOutOfPossession}
                                handleDefensiveWidth={handleDefensiveWidth}
                                handleTriggerPress={handleTriggerPress}
                            />
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