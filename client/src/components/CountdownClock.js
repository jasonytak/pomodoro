import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import axios from 'axios';

class CountdownClock extends React.Component {
  state = { seconds: '' };

  // componentDidMount() {
  //   this.setCountdown();
  // }

  setCountdown = () => {
    const currentMinute = new Date().getMinutes() * 60;
    if (currentMinute >= 0 && currentMinute < 1500) {
      return <ReactCountdownClock seconds={1500 - currentMinute} />;
    }
    if (currentMinute >= 1500 && currentMinute <= 1800) {
      return <ReactCountdownClock seconds={1800 - currentMinute} />;
    }
  };

  render() {
    return <div>{this.setCountdown()}</div>;
  }
}

export default CountdownClock;
