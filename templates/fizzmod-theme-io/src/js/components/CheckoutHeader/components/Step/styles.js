import styled from 'styled-components';
import { getColor } from 'utils/theme';
import Typography from 'components/Typography';

const Step = styled.li`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0;
	list-style: none;
	padding: 0;
	transition: all 0.3s;
`;

const Title = styled(Typography)`
	align-items: center;
	box-sizing: border-box;
	border-top: 4px solid transparent;
	border-bottom: 4px solid
		${({ current }) => (current ? getColor('primary', 'main') : 'transparent')};
	color: ${getColor('secondary', 'light')};
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	margin: 0;
	opacity: ${({ active }) => (active ? 1 : 0.35)};
	padding: 0 22px;
	position: relative;
	transition: all 0.2s;
	text-transform: uppercase;
`;

export default {
	Step,
	Title
};
