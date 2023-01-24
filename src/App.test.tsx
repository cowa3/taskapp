import React from 'react';
import App from './App';
import {expect} from 'chai';
import {mount, configure, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders learn react link', () => {
    const appComponent: ReactWrapper = mount(<App/>);
    const linkText: string = appComponent.find('.App-link').text();
    expect(linkText).to.equal('Learn React');

});
test('renders title', () => {
    const appComponent: ReactWrapper = mount(<App/>);

    const title: string = appComponent.find('.Title').text();

    expect(title).to.equal('Todo App');
});

test('renders Link', () => {
    const appComponent: ReactWrapper = mount(<App/>);

    const home: string = appComponent.find('a').at(0).text();
    const newTask: string = appComponent.find('a').at(1).text();

    expect(home).to.equal('Home');
    expect(newTask).to.equal('New Task');
});



