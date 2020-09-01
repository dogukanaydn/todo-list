import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const plus = <FontAwesomeIcon icon={faPlusSquare} />;

export default function Form(props) {
  const { inputText, handleInputChange, handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button type="submit">
          <i>{plus}</i>
        </button>
        <select className="select" name="status">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
    </div>
  );
}
