import styled from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';
import Svg from 'components/Svg';
import LinkComponent from 'components/Link';
import Typography from 'components/Typography';

const Header = styled.div`
	box-sizing: border-box;
	position: fixed;
	top: 0;
	z-index: 9999;
	background: ${getColor('primary', 'main')};
	height: 60px;
	width: 100%;
	display: flex;

	${mediaBreaks.tablet`
			width: 100%;
			padding: 10px;
			margin: 0;
			height: 54px;
			position: relative;
		`}
`;
const Wrapper = styled.div`
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 96vw;
	max-width: 1440px;
`;
const Title = styled.div`
	display: flex;
	align-items: center;
	width: 80%;

	${mediaBreaks.tablet`
		justify-content: center;
		width: 100%;
	`}
`;
const Secure = styled.div`
	width: 20%;
	text-align: right;
	line-height: 16px;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	${mediaBreaks.tablet`
		display: flex;
	`}
`;

const Icon = styled(Svg)``;

const Link = styled(LinkComponent)``;

const Text = styled(Typography)`
	margin: 0;
	color: ${getColor('common', 'white')};
`;

export default {
	Header,
	Wrapper,
	Title,
	Secure,
	Icon,
	Link,
	Text
};
