import './PomodoroButtons.css';
import React from 'react';

const PomodoroButtons = ({ onStart, onPause, onReset, isRunning }) => {
  if (!isRunning) {
    return (
      <div className="pomodoro-buttons">
          <button className="ui labeled icon play button" onClick={onStart}>
            <i className="play icon" />
            PLAY
          </button>
          <button className="ui labeled icon restart button" onClick={onReset}>
            <i className="redo icon" />
            RESET
          </button>
      </div>
    );
  }

  return (
    <div className="pomodoro-buttons">
      <button className="ui labeled icon pause button" onClick={onPause}>
        <i className="pause icon" />
        PAUSE
      </button>
      <button className="ui labeled icon restart button" onClick={onReset}>
        <i className="redo icon" />
        RESET
      </button>
    </div>
  );
};

export default PomodoroButtons;
