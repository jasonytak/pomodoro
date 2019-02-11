import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import axios from 'axios';

class CountdownClock extends React.Component {
  state = { seconds: null };

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    axios
      .get('/time')
      .then(res => {
        console.log(res.data.seconds);
        this.setState({ seconds: res.data.seconds });
      })
      .catch(error => console.log(error.response));
  };

  resetTwentyFiveTimer = () => {
    this.setState({ seconds: 1500 });
  };

  resetFiveTimer = () => {
    this.setState({ seconds: 300 });
  };

  render() {
    if (this.state.seconds === null) {
      return <div>Loading...</div>;
    }

    if (this.state.seconds === 10) {
      return (
        <ReactCountdownClock seconds={10} onComplete={this.restartTimer} />
      );
    }

    if (this.state.seconds === 15) {
      return (
        <ReactCountdownClock
          seconds={this.state.seconds}
          onComplete={this.resetFiveTimer}
        />
      );
    }

    if (this.state.seconds >= 0 && this.state.seconds < 1500) {
      return (
        <ReactCountdownClock
          seconds={1500 - this.state.seconds}
          onComplete={this.restartTimer}
        />
      );
    }

    if (this.state.seconds >= 1800 && this.state.seconds < 3300) {
      return (
        <ReactCountdownClock
          seconds={3300 - this.state.seconds}
          onComplete={this.resetFiveTimer}
        />
      );
    }

    if (this.state.seconds >= 3300 && this.state.seconds < 3600) {
      return <ReactCountdownClock seconds={3600 - this.state.seconds} />;
    }

    return <div>Hello</div>;
  }
}

export default CountdownClock;
