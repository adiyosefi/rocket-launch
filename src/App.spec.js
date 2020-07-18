import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Main from "./components/Main/Main";

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('app component contains main component', () => {
    const wrapper = shallow(<App />);
    const main = (<Main />);
    expect(wrapper).toContainReact(main);
  });
})
