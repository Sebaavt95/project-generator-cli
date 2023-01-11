import styled from 'styled-components';
import { getColor } from 'utils/theme';
import Typography from 'components/Typography';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Total = styled(Typography)`
	color: ${getColor('secondary', 'main')};
`;

export default { Wrapper, Total };
