import styled from 'styled-components';
import { mediaBreaks } from 'theme/devices';
import mixins from 'theme/mixins';
import Typography from 'components/Typography';
import ButtonComponent from 'components/Button';
import { getColor } from 'utils/theme';

const Wrapper = styled.div`
	${mixins.flexCenter};
	height: 62px;
	margin: 0;
	padding: 0;
	width: 100%;

	${mediaBreaks.tablet`
	    margin: 0 auto;
	    width: 90%;
	`}
`;

const Button = styled(ButtonComponent)`
	height: 100%;
	width: 100%;
	background-color: ${getColor('primary', 'main')};
	color: ${getColor('common', 'white')};
	&:hover {
		color: ${getColor('common', 'white')};
	}
`;

const Text = styled(Typography)``;

export default {
	Wrapper,
	Button,
	Text
};
