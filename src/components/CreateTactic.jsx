import {useState} from "react";

function CreateTactic() {
    const [selectedFormation, setSelectedFormation] = useState('');

    function handleSelectFormation (e) {
        setSelectedFormation(e.target.value)

        if (e.target.value === "3-5-2") {
            console.log('wybrałeś 3-5-2');
            generateElement()
        } else if (e.target.value === "4-3-3") {
            console.log('wybrałeś 4-3-3');
            generateElement()
        }
    }

    function generateElement () {
        return <h2 className="generator">{selectedFormation}</h2>
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
                        <section id="pitch" className="pitch">
                            {generateElement()}
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