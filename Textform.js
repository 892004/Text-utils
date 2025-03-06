import React, { useState } from "react";
export default function Textform(props) {
    const uppercase = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const uppercaseOnChange = (event)=>{
        setText(event.target.value);
    }

    const lowercase = ()=>{
        let newtext2 = text.toLowerCase();
        setText(newtext2)
    }
  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">        
        <textarea className="form-control" id="mybox" value={text} onChange={uppercaseOnChange} rows="8"></textarea>
      </div>
      <br />
      <button className="btn-primary mx-3" onClick={uppercase}>Convert To upperCase</button>
      <button className="btn-primary2 mx-3" onClick={lowercase}>Convert To lowercase</button>
    </div>

    <div className="container my-5 ">
        <h1>Your Text Summary</h1>
        <p><b>{text.split(" ").length}</b> words <b>{text.length} </b>character</p>
        <p><b>{0.008 * text.split(" ").length} </b>Minute Read </p>
        <h3>preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
