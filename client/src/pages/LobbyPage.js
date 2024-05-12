import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LobbyPage = () => {

    const[codeBlocks, setCodeBlocks] = useState(null);

    useEffect( () => {
        const fetchCodeBlocks = async () => {
            const response = await fetch("http://localhost:5000/api/codeBlocks")
            const json = await response.json()

            if(response.ok) {
                setCodeBlocks(json)
                console.log(response)
            }
        }

        fetchCodeBlocks()
    }, []);

    console.log(codeBlocks);



    return (
        <div className='LobbyPage'>
            <h1>Choose Code Block</h1>
            <div className='codeBlocks'>
                {codeBlocks && codeBlocks.map((codeBlock) => (
                    <p key={codeBlock._id}><Link to={`/codeBlock/${codeBlock._id}`} state={{codeBlocks}}>{codeBlock.title}</Link></p>
                ))}
            </div>
        </div>
    );
};

export default LobbyPage;