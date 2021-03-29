import React, { useState } from "react";
import "./styles.css";

export default function Form({ setList }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setList(value);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
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
