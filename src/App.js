import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [id, setId] = useState(1);
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [todos, setTodos] = useState([]);

  function handleInput(event) {
    setInputText(event.target.value);
  }
  function handleStatus(event) {
    setStatus(event.target.value);
  }
  function handleId() {
    setId((id) => id + 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleId();
    setTodos([...todos, { id, inputText, status }]);
    setInputText("");
  }

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>

      <Form
        inputText={inputText}
        status={status}
        handleInput={handleInput}
        handleStatus={handleStatus}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        setStatus={setStatus}
        setTodos={setTodos}
        status={status}
      />
    </div>
  );
}

export default App;
