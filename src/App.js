import { useState } from "react";
import "./App.css";
import AppProvider from "./Components/Context/AppProvider";
import DarkMode from "./Components/DarkMode/DarkMode";
import Goal from "./Components/Goal/Goal";
import GoalInput from "./Components/Input/GoalInput";
import Style from "./Components/StyleElement/Style";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppProvider>
      <Style darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="App">
        <h2>Todo App</h2>
        <section className="goal_input">
          <GoalInput />
        </section>
        <section className="goals">
          <Goal />
        </section>
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </AppProvider>
  );
}

export default App;
