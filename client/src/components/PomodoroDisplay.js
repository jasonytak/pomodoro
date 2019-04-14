import React from 'react';
import TomatoImage from '../images/cartoon-tomato.png';

const PomodoroDisplay = ({ totalSeconds }) => {
  return (
    <div className="pomodoro-display">
      <img src={TomatoImage} alt="pomodoro" />
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
      Time left: {minutes} : {seconds}
    </>
  );
};

export default PomodoroDisplay;
