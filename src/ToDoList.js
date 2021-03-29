import React from "react";
import "./styles.css";

export default function ToDoList({ list }) {
  return (
    <div>
      <ul className="toDoList">
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
