import React from 'react';
import {expect} from 'chai';
import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon, {SinonStub} from 'sinon';
import NewTask from "../../components/NewTask";
import {act, Simulate} from "react-dom/test-utils";


configure({adapter: new Adapter()});

describe('NewTask', () => {

    let wrapper: ReactWrapper
    let stub: SinonStub

    beforeEach(async () => {
        stub = sinon.stub(global, 'fetch');
        stub.onCall(0).returns(jsonOk(MOCK_JSON));

        await act(async () => {
            wrapper = mount(<NewTask/>)
        });
        wrapper.update()
    })

    afterEach(() => {
        stub.restore()
    })

    test('renders initial', () => {

        const titleLabel: string = wrapper.find('.titleLabel').text();
        const inputTag = wrapper.find('input')
        const buttonText: string = wrapper.find('.sendButton').text();

        expect(titleLabel).to.equal('TITLE');
        expect(inputTag.exists()).to.equal(true)
        expect(buttonText).to.equal('Send');

    });

    test('新規にタスクを作成できる', () => {

        const input = wrapper.find('input');
        input.simulate('change', {target: {value: 'New Task'}})
        const button = wrapper.find('button');
        button.simulate('click');

        expect(stub.callCount).to.equal(1)

    });

    function jsonOk(body: any) {
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
            'userId': 1,
            'id': 1,
            'title': "1st Task",
            'completed': false,
        }
    ]
});