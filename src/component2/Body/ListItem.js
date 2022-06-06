import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    return (
      <div className="listTask">
        <div className="content">
          <p>This is a first list</p>
        </div>
        <div className="selectList">
          <button className="selectTask">
            <span className="icon-sucess">&#x2713;</span>
          </button>
          <button className="deleteTask">
            <span className="icon-delete">&#x003C7;</span>
          </button>
        </div>
      </div>
    );
  }
}
