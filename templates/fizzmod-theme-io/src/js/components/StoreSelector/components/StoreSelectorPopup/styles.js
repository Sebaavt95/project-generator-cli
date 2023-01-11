import styled from 'styled-components';
import PopupComponent from 'components/Popup';
import IconButtonComponent from 'components/IconButton';
import Svg from 'components/Svg';
import Typography from 'components/Typography';
import { mediaBreaks } from 'theme/devices';
import { getColor } from 'utils/theme';
import mixins from 'theme/mixins';

const StoreSelectorPopup = styled(PopupComponent)`
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: none;
	position: fixed;

	&[open] {
		box-shadow: 0 14px 18px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.25);
		display: block;
		z-index: 9999;

		${mediaBreaks.tablet`
			width: 100%;
			height: 100%;
			max-height: none;
			margin: 0 auto;
			border-radius: 0;
		`}
	}
`;

const Wrapper = styled.div`
	width: 100%;
	padding: 0;

	${mediaBreaks.mobile`
    width: 100%;
		height: 100%;
		display: flex;
    `}
`;

const CloseButton = styled(IconButtonComponent)`
	position: absolute;
	top: 8px;
	right: 12px;
	padding: 0;
	width: 19px;
	height: 19px;
	background: ${getColor('grey', '200')};
	color: ${getColor('grey', '700')};
	z-index: 25;
	&:hover {
		color: ${getColor('grey', '800')};
		background: ${getColor('grey', '200')};
	}

	${mixins.hoverOnly`
			background: ${getColor('grey', '200')};
			color: ${getColor('grey', '800')};
		`}
	${mediaBreaks.tablet`
			top: 15px;
			width: 22px;
			height: 22px;
			background: none;
		`}
`;
const Footer = styled.div`
	width: 100%;
	padding: 14px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${getColor('grey', '300')};
	text-align: center;
	color: ${getColor('grey', '700')};

	${mediaBreaks.mobile`
			padding: 14px 15px;
		`}
`;
const Content = styled.div`
	width: 100%;
	background: ${getColor('grey', '300')};
`;
const Clarification = styled(Typography)`
	color: ${getColor('grey', '600')};

	${mediaBreaks.mobile`
			text-align: left;
		`}
`;
const ExclamationIcon = styled(Svg)`
	color: ${getColor('secondary', 'main')};
	margin-right: 11px;
`;
export default {
	StoreSelectorPopup,
	Wrapper,
	CloseButton,
	Footer,
	Content,
	Clarification,
	ExclamationIcon
};
