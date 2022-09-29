import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import "./Home.css";

const Home = () => {
  return (
    <div className="grand-container">
      <Header></Header>
      <h2>Select Your todays Subjects</h2><br />
      <Main></Main>
    </div>
  );
};

export default Home;
