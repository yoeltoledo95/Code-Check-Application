import React, { useEffect, useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 

const CodeBlockPage = () => {


    const {codeBlockid} = useParams();
    const [codeBlock, setCodeBlock] = useState('');
    const navigate = useNavigate();
    const [value, setValue] = useState();

    useEffect( () => {
        const fetchCodeBlock = async () => {
            const response = await fetch(`http://localhost:5000/api/codeBlocks/${codeBlockid}`)
            const json = await response.json()

            if(response.ok) {
                setCodeBlock(json)
                console.log(response)
                setValue(codeBlock.code)
            }
        }

        fetchCodeBlock()
    }, []);
       
    const handleChange = event => {
        setValue(event.target.value)
    };

    console.log("Solution: " + codeBlock.solution);

    const updateCode = async () => {
        try{
            const response = await axios.patch(`http://localhost:5000/api/codeBlocks/${codeBlockid}`, {
                _id: codeBlock._id,
                id: codeBlock.id,
                title: codeBlock.title,
                code: {value},
                solution: codeBlock.solution,
                counter:0
            })
            console.log(response)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    const handleSubmit = () => {
        if(codeBlock.solution === value){
            updateCode()
            navigate(`/codeBlock/${codeBlockid}`)
            alert(":)")
        }
        else{
            alert("Your answer is not correct :(")
        }
    };

    

    

    return(
        <div>
            <h1>Code Block: {codeBlock ? codeBlock.title : 'Loading...'}</h1>
            <SyntaxHighlighter language="javascript" style={docco}>{codeBlock.code}</SyntaxHighlighter>
            <p><strong>Tip:</strong>{codeBlock.explanation} </p>
             <textarea value={value} onChange={handleChange} rows={10} cols={60}></textarea>
            <button onClick={handleSubmit}>Submit Soluton</button>
            <p>The solution is in the console</p>
            
        </div>
        
    )
};

export default CodeBlockPage;