import './App.css';
import React from 'react';
import Menu from './Menu';
import PomodoroDisplay from './PomodoroDisplay';
import PomodoroButtons from './PomodoroButtons';
import PomodoroInstructions from './PomodoroInstructions';

class App extends React.Component {
  state = { totalSeconds: 1500, isRunning: false };

  onStart = () => {
    this.setState({ isRunning: true });
    this.interval = setInterval(() => this.tick(), 1000);
  };

  onReset = () => {
    this.setState({ totalSeconds: 1500 });
  };

  onPause = () => {
    this.setState({ isRunning: false });
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.state.totalSeconds === 0) {
      this.switchTimer();
    }
    this.setState({ totalSeconds: this.state.totalSeconds - 1 });
  };

  render() {
    return (
      <div className="pomodoro-app">
        <Menu />
        <PomodoroDisplay totalSeconds={this.state.totalSeconds} />
        <PomodoroButtons
          onStart={this.onStart}
          onReset={this.onReset}
          onPause={this.onPause}
          isRunning={this.state.isRunning}
        />
        <PomodoroInstructions />
      </div>
    );
  }
}

export default App;
