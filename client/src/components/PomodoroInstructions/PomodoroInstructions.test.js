import React from 'react';
import { shallow } from 'enzyme';
import PomodoroInstructions from './PomodoroInstructions';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<PomodoroInstructions />);
});

it('renders totalWorkMinutes prop properly', () => {
  wrapped.setProps({ totalWorkMinutes: 20 });
  expect(
    wrapped.containsMatchingElement(<p>3. WORK ON THE TASK FOR 20 MINUTES</p>)
  ).toBeTruthy();
});

it('renders totalBreakMinutes prop properly', () => {
  wrapped.setProps({ totalBreakMinutes: 10 });
  expect(
    wrapped.containsMatchingElement(
      <p>4. WHEN TIMER RINGS, PAUSE WORK AND TAKE A 10 MINUTE BREAK</p>
    )
  ).toBeTruthy();
});
