import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PomodoroDisplay from './PomodoroDisplay/PomodoroDisplay';
import PomodoroButtons from './PomodoroButtons/PomodoroButtons';
import PomodoroInstructions from './PomodoroInstructions/PomodoroInstructions';
import InputModal from './InputModal/InputModal';
import AboutModal from './AboutModal/AboutModal';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('renders Pomodoro components', () => {
  expect(wrapped.find(PomodoroDisplay).length).toEqual(1);
  expect(wrapped.find(PomodoroInstructions).length).toEqual(1);
  expect(wrapped.find(PomodoroButtons).length).toEqual(1);
});

it('shows both modal components', () => {
  expect(wrapped.find(InputModal).length).toEqual(1);
  expect(wrapped.find(AboutModal).length).toEqual(1);
});
