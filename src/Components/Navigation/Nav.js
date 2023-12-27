import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import Button from "../UI/Button";
import "./Nav.css";

const Nav = ({ navActive, setNavActive }) => {
    const { data, setData } = useContext(AppContext);

    const deleteCompletedTaskHandler = () => {
      const updatedData = data.filter((item) => item.active === true);
      setData(updatedData);
    };
  const arr = ["All", "Active", "Completed"];
  return (
    <div className="nav">
      {arr.map((item) => (
        <Button
          key={item}
          onClick={() => setNavActive(item)}
          className={navActive === item ? "active" : ""}
        >
          {item}
        </Button>
      ))}
      <Button className="delete_goal" onClick={deleteCompletedTaskHandler}>Delete Completed</Button>
    </div>
  );
};

export default Nav;
