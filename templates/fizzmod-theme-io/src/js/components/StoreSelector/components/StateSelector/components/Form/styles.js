import styled from 'styled-components';
import ButtonComp from 'components/Button';
import { mediaBreaks } from 'theme/devices';
import { getColor, getFontWeight } from 'utils/theme';
import Svg from 'components/Svg';
import Typography from 'components/Typography';
import SpinnerLoader from 'components/SpinnerLoader';
import SelectComp from 'components/Select';
import GoBackComp from '../../../GoBack';

const Wrapper = styled.form`
	position: absolute;
	z-index: 20;
	height: 320px;
	width: 403px;
	background: ${getColor('common', 'white')};
	left: -125px;
	display: flex;
	flex-flow: column nowrap;
	padding: 24px 29px;
	${mediaBreaks.tablet`
		position: initial;
		order: 2;
		height: auto;
		min-height: 200px;
		height: 100%;
		left: 0;
		width: 100%;
		padding: 10px;
	`}
`;

const Head = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	${mediaBreaks.tablet`
		width: 100%;
		height: 54px;
		padding: 0;
		position: absolute;
		top: 0;
	`}
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: ${getColor('grey', '500')};
	}
`;
const Content = styled.div`
	display: flex;
	flex-flow: column nowrap;
	height: 100%;
	padding-top: 25px;
	${mediaBreaks.tablet`
		justify-content: space-between;
	`}
`;
const Title = styled(Typography)`
	color: ${getColor('common', 'black')};
	${mediaBreaks.tablet`
			order: 2
		`}
`;

const GoBack = styled(GoBackComp)`
	margin-left: auto;
	${mediaBreaks.tablet`
		order: 0;
		left: 0;
		margin-left: initial;
		& .button-label {
			font-size: 0;
		}
		position: absolute;
	`}
`;

const Icon = styled(Svg)`
	color: ${getColor('common', 'black')};
	${mediaBreaks.tabletLg`
		color: ${getColor('grey', '700')};
		order: 1;
		margin-left: 39px;
	`}
	margin-right: 11px;
`;

const WrapperSelects = styled.div`
	display: flex;
	justify-content: space-between;
	flex-flow: column nowrap;
	${mediaBreaks.tablet`
		padding: 0 10px 10px;
	`};
`;
const WrapperSelect = styled.div`
	display: flex;
	flex-flow: column nowrap;
	flex-basis: 48.6%;
	margin-bottom: 10px;
	${mediaBreaks.tablet`
		&:last-child {
			margin-top: 15px;
		}
	`}
`;
const Select = styled(SelectComp)`
	flex-basis: 50%;
	& .select-arrow {
		color: ${getColor('grey', '400')};
	}
	&:not(.react-select--is-disabled) {
		.select-arrow {
			color: ${getColor('primary', 'main')};
		}
	}
	& .react-select__placeholder {
		font-size: 13px;
		letter-spacing: 0.5px;
		color: ${getColor('grey', '600')};
		${getFontWeight('regular')};
	}
	& .react-select__single-value {
		text-transform: capitalize;
		letter-spacing: 0.5px;
	}
	& .react-select__option {
		font-size: 13px;
		color: ${getColor('grey', '800')};
		letter-spacing: 0.5px;
		text-transform: none;
		${getFontWeight('regular')};
		&--is-selected {
			color: ${getColor('grey', '800')};
			background-color: ${getColor('common', 'white')};
		}
		&--is-focused {
			color: ${getColor('secondary', 'main')};
			background-color: ${getColor('grey', '200')};
		}
	}
	& .react-select__menu {
		border: none;
	}
	& .react-select__menu-list {
		background-color: ${getColor('common', 'white')};
		border: 1px solid ${getColor('grey', '500')};
	}
`;

const Label = styled(Typography)`
	color: ${getColor('common', 'black')};
	margin-bottom: 8px;
	text-transform: uppercase;
`;

const Button = styled(ButtonComp)`
	margin: auto 0 0;
	height: 48px;
	background-color: ${getColor('primary', 'main')};
	color: ${getColor('common', 'white')};
	${mediaBreaks.tablet`
		margin-top: 10px;
	`}
	&:hover {
		color: ${getColor('common', 'white')};
	}
`;

const Loading = styled(SpinnerLoader)`
	margin: auto;
`;

export default {
	Wrapper,
	Head,
	Content,
	WrapperSelects,
	WrapperSelect,
	Select,
	Label,
	Title,
	Button,
	GoBack,
	Loading,
	Icon
};
