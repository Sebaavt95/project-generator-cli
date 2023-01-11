import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Button from './Button';

describe('test', () => {
	let shallow;
	beforeAll(() => {
		shallow = createMount();
	});
	it('it', () => {
		const wrapper = shallow(<Button title="test">button</Button>);
		const text = wrapper.find('button').text();
		const propTitle = wrapper.find(Button).prop('title');
		expect(text).toEqual('button');
		expect(propTitle).toEqual('test');
		expect(wrapper).toMatchSnapshot();
	});
});
