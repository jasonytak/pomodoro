import React from 'react';

const Header = () => {
  return (
    <div className="pomodoro-menu">
      <h1>Pomodoro Timer</h1>
      <div className="pomodoro-menu-buttons">
        <button className="ui button">
          <span>Customize</span>
        </button>
        <button className="ui button">
          <span>What is this?</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
