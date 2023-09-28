import React, { createElement, useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { doc, collection, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import shirt3 from "../assets/shirt3.png";

function TacticView({ selectedFormation }) {

    const { id } = useParams();
    const [tactic, setTactic] = useState(null);

    useEffect(() => {
        const tacticDocRef = doc(db, "tactics", id);

        const getTacticData = async () => {
            const docSnap = await getDoc(tacticDocRef);
            if (docSnap.exists()) {
                setTactic({ ...docSnap.data(), id: docSnap.id })
            }
        };

        getTacticData();
    }, [id]);

    if (!tactic) {
        return <div>Loading...</div>;
    }

    function generateElement() {
        const arr = [];

        if (tactic.formation === "3-5-2") {
            for (let i = 1; i <= 11; i++) {
                const player = createElement(
                    'img',
                    {className: `formation-352-${[i]}`, src: shirt3}
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
        } else if (tactic.formation === "4-3-3") {
            for (let i = 1; i <= 11; i++) {
                const player = createElement(
                    'img',
                    {className: `formation-433-${[i]}`, src: shirt3}
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
        } else if (tactic.formation === "4-4-2") {
            for (let i = 1; i <= 11; i++) {
                const player = createElement(
                    'img',
                    {className: `formation-442-${[i]}`, src: shirt3}
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
        } else if (tactic.formation === "4-2-3-1") {
            for (let i = 1; i <= 11; i++) {
                const player = createElement(
                    'img',
                    {className: `formation-4231-${[i]}`, src: shirt3}
                );
                const position = createElement(
                    'select',
                    {className: `position-4231-${[i]}`},
                    (() => {
                        if (i === 1) {
                            return [
                                createElement('option', {value: "option1"}, "Goalkeeper"),
                                createElement('option', {value: "option2"}, "Goalkeeper-libero"),
                            ];
                        } else if (i === 2 || i === 5) {
                            return [
                                createElement('option', {value: "option3"}, "Full Back"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                            ];
                        } else if (i === 3 || i === 4) {
                            return [
                                createElement('option', {value: "option3"}, "Central Defender"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                            ];
                        } else if (i === 6 || i === 7) {
                            return [
                                createElement('option', {value: "option3"}, "Central Midfielder"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                            ];
                        } else if (i ===  8) {
                            return [
                                createElement('option', {value: "option3"}, "Advanced Playmaker"),
                                createElement('option', {value: "option4"}, "Opcja 4")
                            ];
                        } else if (i === 9 || i === 10) {
                            return [
                                createElement('option', {value: "option3"}, "Winger"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
                            ];
                        } else if (i === 11) {
                            return [
                                createElement('option', {value: "option3"}, "Advanced Forward"),
                                createElement('option', {value: "option4"}, "Opcja 4"),
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

    return (
        <>
            <div key={tactic.id} className="container">
                <span className="tactic__wrapper__preview tactic__wrapper">
                    <h2 className="formation">Formation: {tactic.formation}</h2>
                    <main className="tactics__preview tactics">
                        <section className="preview__pitch">
                            {tactic.formation === '4-2-3-1' && generateElement()}
                            {tactic.formation === '3-5-2' && generateElement()}
                            {tactic.formation === '4-3-3' && generateElement()}
                            {tactic.formation === '4-4-2' && generateElement()}
                        </section>
                        <section className="options">
                            <label htmlFor="mentality" className="mentality option-font">Mentality</label>
                            <p className="mentality-select option-font">{tactic.mentality}</p>

                            <div className="in-possession option-font">
                                <h3 className="options-title">IN POSSESSION</h3>
                                <span className="displayed-options">

                                    <p>{tactic.widthRange === 0 ? "Very tight" : ""}</p>
                                    <p>{tactic.widthRange === 1 ? "Tight" : ""}</p>
                                    <p>{tactic.widthRange === 2 ? "" : ""}</p>
                                    <p>{tactic.widthRange === 3 ? "Wide" : ""}</p>
                                    <p>{tactic.widthRange === 4 ? "Very wide" : ""}</p>
                                    <p>{tactic.approachPlay && "Approach Play"}</p>
                                    <p>{tactic.passRange === 0 ? "Very short" : ""}</p>
                                    <p>{tactic.passRange === 1 ? "Short" : ""}</p>
                                    <p>{tactic.passRange === 2 ? "" : ""}</p>
                                    <p>{tactic.passRange === 3 ? "Long" : ""}</p>
                                    <p>{tactic.passRange === 4 ? "Very long" : ""}</p>
                                    <p>{tactic.tempoRange === 0 ? "V Slow" : ""}</p>
                                    <p>{tactic.tempoRange === 1 ? "Slow" : ""}</p>
                                    <p>{tactic.tempoRange === 2 ? "" : ""}</p>
                                    <p>{tactic.tempoRange === 3 ? "Fast" : ""}</p>
                                    <p>{tactic.tempoRange === 4 ? "V Fast" : ""}</p>
                                    <p>{tactic.timeWasteRange === 0 ? "" : ""}</p>
                                    <p>{tactic.timeWasteRange === 1 ? "Waste Time Sometimes" : ""}</p>
                                    <p>{tactic.timeWasteRange === 2 ? "Waste Time Whenever" : ""}</p>
                                    <p>{tactic.playForSetPieces && "Play For Set Pieces"}</p>
                                    <p>{tactic.dribbleLess && "Dribble Less"}</p>
                                    <p>{tactic.isSecondPressed && "Run At Defence"}</p>
                                    <p>{tactic.isMoreExpressive && "Be More Expressive"}</p>
                                    <p>{tactic.IsMoreDisciplined && "Be More Disciplined"}</p>

                                    <p>{tactic.playOutDef && "Play Out Def"}</p>
                                    <p>{tactic.secondLineOptions.playDownLeft && "Play Down Left"}</p>
                                    <p>{tactic.secondLineOptions.playThroughMiddle && "Play Through Middle"}</p>
                                    <p>{tactic.secondLineOptions.playDownRight && "Play Down Right"}</p>
                                    <p>{tactic.leftLapStates.overlapLeft && "Over Lap Left"}</p>
                                    <p>{tactic.leftLapStates.underlapLeft && "Under Lap Left"}</p>
                                    <p>{tactic.rightLapStates.underlapRight && "Under Lap Right"}</p>
                                    <p>{tactic.rightLapStates.overlapRight && "Over Lap Right"}</p>

                                    <p>{tactic.crossType}</p>

                                    <p>{tactic.finishing.hitEarlyCrosses && "Hit Early Crosses"}</p>
                                    <p>{tactic.finishing.shootOnSight && "Shoot On Sight"}</p>
                                    <p>{tactic.finishing.ballIntoBox && "Ball Into Box"}</p>

                                </span>
                            </div>
                            <div className="in-transition option-font">
                                <h3>IN TRANSITION</h3>
                                <span className="displayed-options">

                                    <p>{tactic.counterPress && "Counter Press"}</p>
                                    <p>{tactic.regroup && "Regroup"}</p>
                                    <p>{tactic.counter && "Counter"}</p>
                                    <p>{tactic.holdShape && "Hold Shape"}</p>
                                    <p>{tactic.distributeQuickly && "Distribute Quickly"}</p>
                                    <p>{tactic.slowPaceDown && "Slow Pace Down"}</p>
                                    <p>{tactic.distributionType.rollItOut && "Roll It Out"}</p>
                                    <p>{tactic.distributionType.throwItLong && "Throw It Long"}</p>
                                    <p>{tactic.distributionType.takeShortKicks && "Take Short Kicks"}</p>
                                    <p>{tactic.distributionType.takeLongKicks && "Take Long Kicks"}</p>
                                    <p>{tactic.distributeToCentreBacks && "Distribute To Centre Backs"}</p>
                                    <p>{tactic.distributeToFullBacks && "Distribute To Full Backs"}</p>
                                    <p>{tactic.distributeToFlanks && "Distrtibute To Flanks"}</p>
                                    <p>{tactic.distributeToPlaymaker && "Distribute To Playmaker"}</p>
                                    <p>{tactic.distributeToTarget && "Distribute To Target"}</p>
                                    <p>{tactic.distributeOverDefence && "Distribute Over Opposition Defence"}</p>

                                </span>
                            </div>
                            <div className="out-of-possession option-font">
                                <h3>OUT OF POSSESSION</h3>
                                <span className="displayed-options">

                                    <p>{tactic.tighterMarking && "Tighter Marking"}</p>
                                    <p>{tactic.triggerPressRange === 0 && "Much Less Often"}</p>
                                    <p>{tactic.triggerPressRange === 1 && "Slightly Less Often"}</p>
                                    <p>{tactic.triggerPressRange === 2 && ""}</p>
                                    <p>{tactic.triggerPressRange === 3 && "More Often"}</p>
                                    <p>{tactic.triggerPressRange === 4 && "Much More Often"}</p>
                                    <p>{tactic.preventShortGK && "Prevent Short GK Distribution"}</p>
                                    <p>{tactic.stayOnFeet && "Stay On Feet"}</p>
                                    <p>{tactic.getStuckIn && "Get Stuck In"}</p>
                                    <p>{tactic.defensiveWidthRange === 0 && "Force Opposition Outside"}</p>
                                    <p>{tactic.defensiveWidthRange === 2 && "Force Opposition Inside"}</p>

                                </span>

                            </div>
                        </section>
                    </main>
                </span>
            </div>
        </>
    );
}

export default TacticView;