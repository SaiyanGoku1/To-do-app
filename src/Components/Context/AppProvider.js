import React, { useState } from "react";
import AppContext from "./AppContext";
const AppProvider = (props) => {
  const [data, setData] = useState([]);
  return (
    <AppContext.Provider value={{ data, setData }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
