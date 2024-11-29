import "./App.css";
import { TodoInput } from "./TodoInput/TodoInput";
import { useState } from "react";
import { TodoList } from "./TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (input) => {
    setTodos([...todos, input]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="todo-container">
          <TodoInput handleAdd={handleAdd} />
          <hr/>
          <TodoList todos={todos} />
        </div>
      </header>
    </div>
  );
}

export default App;
