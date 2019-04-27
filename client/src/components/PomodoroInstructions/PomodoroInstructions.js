import './PomodoroInstructions.css';
import React from 'react';

const PomodoroInstructions = ({ totalWorkMinutes, totalBreakMinutes }) => {
  return (
    <div className="pomodoro-instructions">
      <ul>
        <li>1. DECIDE ON A TASK</li>
        <li>2. START THE POMODORO TIMER</li>
        <li>3. WORK ON THE TASK FOR {totalWorkMinutes} MINUTES</li>
        <li>4. WHEN TIMER RINGS, PAUSE WORK AND TAKE A {totalBreakMinutes} MINUTE BREAK</li>
        <li>5. REPEAT!</li>
      </ul>
    </div>
  );
};

export default PomodoroInstructions;
