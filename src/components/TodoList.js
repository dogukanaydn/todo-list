import React from "react";
import "../App.css";
import Todo from "./Todo";

export default function TodoList(props) {
  const { todos } = props;
  console.log(todos);

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
