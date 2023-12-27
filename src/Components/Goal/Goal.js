import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";

import GoalItem from "../GoalItem/GoalItem";
import Nav from "../Navigation/Nav";
import "./Goal.css";

const Goal = () => {
  const [navActive, setNavActive] = useState("All");
  let { data } = useContext(AppContext);
  if (navActive === "Completed") {
    data = data.filter((item) => item.active === false);
  } else if (navActive === "Active") {
    data = data.filter((item) => item.active === true);
  }
  return (
    <>
      <Nav navActive={navActive} setNavActive={setNavActive} />
      <ul className="goal-list">
        {data.map((goal) => (
          <GoalItem
            key={goal.id}
            id={goal.id}
            navActive={navActive}
            active={goal.active}
            colorCode={goal.colorCode}
          >
            {goal.goal}
          </GoalItem>
        ))}
      </ul>
    </>
  );
};

export default Goal;
