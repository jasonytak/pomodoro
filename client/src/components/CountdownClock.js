import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import axios from 'axios';

class CountdownClock extends React.Component {
  state = { seconds: '' };

  componentDidMount() {
    this.setCountdown();
  }

  setCountdown() {
    const currentMinute = new Date().getMinutes() * 60;
    this.setState({ seconds: currentMinute });
  }

  render() {
    return <div>Hello</div>;
  }
}

export default CountdownClock;
