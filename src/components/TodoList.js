import React from "react";
import "../App.css";

import Todo from "./Todo";

export default function TodoList() {
  return (
    <div className="todo-list">
      <ul>
        <Todo />
      </ul>
    </div>
  );
}
