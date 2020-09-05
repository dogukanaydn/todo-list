import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todo, todos, setTodos, setStatus, status }) {
  // Icons
  const check = <FontAwesomeIcon icon={faCheck} />;
  const trash = <FontAwesomeIcon icon={faTrash} />;
  /////////

  function handleComplete() {
    if (todo.status === "completed") {
      setStatus((todo.status = "uncompleted"));
    } else if (todo.status === "uncompleted" || todo.status === "all") {
      setStatus((todo.status = "completed"));
    }
  }

  function handleDelete() {
    setTodos(todos.filter((i) => i.id !== todo.id));
  }

  return (
    <div className="todo">
      <li
        className={`todo-item ${
          todo.status === "completed" ? "completed" : ""
        }`}
      >
        {todo.inputText}
      </li>
      <button className="btn-check" type="submit" onClick={handleComplete}>
        <i>{check}</i>
      </button>
      <button className="btn-trash" type="submit" onClick={handleDelete}>
        <i>{trash}</i>
      </button>
    </div>
  );
}
