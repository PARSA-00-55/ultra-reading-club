import React from "react";
import Profile from "../profile/Profile";
import { useState, useEffect } from "react";
import "./Aside.css";

const Aside = ({ subj }) => {
  let total = 0;
  for (const item of subj) {
    total = total + item.time;
  }

  // use state for break time Start ...
  const [breakTime, setBreakTime] = useState(0);
  // use state for break time end ...

  // Set Break Time ON Local Storage Start.
  useEffect(() => {
    if (breakTime !== 0) {
      localStorage.setItem("break-time", breakTime);
    }
  }, [breakTime]);
  // Set Break Time ON Local Storage End.

  // Get Break Time ON Local Storage Start.
  useEffect(() => {
    const storedTime = localStorage.getItem("break-time");
    if (storedTime) {
      setBreakTime(storedTime);
    }
  }, []);
  // Get Break Time ON Local Storage End.
  const clickBreakTime = (time) => {
    setBreakTime(time);
  };

  return (
    <div className="aside-container">
      <Profile></Profile>
      <div className="break">
        <h4>Add A Break</h4>
        <div className="break-style">
          <button onClick={() => clickBreakTime(10)}>10 Min</button>
          <button onClick={() => clickBreakTime(20)}>20 Min</button>
          <button onClick={() => clickBreakTime(30)}>30 Min</button>
          <button onClick={() => clickBreakTime(40)}>40 Min</button>
        </div>
      </div>
      <div className="break">
        <h4>Reading Details</h4>
        <h5 className="break-style-title">
          Reading time <span className="total">{total} Min</span>
        </h5>

        <h5 className="break-style-title">
          Break Time <span className="total">{breakTime} Min</span>
        </h5>
        <br />
        <button className="activity">Activity Completed</button>
      </div>
    </div>
  );
};

export default Aside;
