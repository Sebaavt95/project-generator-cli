import styled from 'styled-components';
import { getColor } from 'utils/theme';
import Typography from 'components/Typography';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	&:not(:first-child) {
		margin-top: 20px;
	}
`;

const Title = styled(Typography)`
	color: ${getColor('secondary', 'main')};
`;

const Value = styled(Typography)`
	color: ${({ highlight }) =>
		highlight ? getColor('primary', 'main') : getColor('secondary', 'light')};
`;

export default {
	Wrapper,
	Title,
	Value
};
