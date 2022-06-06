import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <h2>TO DO LIST APPLICATION</h2>
      <div className="addTask">
        <input
          type={"text"}
          className="input"
          placeholder="Add new task in here"
        ></input>
        <button className="buttonPlus">+</button>
      </div>
    </div>
  );
};
export default Header;
