/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from 'react'


export default function 
(props) {
    const capitalFirstLetter=()=>{
        let words = text.split(" ")
        let uppercaseword = ' '
         words.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
         });
         setText(uppercaseword)
    }
    const toUpperCase=()=>{
        // console.log("Uppercase was clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
    } 
    const toLowerCase=()=>{
        // console.log("Lowercase was clicked "+text);
        let newText=text.toLowerCase();
        setText(newText);
    } 
    const toClearText=()=>{
        // console.log("Cleartext was clicked "+text);
        let newText='';
        setText(newText);
    } 
    const removeExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const toCopy=async () => {
        // console.log("Content has been copied")
        await navigator.clipboard.writeText(text);
        alert("text copied successfully");
    }
    const handleOnChange=(event)=>{
        // console.log("Handled on change");
        setText(event.target.value);
    }
    const[text,setText]=useState('');
    //setText("Write here");

     return (
        <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="15" placeholder='Enter text here'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={capitalFirstLetter}>Convert to Capitalize</button>
        <button className="btn btn-primary mx-2" onClick={toUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={toLowerCase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={toCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-2" onClick={toClearText}>Clear Text</button>
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
