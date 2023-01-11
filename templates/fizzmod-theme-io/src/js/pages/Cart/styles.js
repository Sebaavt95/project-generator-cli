import styled from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';

const Wrapper = styled.div`
	width: 100%;
	min-height: calc(100vh - 120px);
	overflow: hidden;
	display: flex;
	flex-flow: row;
	margin: 0 auto;
	padding-top: 60px;
	${mediaBreaks.tablet`
		padding-top: 0;
		flex-flow: ${({ emptyCart }) => (emptyCart ? 'row' : 'column')};
	`}

	.animated-element {
		z-index: 999999;
	}
`;

const Body = styled.div`
	display: flex;
	position: relative;
	flex-flow: column nowrap;
	width: ${({ fullWidth }) => (!fullWidth ? 'calc(100% - 360px)' : '100%')};
	background-color: ${getColor('grey', '200')};
	${mediaBreaks.tablet`
		background-color: ${getColor('common', 'white')};
	`}
`;

const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: #0000001a;
	z-index: 9999;
`;

export default { Wrapper, Body, Overlay };
