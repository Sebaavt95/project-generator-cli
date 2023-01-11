import React from 'react';
import { shallow } from 'enzyme';

// eslint-disable-next-line import/no-named-as-default
import Svg from '../Svg';

describe('Svg component without svg name', () => {
	it('render with default props', () => {
		const wrapper = shallow(<Svg svgName="newsletter" />);
		const propColor = wrapper.props().color;
		const propType = wrapper.props().type;
		const propSize = wrapper.props().size;
		expect(propColor).toEqual('black');
		expect(propType).toEqual('icon');
		expect(propSize).toEqual(16);
	});
	it('render with size 28 and color white', () => {
		const wrapper = shallow(<Svg svgName="newsletter" size={28} color="#fff" />);
		const propColor = wrapper.props().color;
		const propType = wrapper.props().type;
		const propSize = wrapper.props().size;
		expect(propColor).toEqual('#fff');
		expect(propType).toEqual('icon');
		expect(propSize).toEqual(28);
		expect(wrapper).toMatchSnapshot();
	});
});
