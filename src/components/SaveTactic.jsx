import React, {createContext, useState} from 'react';

function SaveTactic({showSaveTactic, closeSaveTactic, saveTactic, tacticTitle, tacticDescription, setTacticDescription, setTacticTitle}) {

    return (
        <>
            {showSaveTactic && <div className="save__tactic__window">
                <label className='tactic__label' htmlFor="tactic__title">Title</label>
                <input className='tactic__title' type="text" id="tactic__title" maxLength="40" onChange={(e) => {setTacticTitle(e.target.value)}}/>

                <label className='tactic__label' htmlFor="tactic__description">Description</label>
                <textarea className='tactic__description' id="tactic__description" maxLength="220" onChange={(e) => {setTacticDescription(e.target.value)}}/>

                <span className="save__tactic__btn-wrapper">
                    <button className="save__tactic__btn" onClick={closeSaveTactic}>Cancel</button>
                    <button className="save__tactic__btn" onClick={saveTactic}>Save</button>
                </span>
            </div>}
        </>
    );
}

export default SaveTactic;