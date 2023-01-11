import styled from 'styled-components';
import ButtonComponent from 'components/Button';
import Svg from 'components/Svg';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';
import Typography from 'components/Typography';

const Wrapper = styled.div`
	background-color: ${getColor('grey', '200')};
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Inner = styled.div`
	display: flex;
	align-items: flex-end;
	${mediaBreaks.mobile`
		width: 100%;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: center;
		`}
`;

const EmptyCart = styled(Svg)``;

const WrapperContent = styled.div`
	margin-left: 40px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	${mediaBreaks.mobile`;
			margin: 0;
			width: 100%;
			align-items: center;
		`}
`;

const Title = styled(Typography)`
	color: ${getColor('secondary', 'main')};
	width: 220px;
	margin-bottom: 5px;
	position: relative;
	&:after {
		position: absolute;
		content: '';
		width: 100%;
		bottom: -5px;
		left: 0;
		height: 1px;
		background-color: ${getColor('grey', '700')};
	}
	${mediaBreaks.mobile`
			margin-top: 30px;
			text-align: center;
		`}
`;
const Text = styled(Typography)`
	width: 337px;
	color: ${getColor('grey', '700')};
	margin: 11px 0;
	${mediaBreaks.mobile`
			width: 100%;
			max-width: 220px;
			text-align: center;
			margin-bottom: 17px;
		`}
`;
const Button = styled(ButtonComponent)`
	width: 220px;
	padding: 17px 0;
	background-color: ${getColor('secondary', 'main')};
	color: ${getColor('common', 'white')};
	&:hover {
		color: ${getColor('common', 'white')};
	}
`;

export default { Wrapper, Inner, EmptyCart, WrapperContent, Title, Text, Button };
