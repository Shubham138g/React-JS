import React, { useState } from "react";

export default function TextForm(props) {
  const handelupClick = () => {
    let NewText = Text.toUpperCase();
    setText(NewText);
  };
  const handelLoClick = () => {
    let NewText = Text.toLowerCase();
    setText(NewText);
  };
  const handelClearClick = () => {
    let NewText = '';
    setText(NewText);
  };

  const handelonChange = (event) => {
    setText(event.target.value);
  };
  const [Text, setText] = useState("");

  return (
    <>
      <div className="container" style={{backgroundColor: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handelonChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'light'}}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handelupClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handelLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handelClearClick}>
          Clear Text
        </button>
      </div>
      <div className="Ccontainer my-3" style={{backgroundColor: props.mode==='dark'?'white':'black'}}>
        <h2>Count Words and Characters</h2>
        <p>
          {Text.split(" ").length} words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} to read</p>
        <p>{Text}</p>
      </div>
    </>
  );
}
