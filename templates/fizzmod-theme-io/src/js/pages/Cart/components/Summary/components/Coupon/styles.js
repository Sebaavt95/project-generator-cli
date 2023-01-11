import styled, { css } from 'styled-components';
import { mediaBreaks } from 'theme/devices';
import InputComponent from 'components/Input';
import ButtonComponent from 'components/Button';
import { getColor, getTransition } from 'utils/theme';
import Svg from 'components/Svg';
import Typography from 'components/Typography';

const Wrapper = styled.div`
	display: flex;
	background-color: ${getColor('grey', '100')};
	flex-flow: column nowrap;
	padding: 37px 30px;
	${mediaBreaks.tablet`
		align-items: center;
		padding: 37px 15px;
	`}
`;

const Text = styled(Typography)`
	color: ${getColor('common', 'black')};
	margin-bottom: 3px;
	${mediaBreaks.tablet`
			margin-right: auto;
		`}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const StatusMessage = styled(Typography)`
	${({ color }) => {
		switch (color) {
			case 'success':
				return css`
					color: ${getColor('success', 'main')};
				`;
			case 'error':
				return css`
					color: ${getColor('error', 'main')};
				`;
			default:
				return css`
					color: ${getColor('info', 'main')};
				`;
		}
	}}
	margin-top: 6px;
	${getTransition()};
	${mediaBreaks.tablet`
			margin-right: auto;
		`}
`;

const WrapperInput = styled.div`
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
	width: 173px;
	border: 1px solid;
	background-color: ${getColor('common', 'white')};
	border-color: ${({ error }) => (error ? getColor('error', 'main') : getColor('grey', '300'))};
	${getTransition()};
	${mediaBreaks.tablet`
			width: 57.2%;
		`}
`;

const Input = styled(InputComponent)`
	&.native-input {
		height: 40px;
		padding-left: 14px;
		border: none;
		font-size: 12px;
		letter-spacing: 0.5px;
		box-sizing: border-box;
		color: ${getColor('grey', '800')};
	}
`;

const IconSuccess = styled(Svg)`
	margin-left: auto;
	margin-right: 12px;
	color: ${getColor('success', 'main')};
	${getTransition()};
`;

const Button = styled(ButtonComponent)`
	width: 121px;
	background-color: ${getColor('secondary', 'main')};
	color: ${getColor('common', 'white')};
	${getTransition('all', 'shortest')};
	${mediaBreaks.tablet`
		width: 40.7%;
	`}
	&:hover {
		color: ${getColor('common', 'white')};
	}
`;

export default {
	Wrapper,
	Text,
	Content,
	WrapperInput,
	Input,
	IconSuccess,
	Button,
	StatusMessage
};
