import styled from 'styled-components';
import { getColor } from 'utils/theme';
import Typography from 'components/Typography';

const BestPrice = styled(Typography)`
	color: ${getColor('secondary', 'main')};
`;

export default { BestPrice };
