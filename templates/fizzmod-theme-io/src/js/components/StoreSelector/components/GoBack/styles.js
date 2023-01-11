import styled from 'styled-components';
import { getColor } from 'utils/theme';
import ButtonComp from 'components/Button';
import Svg from 'components/Svg';
import { mediaBreaks } from 'theme/devices';

const Button = styled(ButtonComp)`
	display: flex;
	align-items: center;
	color: ${getColor('secondary', 'main')};
	font-size: 14px;
	&:hover {
		background: none;
		color: ${getColor('secondary', 'main')};
	}
	${mediaBreaks.tablet`
		font-size: 0px;
	`}
`;
const Icon = styled(Svg)`
	fill: ${getColor('secondary', 'main')};
	margin-right: 9px;
`;

export default {
	Button,
	Icon
};
