import './PomodoroInstructions.css';
import React from 'react';

const PomodoroInstructions = ({ totalWorkMinutes, totalBreakMinutes }) => {
  return (
    <div className="pomodoro-instructions">
      <p>1. DECIDE ON A TASK</p>
      <p>2. START THE POMODORO TIMER</p>
      <p>3. WORK ON THE TASK FOR {totalWorkMinutes} MINUTES</p>
      <p>
        4. WHEN TIMER RINGS, PAUSE WORK AND TAKE A {totalBreakMinutes} MINUTE
        BREAK
      </p>
      <p>5. REPEAT!</p>
    </div>
  );
};

export default PomodoroInstructions;
