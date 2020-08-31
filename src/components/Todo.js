import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo() {
  const check = <FontAwesomeIcon icon={faCheck} />;
  const trash = <FontAwesomeIcon icon={faTrash} />;

  return (
    <div className="todo">
      <li>This is the list</li>
      <button className="completed" type="submit">
        <i>{check}</i>
      </button>
      <button className="deleted" type="submit">
        <i>{trash}</i>
      </button>
    </div>
  );
}
