import styled from 'styled-components';
import Svg from 'components/Svg';
import Typography from 'components/Typography';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	max-width: 270px;
	${mediaBreaks.tablet`
		max-width: initial;
		padding: 0 10px;
	`}
`;
const Text = styled(Typography)`
	width: 100%;
	margin: 0 auto;
	color: ${getColor('common', 'black')};
`;
const Icon = styled(Svg)`
	margin-right: 20px;
`;

export default {
	Wrapper,
	Text,
	Icon
};
