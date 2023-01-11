import styled, { keyframes } from 'styled-components';
import Svg from 'components/Svg';
import { getColor, getTransition } from 'utils/theme';

const drawStroke = keyframes`
  from {
    stroke-dashoffset: 226;
  }
	to {
    stroke-dashoffset: 0;
  }
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const WrapperCircle = styled.svg`
	position: absolute;
`;

const Circle = styled.circle`
	fill: transparent;
	stroke: ${getColor('primary', 'main')};
	stroke-width: 2px;
	stroke-dasharray: 226;
	animation: 2.5s ${drawStroke} linear;
`;

const Icon = styled(Svg)`
	opacity: ${({ show }) => (show ? '1' : '0')};
	color: ${getColor('primary', 'main')};
	${getTransition('opacity')};
`;

export default {
	Wrapper,
	Icon,
	WrapperCircle,
	Circle
};
