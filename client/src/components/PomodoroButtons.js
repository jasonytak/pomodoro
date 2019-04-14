import React from 'react';

const PomodoroButtons = ({ onStart, onPause, onReset, isRunning }) => {
  if (!isRunning) {
    return (
      <div className="pomodoro-buttons">
        <button className="ui icon blue button" onClick={onStart}>
          <i className="play icon"></i>
        </button>
        <button className="ui icon yellow button" onClick={onReset}>
          <i className="redo icon"></i>
        </button>
      </div>
    );
  }

  return (
    <div className="pomodoro-buttons">
      <button className="ui icon red button" onClick={onPause}>
        <i className="pause icon"></i>
      </button>
      <button className="ui icon yellow button" onClick={onReset}>
          <i className="redo icon"></i>
        </button>
    </div>
  );
};

export default PomodoroButtons;