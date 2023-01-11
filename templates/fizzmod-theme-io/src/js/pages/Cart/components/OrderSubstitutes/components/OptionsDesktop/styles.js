import styled, { css } from 'styled-components';
import { mediaBreaks } from 'theme/devices';
import { getColor } from 'utils/theme';
import RadioComponent from 'components/Radio';
import Typography from 'components/Typography';

const OptionsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	max-width: 800px;
	margin: 0 20px;
	justify-content: center;
	align-items: center;
	align-content: center;
`;

const Option = styled.div`
	display: flex;
	padding: 7px 0;
	width: 14px;
	height: 14px;
	position: relative;

	&::before {
		content: '';
		border-radius: 100%;
		border: 1px solid ${getColor('grey', '800')};
		background: ${getColor('common', 'white')};
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		box-sizing: border-box;
		cursor: pointer;
		z-index: 0;

		${({ selected }) =>
			selected &&
			css`
				border: 1px solid ${getColor('primary', 'main')};
			`}
	}

	&:not(:first-child) {
		margin-left: 30px;
	}
`;

const Radio = styled(RadioComponent).attrs({
	size: 'small',
	color: 'primary'
})`
	padding: 0;
	margin-right: 10px;

	&.radio-input {
		opacity: 0;
		z-index: 2;
		position: absolute;
		width: 100%;
		height: 100%;
		margin: 0;
		cursor: pointer;
		top: 0;

		&:focus {
			outline: none;
		}

		${({ checked }) =>
			checked &&
			css`
				width: calc(100% - 6px);
				height: calc(100% - 6px);
				transition: width 0.2s ease-out, height 0.2s ease-out;
			`}
	}

	${mediaBreaks.tablet`
		margin-top: 2px;
	`}
`;

const RadioFill = styled.div`
	background: ${getColor('primary', 'main')};
	width: 0;
	height: 0;
	border-radius: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: width 0.2s ease-in, height 0.2s ease-in;
	z-index: 5;

	${({ selected }) =>
		selected &&
		css`
			width: calc(100% - 6px);
			height: calc(100% - 6px);
			transition: width 0.2s ease-out, height 0.2s ease-out;
		`}
`;

const Label = styled.label`
	cursor: pointer;
	margin-left: 10px;
`;

const LabelText = styled(Typography)`
	color: ${getColor('common', 'black')};
	${({ selected }) =>
		selected &&
		css`
			color: ${getColor('primary', 'main')};
		`}
`;

export default {
	OptionsWrapper,
	Option,
	Radio,
	RadioFill,
	Label,
	LabelText
};
