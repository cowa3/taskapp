import React from 'react';
import App from './App';
import { expect } from 'chai';
import {mount, configure, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const appComponent: ReactWrapper = mount(<App />);
  const linkText: string = appComponent.find('.App-link').text();
  expect(linkText).to.equal('Learn React');

});
