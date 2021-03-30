import React from "react";
import "./styles.css";

export default function ToDoList({ list, setList }) {
  console.log(setList);
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <div>
      <ul className="toDoList">
        {list.map((item) => {
          return (
            <li onClick={() => deleteItem(item.id)} key={item.id}>
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
