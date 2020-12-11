import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../../components/Login/Login";
import * as actions from "../../actions/actions";
import Navbar from "../../components/Navbar/Navbar";
import KeyboardEventHandler from "react-keyboard-event-handler";
import TVSeries from "../../components/TVSeries/TVSeries";
import Movies from "../../components/Movies/Movies";
import Channels from "../../components/Channels/Channels";
import Logout from "../../components/Logout/Logout";
import Instruction from "../../components/Instruction/Instruction";
import Playback from "../../components/Playback/Playback";

class Layout extends Component {
  onKeyPressDownHandler = (value, event) => {
    event.preventDefault();
    // console.log("key pressed =", value);
    if (value === "pageup") {
      this.props.prevModule();
    } else if (value === "pagedown") {
      this.props.nextModule();
    } else if (value === "right") {
      this.props.nextTile();
    } else if (value === "left") {
      this.props.prevTile();
    } else if (value === "enter" && this.props.currentModule === 4) {
      this.props.logout();
    }
  };
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      let token = sessionStorage.getItem("x-access-token");
      console.log(token);
      if (token) this.props.setToken(token);
    }
  }
  render() {
    let component = <Login />;
    if (this.props.isLoggedIn) {
      let show = null;
      if (this.props.currentModule === 0) show = <TVSeries />;
      if (this.props.currentModule === 1) show = <Movies />;
      if (this.props.currentModule === 2) show = <Channels />;
      if (this.props.currentModule === 3) show = <Playback />;
      if (this.props.currentModule === 4) show = <Logout />;
      component = (
        <React.Fragment>
          <KeyboardEventHandler
            handleKeys={["all"]}
            onKeyEvent={(key, e) =>
              // console.log(`do something upon keydown event of ${key}`);
              this.onKeyPressDownHandler(key, e)
            }
          />
          <Navbar />
          <Instruction />
          {show}
        </React.Fragment>
      );
    }
    return component;
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
    setToken: (token) => dispatch(actions.setToken(token)),
    nextModule: () => dispatch(actions.nextModule()),
    prevModule: () => dispatch(actions.prevModule()),
    prevTile: () => dispatch(actions.prevTile()),
    nextTile: () => dispatch(actions.nextTile()),
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
