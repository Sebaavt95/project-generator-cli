import styled from 'styled-components';
import Svg from 'components/Svg';
import { getColor } from 'utils/theme';
import Typography from 'components/Typography';
import { mediaBreaks } from 'theme/devices';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: ${getColor('common', 'white')};
	padding: 0 21px;
	height: 64px;
	${mediaBreaks.tablet`
		justify-content: center;
		border-bottom: 2px solid ${getColor('grey', '200')};
	`}
`;

const Icon = styled(Svg)`
	color: ${getColor('primary', 'main')};
	margin-right: 9px;
`;

const Text = styled(Typography)`
	color: ${getColor('common', 'black')};
`;

export default { Wrapper, Icon, Text };
