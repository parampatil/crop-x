import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import logo from "./transparent cropx logo.png";

const Dashboard = () => {
  const [clockTimeState, setClockTimeState] = useState();
  const [clockDateState, setClockDateState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockTimeState(date.toLocaleTimeString());
      setClockDateState(date.toLocaleDateString());
    }, 1000);
  }, []);

  return (
    <div className="dashboard-container pa4">
      <div className="dashboard_title-container pa2 bg-white br3">
        <h1>
          Welcome to
          <img src={logo}></img>
        </h1>
      </div>
      <div className="dateTime-container grow pa2 br3">
        <h2>Date and Time</h2>
        <p className="tc fw5">
          {clockTimeState}
          <br></br>
          <br></br>
          {clockDateState}
        </p>
      </div>
      <div className="currentWeather-container pa2 grow br3">
        <h2>Current Weather</h2>
        {/* <p className="tc">
          Sunny 32°C<br></br>
          Min - 26°C || Max - 40°C
        </p> */}
      </div>
      <div className="dashInfo-container pa2 grow br3">
        <h2>Info</h2>
      </div>
    </div>
  );
};

export default Dashboard;
