import React from 'react';
import {expect} from 'chai';
import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Task from "../../components/Task";


configure({adapter: new Adapter()});

describe('Task', () => {

    let wrapper: ReactWrapper

    test('renders TitleOfTask', async () => {

        wrapper = mount(<Task id={1} title={"task1"} completed={false}/>)
        const title = wrapper.find('label').at(0).text();
        const checkbox = wrapper.find('input')

        expect(title).to.equal("task1")
        expect(checkbox.props().checked).to.equal(false);

    });

});