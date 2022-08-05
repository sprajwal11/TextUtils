/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from 'react'


export default function 
(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
    } 
    const handleOnChange=(event)=>{
        // console.log("Handled on change");
        setText(event.target.value);
    }
    const[text,setText]=useState('Enter Text Here');
    //setText("Write here");

     return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="15"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
