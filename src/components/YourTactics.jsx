import React, {useState, useEffect} from 'react';
import {db} from '../../firebase-config';
import {collection, deleteDoc, getDocs, getFirestore, doc} from 'firebase/firestore';
import { Link, useHistory } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';

function YourTactics(props) {
    
    const [tactics, setTactics] = useState([]);
    const tacticsCollectionRef = collection(db, "tactics")
    const [user, setUser] = useState("");

    let history = useHistory();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        const getTactics = async () => {
            const data = await getDocs(tacticsCollectionRef)
            setTactics(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getTactics();
    }, [])

    const openDetails = (tacticId) => {
        history.push(`/tacticview/${tacticId}`)
    }

    const deleteTactic = async (tacticId) => {
        const db = getFirestore();
        const tacticRef = doc(db, "tactics", tacticId);

        try {
            await deleteDoc(tacticRef);
            window.location.reload();
        } catch (e) {
            console.error("There is problem with removing your tactic", e);
        }
    }

    return (
        <>
            {tactics.map((tactic) => {
                if (user.email === tactic.author) {
                    return (
                        <section className="all__tactics__wrapper">
                            <article key={tactic.id} onClick={() => openDetails(tactic.id)} className='your__tactic'>
                                <p className='tactic__formation'>{tactic.formation}</p>
                                <span>
                                    <h4 className='tactic__title'>{tactic.title}</h4>
                                    <p className='tactic__body'>{tactic.description}</p>                            
                                </span>
                            </article>
                            <button className='delete__tactic' onClick={() => deleteTactic(tactic.id)}>DELETE</button>
                        </section>
                    );
                } else {
                    console.log('else')
                }
            })}
        </>
    )
}

export default YourTactics;