import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Login.module.css";
import axios from "axios";
import axiosBase from "../../axios-base";
import * as actions from "../../actions/actions";

class Login extends Component {
  state = {
    username: null,
    password: null,
  };
  onUsernameChangeHandler = (value) => {
    this.setState({ username: value });
  };
  onPasswordChangeHandler = (value) => {
    this.setState({ password: value });
  };
  loginHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/signin/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        sessionStorage.setItem("x-access-token", res.data["x-access-token"]);
        sessionStorage.setItem("username", res.data.username);
        this.props.onAuth(res.data["x-access-token"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div id={classes.modal}>
        <div id={classes.modalContent}>
          <div id={classes.modalTitle}>
            <h2>LOGIN</h2>
            <div class={classes.underlineTitle}></div>
          </div>
          <div id={classes.underlineTitle}></div>
          <form method="post" class={classes.form}>
            <label for="user-email" style={{ paddingTop: "13px" }}>
              &nbsp;Username
            </label>
            <input
              id="username"
              class={classes.formContent}
              type="text"
              name="username"
              value={this.state.username}
              autocomplete="on"
              onChange={(event) =>
                this.onUsernameChangeHandler(event.target.value)
              }
              required
            />
            <div class={classes.formBorder}></div>
            <label for="user-password" style={{ paddingTop: "22px" }}>
              &nbsp;Password
            </label>
            <input
              id="user-password"
              class={classes.formContent}
              type="password"
              name="password"
              value={this.state.password}
              onChange={(event) => {
                this.onPasswordChangeHandler(event.target.value);
              }}
              required
            />
            <div class={classes.formBorder}></div>
            <a href="#">
              <legend id={classes.forgotPass}>Forgot password?</legend>
            </a>
            <input
              id={classes.submitBtn}
              type="submit"
              name="submit"
              value="LOGIN"
              onClick={this.loginHandler}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (token) => dispatch(actions.setToken(token)),
  };
};
export default connect(null, mapDispatchToProps)(Login);
