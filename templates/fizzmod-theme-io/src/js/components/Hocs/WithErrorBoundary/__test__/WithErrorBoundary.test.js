import React from 'react';
import { shallow } from 'enzyme';

import WithErrorBoundary from '../WithErrorBoundary';

describe('WithErrorBoundary without Error', () => {
	it('render ok', () => {
		const ChildComp = () => <div>test</div>;
		const Hoc = WithErrorBoundary(ChildComp);
		const wrapper = shallow(<Hoc />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find(ChildComp)).toHaveLength(1);
	});
});

describe('WithErrorBoundary with Error', () => {
	it('render null', () => {
		const childComp = () => <div>test</div>;
		const Hoc = WithErrorBoundary(childComp);
		const wrapper = shallow(<Hoc />);
		wrapper.setState({ hasError: true });
		expect(wrapper).toEqual({});
		expect(wrapper).toMatchSnapshot();
	});
});
