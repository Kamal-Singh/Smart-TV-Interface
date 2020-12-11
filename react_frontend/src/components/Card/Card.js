import React, { Component } from "react";
import classes from "./Card.module.css";

class Card extends Component {
  componentDidUpdate() {
    if (this.props.active) {
      //   console.log(" classname = ", classes.active);
      document
        .querySelector("." + classes.active)
        .scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
    }
  }
  render() {
    let active = this.props.active ? classes.active : null;
    return (
      <div class={[classes.card, active].join(" ")}>
        <img
          class={classes.cardImage}
          src={this.props.imageURL}
          alt={this.props.name}
        />
        {/* </a> */}
        <div class={[classes.cardDescription, active].join(" ")}>
          <h2>{this.props.name}</h2>
          <p>Genre: {this.props.genre}</p>
          <p>Ratings: {this.props.rating}</p>
        </div>
      </div>
    );
  }
}

export default Card;
