import styled from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';
import Svg from 'components/Svg';
import LinkComponent from 'components/Link';
import Typography from 'components/Typography';

const PurchaseFlow = styled.div`
	box-sizing: border-box;
	padding-top: 60px;
	background-color: ${getColor('common', 'white')};
	margin-bottom: 32px;
	border-bottom: 2px solid ${getColor('grey', '200')};

	${mediaBreaks.tablet`
			height: 54px;
			padding: 0;
			margin-bottom: ${({ emailStep }) => (emailStep ? '48px' : 0)};
			background-color: ${getColor('grey', '200')};
		`}
`;
const Wrapper = styled.div`
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 96vw;
	max-width: 1440px;
	position: relative;
	box-sizing: border-box;
	height: 64px;

	${mediaBreaks.tablet`
		height: 54px;
	`}

	${mediaBreaks.mobile`
		width: 94vw;
	`}
`;
const Title = styled.div`
	display: flex;
	width: 100%;
	padding-left: 10px;

	${mediaBreaks.tablet`
		padding-left: 0;
		justify-content: center;
	`}
`;
const FinishPurchase = styled.div`
	align-items: center;
	color: ${getColor('secondary', 'light')};
	display: flex;
	justify-content: center;
	margin: 0 auto;
	order: 2;
`;
const GoBack = styled.div`
	justify-self: right;

	${mediaBreaks.tablet`
		position: absolute;
		left: 0;
	`}
`;

const Steps = styled.ul`
	display: flex;
	margin: 0;
	padding: 0 20px;
	min-width: 420px;
	height: 100%;
	width: calc(100% - 361px);
	justify-content: center;
`;

const Icon = styled(Svg)`
	margin-right: 10px;
`;

const Link = styled(LinkComponent)`
	display: flex;
	width: 287px;
	height: 64px;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	color: ${getColor('grey', '600')};
	border-left: 2px solid ${getColor('grey', '200')};

	${mediaBreaks.tablet`
		height: 54px;
		width: auto;
		border: none;
		font-size: 0;
	`}

	&:hover {
		color: ${getColor('grey', '600')};
	}
`;

const Text = styled(Typography)``;

export default {
	PurchaseFlow,
	Wrapper,
	Title,
	FinishPurchase,
	Steps,
	GoBack,
	Icon,
	Link,
	Text
};
