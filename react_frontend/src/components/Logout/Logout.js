import React, { Component } from "react";
import classes from "./Logout.module.css";

class Logout extends Component {
  render() {
    return (
      <div className={classes.title}>
        <h1>Press Enter to LogOut!!</h1>
      </div>
    );
  }
}

export default Logout;
