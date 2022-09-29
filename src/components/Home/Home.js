import React from "react";
import Aside from "../aside/Aside";
import Main from "../main/Main";
import "./Home.css";

const Home = () => {
  return (
    <div className="grand-container">
      <Main></Main>
      <Aside></Aside>
    </div>
  );
};

export default Home;
