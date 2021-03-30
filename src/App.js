import React, { useState, useEffect } from "react";
import "./styles.css";
import Heading from "./Heading.js";
import Form from "./Form.js";
import ToDoList from "./ToDoList.js";

export default function Container() {
  const [list, setList] = useState([]);
  const addToList = (entry) => {
    setList(list.concat(entry));
  };

  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <section className="container">
      <Heading />
      <Form setList={addToList} />
      <ToDoList list={list} setList={setList} />
    </section>
  );
}
