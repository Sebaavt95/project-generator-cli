import styled from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';

const Wrapper = styled.div`
	background-color: ${getColor('common', 'white')};
	padding: 27px 30px;
	margin-top: auto;
	display: flex;
	flex-flow: column nowrap;
	${mediaBreaks.tablet`
			padding: 27px 15px;
		`}
`;

export default {
	Wrapper
};
