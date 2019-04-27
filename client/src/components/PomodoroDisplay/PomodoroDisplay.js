import './PomodoroDisplay.css';
import React from 'react';

const PomodoroDisplay = ({ totalSeconds }) => {
  return (
    <div className="pomodoro-display">
      <div className="timer-display">{formatTimer(totalSeconds)}</div>
    </div>
  );
};

const formatTimer = totalSeconds => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds - minutes * 60;
  minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
  seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;
  return (
    <>
      <div className="ui tiny statistic">
        <div className="value">{minutes}</div>
        <div className="label">MINUTES</div>
      </div>
      <div className="ui tiny statistic">
        <div className="value">{seconds}</div>
        <div className="label">SECONDS</div>
      </div>
    </>
  );
};

export default PomodoroDisplay;
