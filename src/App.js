import React, { useState } from "react";
import "./styles.css";
import Heading from "./Heading.js";
import Form from "./Form.js";
import ToDoList from "./ToDoList.js";

export default function Container() {
  const [list, setList] = useState([]);
  const addToList = (entry) => {
    setList(list.concat(entry));
  };
  return (
    <section className="container">
      <Heading />
      <Form setList={addToList} />
      <ToDoList list={list} />
    </section>
  );
}
