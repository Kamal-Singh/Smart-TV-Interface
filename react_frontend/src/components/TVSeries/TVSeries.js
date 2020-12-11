import React, { Component } from "react";
import classes from "./TVSeries.module.css";
import Card from "../Card/Card";
import Axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";

class TVSeries extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    if (!this.state.data) {
      Axios.get("http://localhost:3000/api/TVSeries/", {
        headers: { "x-access-token": this.props.token },
      })
        .then((res) => {
          console.log(res);
          this.setState({ data: res.data });
          this.props.setLength(res.data.length);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    let list = [];
    if (this.state.data && this.state.data[0]) {
      this.state.data.forEach((card, idx) => {
        list.push(<Card {...card} active={idx === this.props.currentTile} />);
      });
    }
    return (
      <React.Fragment>
        <h1 class={classes.title}>TV Series</h1>
        <div class={classes.container}>{list}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    token: state.token,
    currentTile: state.currentTile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLength: (value) => dispatch(actions.setLength(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TVSeries);
