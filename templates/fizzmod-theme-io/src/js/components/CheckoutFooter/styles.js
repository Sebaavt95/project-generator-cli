import styled, { css } from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';
import Svg from 'components/Svg';
import LinkComponent from 'components/Link';
import Typography from 'components/Typography';

const Footer = styled.div`
	background: ${getColor('common', 'white')};
	bottom: 0;
	border-top: 2px solid ${getColor('grey', '200')};
	box-sizing: border-box;
	height: 64px;
	margin-top: 63px;
	padding: 25px 31px 26px 26px;
	position: fixed;
	width: ${({ inPurchase, isCheckout }) =>
		inPurchase || isCheckout ? 'calc(100% - 360px)' : '100%'};
	z-index: ${({ isCheckout }) => (isCheckout ? 9 : 9999)};

	${mediaBreaks.tablet`
		border: none;
		height: 100%;
		margin-top: 0;
		position: relative;
		padding: 25px 22px;
		width: 100%;
		z-index: 4;
	`}
`;
const Wrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: ${({ inPurchase }) => (inPurchase ? 'end' : 'space-between')};
	margin: -10px auto 0;
	width: 96vw;
	max-width: 1440px;

	${mediaBreaks.tablet`
		flex-flow: column nowrap;
		justify-content: center;
		width: 100%;
	`}

	${mediaBreaks.desktopLg`
		width: 100%;
	`}

	${({ cart }) =>
		cart &&
		css`
			width: 100%;
			height: 100%;
			padding: 0 15px;
			margin: auto;
		`}
`;
const Secure = styled.div`
	align-items: center;
	justify-content: center;
	line-height: 16px;
	padding: 4px 0 20px;
	text-align: center;
	width: 185px;

	${mediaBreaks.tablet`
		display: flex;
	`}
`;
const Disclaimer = styled.div`
	${({ inPurchase }) =>
		inPurchase &&
		css`
			width: 50%;
		`}

	${mediaBreaks.tablet`
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		
		${({ inPurchase }) =>
			inPurchase &&
			css`
				width: 100%;
			`}
	`}
`;
const Brands = styled.div`
	align-items: center;
	display: inline-flex;
	justify-content: ${({ inPurchase }) => (inPurchase ? 'flex-end' : 'center')};
	${({ inPurchase }) =>
		inPurchase &&
		css`
			width: 50%;
		`}

	${mediaBreaks.tablet`
		justify-content: center;
		margin: 20px 0 0;
		${({ inPurchase }) =>
			inPurchase &&
			css`
				width: 100%;
			`}
	`}
`;
const LinksWrapper = styled.div`
	display: inline-block;
`;

const Icon = styled(Svg)``;
const Fizzmod = styled(Svg)`
	color: ${getColor('grey', '600')};
`;
const Vtex = styled(Svg)`
	color: ${getColor('grey', '600')};
	margin-right: 21px;
`;

const Text = styled(Typography)`
	color: ${getColor('grey', '700')};
	margin-right: 19px;

	${mediaBreaks.tablet`
		margin-right: 0;
		margin-bottom: 10px;
	`}
`;
const SecureText = styled(Typography)`
	color: ${getColor('secondary', 'light')};
	display: inline-block;
	margin: 0;
`;
const LinkText = styled(Typography)`
	color: ${getColor('grey', '700')};
	text-decoration: none;
`;

const Link = styled(LinkComponent)``;

export default {
	Footer,
	Wrapper,
	Secure,
	Disclaimer,
	Brands,
	LinksWrapper,
	Icon,
	Fizzmod,
	Vtex,
	Text,
	SecureText,
	LinkText,
	Link
};
