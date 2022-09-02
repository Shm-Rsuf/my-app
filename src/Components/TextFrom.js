import React, { useState } from 'react'

export default function TextFrom(props) {
    const [text, setText] = useState("");

    const ChangeUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase.!","success");
    }

    const ChangeLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase.!","success");
    }

    const ClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text.!","success");
    }

    const HandleChange = (event) => {
        setText(event.target.value)
    }

    const CapitalizeHandler = () => {
        let newText = text
          .toLowerCase()
          .split(' ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')
        setText(newText);
        props.showAlert("Converted to Capitalized.!","success");
      }

    return (
        <>
            <div className="container" style ={{color: props.mode === "dark" ? "white" : "#041636"}} >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={HandleChange} value={text} rows={9} style ={{backgroundColor: props.mode === "dark" ? "gray" : "white", color: props.mode === "dark" ? "white" : "#041636"}} />
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={ChangeUpCase}>Convert UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={ChangeLoCase}>Convert LowerCase</button>
                <button className="btn btn-dark mx-1 my-1" onClick={ClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={CapitalizeHandler}>Capitalize Text</button>

            </div>

            <div className="container my-4" style ={{color: props.mode === "dark" ? "white" : "#041636"}} >
                <h2>Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
