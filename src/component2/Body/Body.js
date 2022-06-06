import React from "react";
import ListItem from "./ListItem";
import "./style.css";

const Body = () => {
  return (
    <div className="body">
      {Array(5).fill(null).map(item => (
        <ListItem/> 
      ))} 
    </div>
  );
};

export default Body;

// npm install
// npm start
// git config user.name "Mona Lisa"
// git config user.email ""
// git init
// git add .
// git commit -m "first commit"
// git remote add origin https://github.com/aphuong98/Todolist.git
// git push origin main 