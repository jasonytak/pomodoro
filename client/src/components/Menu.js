import React from 'react';
import InputModal from './InputModal';

const Menu = ({ onInputChange, handleSubmit }) => {
  return (
    <div className="pomodoro-menu">
      <h1>Pomodoro Timer</h1>
      <div className="pomodoro-menu-buttons">
        <InputModal
          onInputChange={onInputChange}
          handleSubmit={handleSubmit}
        />
        <button className="ui button">
          <span>What is this?</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
