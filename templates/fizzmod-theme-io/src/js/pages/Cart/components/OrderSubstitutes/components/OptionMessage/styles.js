import styled from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';

const MessageWrapper = styled.div`
	display: flex;
	justify-content: center;
	background: ${getColor('common', 'white')};
	align-items: center;
	padding: 8px 36px;
	border-top: 1px solid ${getColor('grey', '200')};

	${mediaBreaks.tablet`
			padding: 15px;
			background: ${getColor('grey', '200')}
			border-top: none;
		`}
`;

const Text = styled.label`
	height: 16px;
	color: ${getColor('grey', '600')};
	font-size: 10px;
	font-weight: 500;
	line-height: 16px;
	letter-spacing: 0px;
	font-style: normal;
	${mediaBreaks.tablet`
			color: ${getColor('common', 'black')};
		`}
`;

export default {
	MessageWrapper,
	Text
};
