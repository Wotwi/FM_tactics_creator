import React, {useState, useEffect} from 'react';
import {db} from '../../firebase-config';
import {collection, getDocs} from 'firebase/firestore';

function AllTactics(props) {
    const [tactics, setTactics] = useState([]);
    const tacticsCollectionRef = collection(db, "tactics")

    useEffect(() => {
        const getTactics = async () => {
            const data = await getDocs(tacticsCollectionRef)
            setTactics(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getTactics();
    }, [])

    return (
        <>
            {tactics.map((tactic) => {
                return (
                    <section className="all__tactics__wrapper">
                        <article className='single__tactic'>
                            <p className='tactic__formation'>{tactic.formation}</p>
                            <span>
                                <h4 className='tactic__title'>{tactic.title}</h4>
                                <p className='tactic__body'>{tactic.description}</p>                            
                            </span>
                        </article>
                    </section>
                );
            })}
        </>
    )
}

export default AllTactics;