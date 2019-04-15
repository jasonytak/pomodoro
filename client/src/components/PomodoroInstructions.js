import React from 'react';

const PomodoroInstructions = () => {
  return (
    <div className="pomodoro-instructions">
        <ol>
          <ol>1. Decide on a task.</ol>
          <ol>2. Start the Pomodoro Timer.</ol>
          <ol>3. Work on the task for 25 minutes.</ol>
          <ol>4. When timer rings, pause work and take a 5 minute break.</ol>
          <ol>5. Repeat!</ol>
        </ol>
    </div>
  );
};

export default PomodoroInstructions;
