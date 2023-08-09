function CreateTactic() {
    return (
        <>
            <div className="container">
                <span className="tactic__wrapper">
                    <label htmlFor="formations" className="formation">Choose your formation:</label>
                    <select name="formations" className="formation-select" id="formations">
                        <option className="formation-select__item" value="3-5-2">3-5-2</option>
                        <option className="formation-select__item" value="4-2-2-2 DP Wąsko">4-2-2-2 DP Wąsko</option>
                        <option className="formation-select__item" value="4-2-3-1">4-2-3-1</option>
                        <option className="formation-select__item" value="4-3-3">4-3-3</option>
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