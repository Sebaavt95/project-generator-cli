import styled, { css } from 'styled-components';
import Button from 'components/Button';
import { mediaBreaks } from 'theme/devices';
import { getColor } from 'utils/theme';
import Typography from 'components/Typography';

const BaseButton = styled(Button)`
	height: 48px;
	max-width: 300px;
	width: 100%;
	${({ order }) =>
		order &&
		css`
			order: ${order};
		`}
	${mediaBreaks.tablet`
		max-width: initial;
		width: calc(50% - 5px);
		height: 54px;
	`}
	${mediaBreaks.mobile`
		width: 100%;
	`}
`;

const Wrapper = styled.div`
	padding: 27px 30px;
	display: flex;
	flex-flow: column nowrap;
	background-color: ${getColor('common', 'white')};
	border-top: 2px solid ${getColor('grey', '200')};
	${mediaBreaks.tablet`
			padding: 27px 15px;
		`}
`;

const WrapperText = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 18px;
`;

const Text = styled(Typography)`
	color: ${getColor('secondary', 'main')};
`;

const Wrapperbtns = styled.div`
	display: flex;
	width: 100%;
	flex-flow: column nowrap;
	${mediaBreaks.tablet`
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
	`}
	${mediaBreaks.mobile`
		flex-flow: column nowrap;
	`}
	a[disabled] {
		pointer-events: none;
		background-color: ${getColor('grey', '600')};
		color: ${getColor('common', 'white')};
	}
`;

const Checkout = styled(BaseButton)`
	margin-bottom: 13px;
	background-color: ${getColor('primary', 'main')};
	color: ${getColor('common', 'white')};
	&:hover {
		color: ${getColor('common', 'white')};
	}
	${mediaBreaks.tablet`
			margin-bottom: 0;
		`}
	${mediaBreaks.mobile`
			margin-bottom: 13px;
		`}
`;

const BuyMore = styled(BaseButton)`
	background-color: ${getColor('common', 'white')};
	color: ${getColor('secondary', 'main')};
	border: 2px ${getColor('secondary', 'main')} solid;
	&:hover,
	&:focus {
		color: ${getColor('common', 'black')};
		text-decoration: none;
	}
	${mediaBreaks.mobile`
			height: 40px;
	`}
`;

export default { Wrapper, WrapperText, Text, Wrapperbtns, Checkout, BuyMore };
