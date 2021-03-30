import React from "react";
import "./styles.css";
import setList from "./App.js";

export default function ToDoList({ list }) {
  const deleteItem = (item) => {
    setList(
      list.filter((item) => {
        return !item.id;
      })
    );
  };
  return (
    <div>
      <ul className="toDoList">
        {list.map((item) => {
          return (
            <li onClick={deleteItem} key={item.id}>
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
