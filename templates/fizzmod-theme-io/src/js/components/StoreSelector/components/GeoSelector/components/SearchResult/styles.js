import styled from 'styled-components';
import Svg from 'components/Svg';
import Typography from 'components/Typography';
import { getColor } from 'utils/theme';

const Wrapper = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	cursor: pointer;
	background-color: ${getColor('grey', '100')};
	padding: 10px;
	&::after {
		content: '';
		bottom: 0;
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: ${getColor('grey', '300')};
	}
`;

const Icon = styled(Svg)`
	margin-right: 9px;
	color: ${getColor('grey', '800')};
`;

const Text = styled(Typography)`
	color: ${getColor('grey', '800')};
`;

export default {
	Wrapper,
	Icon,
	Text
};
