import React, { useState } from "react";
import "./TodoInput.css";

export const TodoInput = ({ handleAdd }) => {
  const [input, setInput] = useState("");

  const onchangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    handleAdd(input);
    setInput("");
  };

  return (
    <div>
      <input
        placeholder="Add a new task"
        value={input}
        onChange={onchangeHandler}
        className="input-field"
      />
      <button onClick={onClickHandler} className="add-button">
        Add
      </button>
    </div>
  );
};
