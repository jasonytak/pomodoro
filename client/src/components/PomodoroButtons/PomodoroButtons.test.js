import React from 'react';
import { shallow } from 'enzyme';
import PomodoroButtons from './PomodoroButtons';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<PomodoroButtons />);
});

it('renders two buttons properly', () => {
  expect(wrapped.find('button')).toHaveLength(2);
});

it('renders pause button based on isRunning prop', () => {
  wrapped.setProps({ isRunning: true });
  expect(
    wrapped.containsMatchingElement(
      <button className="ui labeled icon pause button">
        <i className="pause icon" />
        PAUSE
      </button>
    )
  ).toBeTruthy();
});

it('renders play button based on isRunning prop', () => {
  wrapped.setProps({ isRunning: false });
  expect(
    wrapped.containsMatchingElement(
      <button className="ui labeled icon play button">
        <i className="play icon" />
        PLAY
      </button>
    )
  ).toBeTruthy();
});

it('user clicks reset button', () => {
  wrapped.setProps({ isRunning: true });
  expect(wrapped.find('button.pause').length).toEqual(1);
  wrapped.find('button.pause').simulate('click');
})