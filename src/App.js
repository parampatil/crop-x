import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import UserInputs from "./components/userinputs/UserInputs";
import "./App.css";
import "tachyons";
import LandingPage from "./components/landingPage/LandingPage";

const App = () => {
  const [active, setActive] = useState("landing");

  const interfaceHandler = (Interface) => {
    setActive(Interface);
  };

  return (
    <div className="container">
      <Navbar activeInterface={interfaceHandler} />
      <div className="h-100 pa4">
        {active === "landing" && <LandingPage />}
        {active === "dashboard" && <Dashboard />}
        {active === "userinput" && <UserInputs />}
      </div>
    </div>
  );
};

export default App;
