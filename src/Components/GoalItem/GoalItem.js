import React, { useContext } from "react";
import "./GoalItem.css";
import Cancel from "../svg/Cancel";
import AppContext from "../Context/AppContext";

const GoalItem = (props) => {
  const { data, setData } = useContext(AppContext);
  const deleteHandler = () => {
    setData((prevData) => {
      return prevData.filter((item) => {
        return item.id !== props.id;
      });
    });
  };

  const activeHandler = () => {
    const updatedData = data.map((item) => {
      if (item.id === props.id) {
        item.active = !item.active;
      }
      return item;
    });
    setData(updatedData);
  };

  
  return (
    <li
      className="goal-item"
      style={{
        backgroundColor: props.colorCode,
      }}
    >
      <input
        type="checkbox"
        className="check_item"
        onChange={activeHandler}
        checked={!props.active ? "checked" : ""}
      />
      <span
        className="goal_text"
        style={{
          color: !props.active ? "#cfc0c0" : "",
          textDecoration: !props.active ? "line-through" : "",
        }}
      >
        {props.children}
      </span>
      <span className="cancel_goal" onClick={deleteHandler}>
        <Cancel />
      </span>
    </li>
  );
};

export default GoalItem;
