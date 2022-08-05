/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from 'react'


export default function 
(props) {
    const[text,setText]=useState('Enter Text Here');
    //setText("Write here");

     return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="mybox" rows="15"></textarea>
        </div>
        <button className="btn btn-primary">Convert to Uppercase</button>
    </div>
  )
}
