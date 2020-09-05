import React from "react";
import "../App.css";
import Todo from "./Todo";
import { useEffect } from "react";

export default function TodoList({ todos, setTodos, setStatus, status }) {
  function showList() {
    if (status === "all") {
      return todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          todos={todos}
          setStatus={setStatus}
          setTodos={setTodos}
          status={status}
        />
      ));
    } else {
      return todos
        .filter((todo) => todo.status === status)
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={todos}
            setStatus={setStatus}
            setTodos={setTodos}
            status={status}
          />
        ));
    }
  }

  return (
    <div className="todo-list">
      <ul>{showList()}</ul>
    </div>
  );
}
