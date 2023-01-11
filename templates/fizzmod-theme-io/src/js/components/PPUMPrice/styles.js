import styled from 'styled-components';
import { getColor } from 'utils/theme';
import Typography from 'components/Typography';

const PPUMPrice = styled(Typography)`
	color: ${getColor('grey', '700')};
`;
const EmptyDiv = styled.div``;

export default { PPUMPrice, EmptyDiv };
