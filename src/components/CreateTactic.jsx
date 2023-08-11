import {createElement, useState} from "react";

function CreateTactic() {
    const [selectedFormation, setSelectedFormation] = useState('');
    const [selectedRole, setSelectedRole] = useState('');

    function handleSelectFormation(e) {
        setSelectedFormation(e.target.value);

        if (e.target.value === "3-5-2") {
            generateElement();
        } else if (e.target.value === "4-3-3") {
            generateElement();
        } else if (e.target.value === "") {
            console.log("Wybierz formację")
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
                                createElement('option', { value: 'option1', key: 'option1' }, 'Opcja 1'),
                                createElement('option', { value: 'option2', key: 'option2' }, 'Opcja 2'),
                                // Dodaj więcej opcji dla pierwszej klasy
                            ];
                        } else if (i === 2) {
                            return [
                                createElement('option', {value: 'option3', key: 'option3'}, 'Opcja 3'),
                                createElement('option', {value: 'option4', key: 'option4'}, 'Opcja 4'),
                                // Dodaj więcej opcji dla drugiej klasy
                            ];
                        }
                        return null;
                    })()
                );
                arr.push(player, position);
            }
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
                                createElement('option', {value: 'GK433', key: 'option8'}, "Bramkarz"),
                                createElement('option', {value: 'GKL433', key: 'option8'}, "Bramkarz-libero")
                            ];
                        } else if (i === 2) {
                            return [
                                createElement('option', {value: 'option9', key: 'option9'}, "Option 9")
                            ];
                        }
                        return null;
                    })()
                );
                arr.push(player, position);
            }
        }
        return arr;
    }



    return (
        <>
            <div className="container">
                <span className="tactic__wrapper">
                    <label htmlFor="formations" className="formation">Choose your formation:</label>
                    <select value={selectedFormation} onChange={handleSelectFormation} name="formations" className="formation-select" id="formations">
                        <option id="option1" className="formation-select__item"></option>
                        <option id="option2" className="formation-select__item" value="3-5-2">3-5-2</option>
                        <option id="option3" className="formation-select__item" value="4-2-2-2 DP Wąsko">4-2-2-2 DP Wąsko</option>
                        <option id="option4" className="formation-select__item" value="4-2-3-1">4-2-3-1</option>
                        <option id="option5" className="formation-select__item" value="4-3-3">4-3-3</option>
                    </select>
                    <main className="tactics">
                        <section className="options">
                            <label htmlFor="mentality" className="mentality option-font">Mentality</label>
                            <select name="mentality-select" className="mentality-select option-font" id="mentality">
                                <option value="">very defensive</option>
                                <option value="">defensive</option>
                                <option value="">standard</option>
                                <option value="">positive</option>
                                <option value="">offensive</option>
                                <option value="">very offensive</option>
                            </select>

                            <div className="in-possession option-font">IN POSSESSION</div>
                            <div className="in-transition option-font">IN TRANSITION</div>
                            <div className="out-of-possession option-font">OUT OF POSSESSION</div>
                        </section>
                        <section className="pitch">
                            {selectedFormation && (
                                <div>
                                    {selectedFormation === '3-5-2' && generateElement()}
                                    {selectedFormation === '4-3-3' && generateElement()}
                                </div>
                            )}
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