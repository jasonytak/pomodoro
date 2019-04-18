import './PomodoroInstructions.css';
import React from 'react';

const PomodoroInstructions = ({ totalWorkMinutes, totalBreakMinutes }) => {
  return (
    <div className="pomodoro-instructions">
      <ol>
        <ol>1. DECIDE ON A TASK</ol>
        <ol>2. START THE POMODORO TIMER</ol>
        <ol>3. WORK ON THE TASK FOR {totalWorkMinutes} MINUTES</ol>
        <ol>4. WHEN TIMER RINGS, PAUSE WORK AND TAKE A {totalBreakMinutes} MINUTE BREAK</ol>
        <ol>5. REPEAT!</ol>
      </ol>
    </div>
  );
};

export default PomodoroInstructions;
