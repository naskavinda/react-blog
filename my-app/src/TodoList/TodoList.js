import React from "react";
import { Todo } from "../Todo/Todo";

export const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo}/>
      ))}
    </div>
  );
};
