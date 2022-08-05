/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from 'react'


export default function 
(props) {
    const toUpperCase=()=>{
        // console.log("Uppercase was clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
    } 
    const toLowerCase=()=>{
        // console.log("Uppercase was clicked "+text);
        let newText=text.toLowerCase();
        setText(newText);
    } 
    const toClearText=()=>{
        // console.log("Uppercase was clicked "+text);
        let newText='';
        setText(newText);
    } 
    const handleOnChange=(event)=>{
        // console.log("Handled on change");
        setText(event.target.value);
    }
    const[text,setText]=useState('Enter Text Here');
    //setText("Write here");

     return (
        <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="15"></textarea>
        </div>
        <button className="btn btn-primary" onClick={toUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={toLowerCase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={toClearText}>Clear Text</button>
    </div>
    <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>It will take around <b>{0.008*text.split(' ').length} minutes</b> to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
