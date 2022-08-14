import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handle} type="text" value={props.value} />
      <button onClick={props.click}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
