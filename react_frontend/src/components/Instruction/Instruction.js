import React, { Component } from "react";
import classes from "./Instruction.module.css";

class Instruction extends Component {
  render() {
    return (
      <div class={classes.footer}>
        <div className={classes.element}>PageUp: Next Tab</div>
        <div className={classes.element}>PageDown: Previous Tab</div>
        <div className={classes.element}>Left: Next Option</div>
        <div className={classes.element}>Right: Previous Option</div>
        <div className={classes.element}>Enter: Select</div>
      </div>
    );
  }
}

export default Instruction;
