import {createElement, useState} from "react";

function CreateTactic() {
    const [selectedFormation, setSelectedFormation] = useState('');
    const [showInPossession, setShowInPossession] = useState(false);

    const [widthRange, setWidthRange] = useState(2)
    const [passRange, setPassRange] = useState(2)
    const [tempoRange, setTempoRange] = useState(2)
    const [timeWasteRange, setTimeWasteRange] = useState(2)

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
                    { className: `formation-352-${[i]}`, src: "src/assets/shirt3.png" }
                );
                const position = createElement(
                    'select',
                    { className: `position-352-${[i]}` },
                    (() => {
                        if (i === 1) {
                            return [
                                createElement('option', { value: "option1"}, "Goalkeeper"),
                                createElement('option', { value: "option2"}, "Goalkeeper-libero"),
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
                    { className: `formation-433-${[i]}`, src: "src/assets/shirt3.png"}
                );
                const position = createElement(
                    'select',
                    { className: `position-433-${[i]}` },
                    (() => {
                        if (i === 1) {
                            return [
                                createElement('option', { value: "option1"}, "Goalkeeper"),
                                createElement('option', { value: "option2"}, "Goalkeeper-libero"),
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
                    { className: `formation-442-${[i]}`, src: "src/assets/shirt3.png"}
                );
                const position = createElement(
                    'select',
                    { className: `position-442-${[i]}` },
                    (() => {
                        if (i === 1) {
                            return [
                                createElement('option', { value: "option1"}, "Goalkeeper"),
                                createElement('option', { value: "option2"}, "Goalkeeper-libero"),
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
                        } else if ( i === 6 || i === 9) {
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

    function openInPossession () {
        setShowInPossession(true);
    }

    function closeInPossession () {
        setShowInPossession(false);
    }

    function handleRange (e) {
        setWidthRange(parseInt(e.target.value, 10))
    }
    function handlePass (e) {
        setPassRange(parseInt(e.target.value, 10))
    }
    function handleTempo (e) {
        setTempoRange(parseInt(e.target.value, 10))
    }
    function handleTimeWaste (e) {
        setTimeWasteRange(parseInt(e.target.value, 10))
    }

    return (
        <>
            <div className="container">
                <span className="tactic__wrapper">
                    <label htmlFor="formations" className="formation">Choose your formation:</label>
                    <select value={selectedFormation} onChange={handleSelectFormation} name="formations" className="formation-select" id="formations">
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

                            <div className="in-possession option-font" onClick={openInPossession}>IN POSSESSION</div>
                            <div className="in-transition option-font">IN TRANSITION</div>
                            <div className="out-of-possession option-font">OUT OF POSSESSION</div>
                        </section>
                        <section className="pitch">
                                    {selectedFormation === '3-5-2' && generateElement()}
                                    {selectedFormation === '4-3-3' && generateElement()}
                                    {selectedFormation === '4-4-2' && generateElement()}

                                    {showInPossession && <div className="commands-window">
                                        <div className="in-possession-part">
                                            <h3 className="options-title">ATTACKING WIDTH</h3>
                                            <p className="options-chosen">
                                                {widthRange === 0 ? "Very tight" : ""}
                                                {widthRange === 1 ? "Tight" : ""}
                                                {widthRange === 2 ? "Standard" : ""}
                                                {widthRange === 3 ? "Wide" : ""}
                                                {widthRange === 4 ? "Very wide" : ""}
                                            </p>
                                            <input className="range-input" type="range" min="0" max="4" value={widthRange} onChange={handleRange}/>
                                        </div>
                                        <div className="in-possession-part">
                                            <h3 className="options-title">APPROACH PLAY</h3>
                                            <button className="options-btn">Pass Into Space</button>

                                            <section className="small-pitch">
                                                <span className="options-element">Overlap Left</span>
                                                <span className="options-element">Underlap Left</span>
                                                <span className="options-element">Underlap Right</span>
                                                <span className="options-element">Overlap Right</span>

                                                <span className="options-element">Focus Play Down The Left</span>
                                                <span className="options-element">Focus Play Through The Middle</span>
                                                <span className="options-element">Focus Play Down The Right</span>

                                                <span className="options-element">Play Out Of Defence</span>
                                            </section>

                                            <h3 className="options-title">PASSING DIRECTNESS</h3>
                                            <p className="options-chosen">
                                                {passRange === 0 ? "Very short" : ""}
                                                {passRange === 1 ? "Short" : ""}
                                                {passRange === 2 ? "Standard" : ""}
                                                {passRange === 3 ? "Long" : ""}
                                                {passRange === 4 ? "Very long" : ""}
                                            </p>
                                            <input className="range-input" type="range" min="0" max="4" value={passRange} onChange={handlePass}/>

                                            <h3 className="options-title">TEMPO</h3>
                                            <p className="options-chosen">
                                                {tempoRange === 0 ? "V Slow" : ""}
                                                {tempoRange === 1 ? "Slow" : ""}
                                                {tempoRange === 2 ? "Standard" : ""}
                                                {tempoRange === 3 ? "Fast" : ""}
                                                {tempoRange === 4 ? "V Fast" : ""}
                                            </p>
                                            <input className="range-input" type="range" min="0" max="4" value={tempoRange} onChange={handleTempo}/>

                                            <h3 className="options-title">TIME WASTING</h3>
                                            <p className="options-chosen">
                                                {timeWasteRange === 0 ? "1" : ""}
                                                {timeWasteRange === 1 ? "2" : ""}
                                                {timeWasteRange === 2 ? "Never" : ""}
                                                {timeWasteRange === 3 ? "4" : ""}
                                                {timeWasteRange === 4 ? "5" : ""}
                                            </p>
                                            <input className="range-input" type="range" min="0" max="4" value={timeWasteRange} onChange={handleTimeWaste}/>
                                        </div>
                                        <div className="in-possession-part">
                                            <h3 className="options-title final-third-title">FINAL THIRD</h3>
                                            <select className="cross-select" name="" id="">
                                                <option value="Low Crosses">Low Crosses</option>
                                                <option value="Medium Crosses">Medium Crosses</option>
                                                <option value="High Crosses">High Crosses</option>
                                            </select>

                                            <section className="small-pitch">

                                            </section>
                                            <button className="options-btn final-third-btn">Play For Set Pieces</button>

                                            <h3 className="options-title final-third-title">DRIBBLING</h3>
                                            <button className="options-btn final-third-btn">Dribble Less</button>
                                            <button className="options-btn final-third-btn">Run At Defence</button>

                                            <h3 className="options-title final-third-title">CREATIVE FREEDOM</h3>
                                            <button className="options-btn final-third-btn">Be More Expressive</button>
                                            <button className="options-btn final-third-btn">Be More Desciplined</button>
                                        </div>
                                        <button className="close-btn" onClick={closeInPossession}>X</button>
                                    </div> }
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