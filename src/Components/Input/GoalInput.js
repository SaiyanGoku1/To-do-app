import React, { useContext, useState } from "react";
import Color from "../ColorData/Color";
import AppContext from "../Context/AppContext";

import Button from "../UI/Button";
import "./GoalInput.css";

const GoalInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const { setData } = useContext(AppContext);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (enteredValue.trim().length >= 2) {
      setIsValid(true);
    }
  };

  const colorCode = Math.round(Math.random() * (Color.length - 1));
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length < 2) {
      setIsValid(false);
      return;
    }
    setData((prevList) => {
      const newData = {
        id: Math.random(),
        goal: enteredValue,
        active: true,
        colorCode: Color[colorCode],
      };
      return [...prevList, newData];
    });
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
          style={{
            backgroundColor: !isValid ? "#e55c2f9c" : "",
          }}
          placeholder={!isValid ? "Invalid Input" : ""}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalInput;
