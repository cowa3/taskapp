import　React from 'react';
import App from './App';
import {expect} from 'chai';
import {mount, configure, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {act} from "react-dom/test-utils";

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

test('renders TitleOfTask', async () => {
    const stub = sinon.stub(global, 'fetch');
    stub.onCall(0).returns(jsonOk(MOCK_JSON));

    let wrapper: ReactWrapper
    await act(async () => {
        wrapper = mount(<App/>)
    });
    wrapper.update()

    const title = wrapper.find('label').at(0).text();
    expect(title).to.equal('1st Task');
});

function jsonOk (body: any) {
    let mockResponse = new window.Response(JSON.stringify(body), {
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return Promise.resolve(mockResponse);
}

const MOCK_JSON = [
    {
        'userId': 1 ,
        'id': 1 ,
        'title': "1st Task" ,
        'completed': false ,
    }
]