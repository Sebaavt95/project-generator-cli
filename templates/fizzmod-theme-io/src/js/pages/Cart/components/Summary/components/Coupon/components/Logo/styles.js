import styled from 'styled-components';
import Svg from 'components/Svg';
import { getColor } from 'utils/theme';
import Typography from 'components/Typography';

const baseIcon = styled(Svg)`
	svg {
		width: inherit;
	}
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 21px;
`;

const IconLeft = styled(baseIcon)``;

const IconRight = styled(baseIcon)``;

const IconCoupon = styled(baseIcon)`
	margin-left: 21px;
	margin-right: 10px;
`;

const Text = styled(Typography)`
	color: ${getColor('common', 'black')};
	max-width: 119px;
`;

export default { Wrapper, IconLeft, IconRight, IconCoupon, Text };
