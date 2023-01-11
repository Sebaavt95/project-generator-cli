import styled from 'styled-components';
import { getColor, getFontWeight } from 'utils/theme';
import MercadoPago from 'components/Logos/MercadoPago';
import { mediaBreaks } from 'theme/devices';
import Typography from 'components/Typography';

const Wrapper = styled.div`
	display: none;
	height: 64px;
	justify-content: center;
	align-items: center;
	${mediaBreaks.tablet`
			padding: 15px 0;
		`}
`;

const Text = styled(Typography)`
	text-transform: uppercase;
	background-color: red;
	margin-right: 14px;
	letter-spacing: 1px;
	color: ${getColor('grey', '700')};
	${getFontWeight('light')}
`;

const Mp = styled(MercadoPago)`
	margin: 0 0;
`;

export default { Wrapper, Text, Mp };
