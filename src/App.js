import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function changeId() {
    setId((id) => id + 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    changeId();
    setTodos([...todos, { inputText, completed: false, id }]);
    setInputText("");
  }

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
