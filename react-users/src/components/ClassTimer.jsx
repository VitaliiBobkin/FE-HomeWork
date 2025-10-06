import React, { Component } from "react";
import "../css/Timer.css";

class ClassTimer extends Component {
  constructor(props) {
    super(props);
    const savedTime = parseInt(localStorage.getItem("classTimer")) || 0;
    this.state = {
      seconds: savedTime,
      running: false,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds !== this.state.seconds) {
      console.log(`Updated: ${this.state.seconds}`);
      localStorage.setItem("classTimer", this.state.seconds.toString());
    }
  }



componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer = () => {
    if (!this.state.running) {
      this.timer = setInterval(() => {
        this.setState((prev) => ({ seconds: prev.seconds + 1 }));
      }, 1000);
      this.setState({ running: true });
    }
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ running: false });
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({ seconds: 0, running: false });
    localStorage.removeItem("classTimer");
  };

  render() {
    const { seconds, running } = this.state;
    return (
      <div className="timer-container">
        <h2 className={running ? "" : "stopped"}>Seconds: {seconds}</h2>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
        <button onClick={this.props.onUnmount}>Unmount Timer</button>
      </div>
    );
  }
}

export default ClassTimer;
