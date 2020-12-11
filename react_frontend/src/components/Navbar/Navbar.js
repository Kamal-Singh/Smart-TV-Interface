import React, { Component } from "react";
import classes from "./Navbar.module.css";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import KeyboardEventHandler from "react-keyboard-event-handler";

class Navbar extends Component {
  render() {
    return (
      <div class={classes.topnav}>
        <a
          class={this.props.currentModule === 0 ? classes.active : null}
          onClick={() => this.props.changeModule(0)}
          href="#"
        >
          TV Series
        </a>
        <a
          class={this.props.currentModule === 1 ? classes.active : null}
          onClick={() => this.props.changeModule(1)}
          href="#"
        >
          Movies
        </a>
        <a
          class={this.props.currentModule === 2 ? classes.active : null}
          onClick={() => this.props.changeModule(2)}
          href="#"
        >
          Channels
        </a>
        <a
          class={this.props.currentModule === 3 ? classes.active : null}
          onClick={() => this.props.changeModule(3)}
          href="#"
        >
          Playback
        </a>
        <a
          class={this.props.currentModule === 4 ? classes.active : null}
          onClick={() => this.props.changeModule(4)}
          href="#"
        >
          Logout
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    token: state.token,
    currentModule: state.currentModule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextModule: () => dispatch(actions.nextModule()),
    prevModule: () => dispatch(actions.prevModule()),
    changeModule: (value) => dispatch(actions.changeModule(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
