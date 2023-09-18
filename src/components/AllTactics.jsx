import React, {useState, useEffect} from 'react';

function AllTactics(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tactics')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error', error))
    }, [])

    return (
        <>
            {data.map(item => (
                <div className='all__tactics__wrapper'>
                    <article className='single__tactic' key={item.key}>
                        <p className='tactic__formation'>{item.formation}</p>
                        <span>
                            <h4 className='tactic__title'>{item.title}</h4>
                            <p className='tactic__body'>{item.body}</p>
                        </span>
                    </article>
                </div>
            ))}
        </>
    )
}

export default AllTactics;