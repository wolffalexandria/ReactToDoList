import React, { useState } from "react";
import "./styles.css";

export default function Form({ setList }) {
  const [value, setValue] = useState({ text: "" });
  const handleChange = (e) => {
    const entry = {
      text: e.target.value,
      id: String(Date.now())
    };
    setValue(entry);
  };
  const onSubmit = (e) => {
    setValue({ text: "" });
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
          value={value.text}
          onChange={handleChange}
        ></input>
        <button className="button">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
