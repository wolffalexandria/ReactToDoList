import React from "react";
import "./styles.css";

export default function Heading() {
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
