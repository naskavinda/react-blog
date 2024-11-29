import React from "react";
import "./Todo.css";

export const Todo = ({ todo }) => {
  return (
    <div className="todo-item">
      {todo}
    </div>
  );
};
