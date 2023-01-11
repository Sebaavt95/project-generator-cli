import React from 'react';
import { shallow } from 'enzyme';

import Typography from '../Typography';

describe('Typography component without props', () => {
	it('render', () => {
		const wrapper = shallow(<Typography>typography</Typography>);
		const text = wrapper.find('p').text();
		const propVariant = wrapper.props().variant;
		const propColor = wrapper.props().color;
		expect(text).toEqual('typography');
		expect(propVariant).toEqual('body1');
		expect(propColor).toEqual('');
	});
});

describe('Typography component with component prop', () => {
	it('render with h1 tag', () => {
		const wrapper = shallow(<Typography component="h1">typography</Typography>);
		const text = wrapper.find('h1').text();
		const propVariant = wrapper.props().variant;
		const propColor = wrapper.props().color;
		expect(text).toEqual('typography');
		expect(propVariant).toEqual('body1');
		expect(propColor).toEqual('');
	});

	it('render with h1 tag and primary color', () => {
		const wrapper = shallow(
			<Typography color="primary" component="h1">
				typography
			</Typography>
		);
		const text = wrapper.find('h1').text();
		const propVariant = wrapper.props().variant;
		const propColor = wrapper.props().color;
		expect(text).toEqual('typography');
		expect(propVariant).toEqual('body1');
		expect(propColor).toEqual('primary');
	});

	it('render with h1 tag and secondary color', () => {
		const wrapper = shallow(
			<Typography color="secondary" component="h1">
				typography
			</Typography>
		);
		const text = wrapper.find('h1').text();
		const propVariant = wrapper.props().variant;
		const propColor = wrapper.props().color;
		expect(text).toEqual('typography');
		expect(propVariant).toEqual('body1');
		expect(propColor).toEqual('secondary');
	});

	it('render with h1 tag and common color red', () => {
		const wrapper = shallow(
			<Typography color="red" component="h1">
				typography
			</Typography>
		);
		const text = wrapper.find('h1').text();
		const propVariant = wrapper.props().variant;
		const propColor = wrapper.props().color;
		expect(text).toEqual('typography');
		expect(propVariant).toEqual('body1');
		expect(propColor).toEqual('red');
	});
});

describe('Typography component with variant prop', () => {
	it('render with p tag, variant body2', () => {
		const wrapper = shallow(<Typography variant="body2">typography</Typography>);
		const text = wrapper.find('p').text();
		const propVariant = wrapper.props().variant;
		const propColor = wrapper.props().color;
		expect(text).toEqual('typography');
		expect(propVariant).toEqual('body2');
		expect(propColor).toEqual('');
	});

	it('render with p tag, variant caption', () => {
		const wrapper = shallow(<Typography variant="caption">typography</Typography>);
		const text = wrapper.find('span').text();
		const propVariant = wrapper.props().variant;
		const propColor = wrapper.props().color;
		expect(text).toEqual('typography');
		expect(propVariant).toEqual('caption');
		expect(propColor).toEqual('');
	});

	it('render with h6 tag, variant h6', () => {
		const wrapper = shallow(<Typography variant="h6">typography</Typography>);
		const text = wrapper.find('h6').text();
		const propVariant = wrapper.props().variant;
		const propColor = wrapper.props().color;
		expect(text).toEqual('typography');
		expect(propVariant).toEqual('h6');
		expect(propColor).toEqual('');
	});
});

describe('Typography component with variant and component prop', () => {
	it('render with h1 tag, variant body2', () => {
		const wrapper = shallow(
			<Typography component="h1" variant="body2">
				typography
			</Typography>
		);
		const text = wrapper.find('h1').text();
		const propVariant = wrapper.props().variant;
		const propColor = wrapper.props().color;
		expect(text).toEqual('typography');
		expect(propVariant).toEqual('body2');
		expect(propColor).toEqual('');
	});

	it('render with h1 tag, primary color and variant subtitle', () => {
		const wrapper = shallow(
			<Typography color="primary" component="h1" variant="subtitle1">
				typography
			</Typography>
		);
		const text = wrapper.find('h1').text();
		const propVariant = wrapper.props().variant;
		const propColor = wrapper.props().color;
		expect(text).toEqual('typography');
		expect(propVariant).toEqual('subtitle1');
		expect(propColor).toEqual('primary');
	});
});

describe('Typography snapshot', () => {
	it('render with h1 tag, variant body2', () => {
		const wrapper = shallow(
			<Typography component="h1" variant="body2" color="secondary">
				typography
			</Typography>
		);
		const text = wrapper.find('h1').text();
		const propVariant = wrapper.props().variant;
		const propColor = wrapper.props().color;
		expect(text).toEqual('typography');
		expect(propVariant).toEqual('body2');
		expect(propColor).toEqual('secondary');
		expect(wrapper).toMatchSnapshot();
	});
});
