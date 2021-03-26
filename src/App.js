import React, { useState } from "react";
import "./styles.css";

function Heading() {
  return (
    <div className="heading">
      <img
        className="heading__img"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"
        alt="Doodle of Laptop"
      ></img>
      <h1 className="heading__title">To-Do List</h1>
    </div>
  );
}

function Form({ setList }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className="form">
      <div>
        <label className="form__label">~ Today I need to ~</label>
        <input
          className="form__input"
          type="text"
          id="todo"
          name="to-do"
          size="30"
          required
          value={value}
          onChange={handleChange}
        ></input>
        <button className="button">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
function ToDoList({ list }) {
  console.log(list);
  return (
    <div>
      <ul className="toDoList"></ul>
    </div>
  );
}
export default function Container() {
  const [list, setList] = useState(["test"]);
  return (
    <section className="container">
      <Heading />
      <Form />
      <ToDoList list={list} />
    </section>
  );
}
