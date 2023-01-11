import styled from 'styled-components';
import { getColor } from 'utils/theme';
import Typography from 'components/Typography';
import PopupComponent from 'components/Popup';
import { mediaBreaks } from 'theme/devices';

const SuccessPopup = styled(PopupComponent)`
	overflow: visible;
	width: calc(100% - 30px);
	max-width: 610px;

	${mediaBreaks.mobile`
		margin: 0;
		height: auto;
		max-height: initial;
		border-radius: 0;
	`}

	z-index: 9999999;
`;

const Success = styled.div`
	width: 100%;

	${mediaBreaks.mobile`
			height: 100%;
		`}
`;

const Wrapper = styled.div`
	width: 100%;
	background: ${getColor('common', 'white')};
	height: 288px;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: center;

	${mediaBreaks.tablet`
		padding: 25px;
	`}
`;

const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	width: 62px;
	height: 62px;
	margin-bottom: 16px;
	${mediaBreaks.tablet`
		margin-bottom: 30px;
	`}
`;

const SuccessText = styled(Typography)`
	color: ${getColor('primary', 'main')};
	text-align: center;
	max-width: 560px;
	margin-bottom: 10px;

	${mediaBreaks.mobile`
			margin-bottom: 30px;
			max-width: 289px;
		`}
`;

const SuccessMessage = styled(Typography)`
	color: ${getColor('grey', '700')};
	width: 100%;
	max-width: 344px;
	text-align: center;

	${mediaBreaks.mobile`
			max-width: 269px;
		`}
`;

export default {
	SuccessPopup,
	Success,
	Wrapper,
	LoaderWrapper,
	SuccessText,
	SuccessMessage
};
