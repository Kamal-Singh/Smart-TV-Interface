import React, { Component } from "react";
import classes from "./Playback.module.css";
import { Player } from "video-react";
import Axios from "axios";
import { connect } from "react-redux";

class Playback extends Component {
  state = {
    videoStartTime: 0,
    id: null,
  };
  componentDidMount() {
    let video = document.querySelector(".video-react-video");
    // video.currentTime = Math.abs(this.state.videoStartTime);
    Axios.get("http://localhost:3000/api/playback/", {
      headers: { "x-access-token": this.props.token },
    })
      .then((res) => {
        console.log(res);
        video.currentTime = Math.abs(this.state.videoStartTime);
        this.setState({ videoStartTime: res.data.videoWatchedTime });
      })
      .catch((err) => {
        console.log(err);
      });
    video.play();
    if (this.state.id) {
      clearInterval(this.state.id);
    }
    let id = setInterval(() => {
      this.setState({ videoStartTime: video.currentTime });
      Axios.post(
        "http://localhost:3000/api/playback/",
        { videoWatchedTime: video.currentTime },
        {
          headers: { "x-access-token": this.props.token },
        }
      )
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    }, 5000);
    this.setState({ id: id });
  }
  componentWillUnmount() {
    if (this.state.id) {
      clearInterval(this.state.id);
    }
  }
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.video}>
          <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps)(Playback);
