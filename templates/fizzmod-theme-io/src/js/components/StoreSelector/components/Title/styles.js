import styled from 'styled-components';
import Svg from 'components/Svg';
import Typography from 'components/Typography';
import { getColor } from 'utils/theme';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;
const Text = styled(Typography)`
	color: ${getColor('common', 'black')};
`;
const Icon = styled(Svg)`
	margin-right: 20px;
	color: ${getColor('primary', 'main')};
`;

export default {
	Wrapper,
	Text,
	Icon
};
