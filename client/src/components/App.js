import './App.css';
import Bell from '../sounds/Bell.wav';
import React from 'react';
import PomodoroDisplay from './PomodoroDisplay/PomodoroDisplay';
import PomodoroButtons from './PomodoroButtons/PomodoroButtons';
import PomodoroInstructions from './PomodoroInstructions/PomodoroInstructions';
import InputModal from './InputModal/InputModal';
import AboutModal from './AboutModal/AboutModal';

class App extends React.Component {
  state = {
    totalSeconds: 1500,
    totalWorkMinutes: 25,
    totalBreakMinutes: 5,
    isRunning: false,
    currentState: 'Work'
  };

  playBell = () => {
    this.refs.audio.play();
  }

  onStart = () => {
    this.setState({
      totalSeconds: this.state.totalWorkMinutes * 60,
      isRunning: true
    });
    this.interval = setInterval(() => this.tick(), 1000);
  };

  onReset = () => {
    this.setState({ totalSeconds: this.state.totalWorkMinutes * 60 });
  };

  onPause = () => {
    this.setState({ isRunning: false });
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.state.totalSeconds === 0) {
      this.playBell();
      this.switchTimer();
    }
    this.setState({ totalSeconds: this.state.totalSeconds - 1 });
  };

  switchTimer = () => {
    if (this.state.currentState === 'Work') {
      this.setState({
        totalSeconds: this.state.totalBreakMinutes * 60,
        currentState: 'Break'
      });
    } else if (this.state.currentState === 'Break') {
      this.setState({
        totalSeconds: this.state.totalWorkMinutes * 60,
        currentState: 'Work'
      });
    }
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    this.setState({ totalSeconds: this.state.totalWorkMinutes * 60 });
  };

  render() {
    return (
      <div className="pomodoro-app">
        <div className="pomodoro-menu">
          <h1>POMODORO TIMER</h1>
          <div className="pomodoro-menu-buttons">
            <InputModal
              onInputChange={this.onInputChange}
              handleSubmit={this.handleSubmit}
              totalWorkMinutes={this.state.totalWorkMinutes}
              totalBreakMinutes={this.state.totalBreakMinutes}
            />
            <AboutModal />
          </div>
          <audio ref="audio">
            <source src={Bell} />>
          </audio>
        </div>
          <PomodoroDisplay totalSeconds={this.state.totalSeconds} currentState={this.state.currentState} />
          <PomodoroButtons
            onStart={this.onStart}
            onReset={this.onReset}
            onPause={this.onPause}
            isRunning={this.state.isRunning}
          />
          <PomodoroInstructions
            totalWorkMinutes={this.state.totalWorkMinutes}
            totalBreakMinutes={this.state.totalBreakMinutes}
          />
      </div>
    );
  }
}

export default App;
