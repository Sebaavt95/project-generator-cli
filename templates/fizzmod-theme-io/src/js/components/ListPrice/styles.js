import styled from 'styled-components';
import { getColor } from 'utils/theme';
import Typography from 'components/Typography';

const ListPrice = styled(Typography)`
	color: ${getColor('grey', '600')};
	text-decoration: line-through;
`;
export default { ListPrice };
