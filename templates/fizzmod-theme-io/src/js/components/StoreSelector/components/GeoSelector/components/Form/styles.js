import styled from 'styled-components';
import ButtonComp from 'components/Button';
import { mediaBreaks } from 'theme/devices';
import { getColor } from 'utils/theme';
import Svg from 'components/Svg';
import Typography from 'components/Typography';
import SearchResultComp from '../SearchResult';
import InputComp from '../Input';
import GoBackComp from '../../../GoBack';
import SpinnerLoader from 'components/SpinnerLoader';

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
		height: calc(100% - 241px);
		left: 0;
		width: 100%;
		padding: 10px;
	`}
	a[disabled] {
		pointer-events: none;
		background-color: ${getColor('grey', '600')};
		color: ${getColor('common', 'white')};
	}
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
		order: 1
	`}
`;

const InputAddress = styled(InputComp)`
	height: auto;
	display: block;
	padding: 0px 14px;

	.native-input {
		height: 40px;
		display: block;
		width: 100%;
		border: 1px ${getColor('grey', '600')} solid;
		padding: 6px 15px 7px;
		border-radius: 0;

		&:focus {
			border: 1px ${getColor('grey', '600')} solid;
		}
	}
`;

const InputStreetNumber = styled(InputComp)`
	margin-top: 16px;
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

const WrapperAutoComplete = styled.div`
	position: relative;
`;

const SearchResultsWrapper = styled.div`
	z-index: 10;
	position: absolute;
	width: 100%;
	background-color: ${getColor('common', 'white')};
`;

const SearchResults = styled.div`
	display: flex;
	flex-flow: column nowrap;
	background-color: ${getColor('grey', '100')};
	width: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	max-height: 115px;
	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
		padding-right: 2px;
		background-color: transparent;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background-color: ${getColor('grey', '600')};
	}
`;
const SearhResult = styled(SearchResultComp)``;

const Loading = styled(SpinnerLoader)`
	margin: auto;
`;

export default {
	Wrapper,
	Head,
	Content,
	Title,
	InputAddress,
	InputStreetNumber,
	Button,
	GoBack,
	SearchResults,
	SearhResult,
	WrapperAutoComplete,
	SearchResultsWrapper,
	Loading,
	Icon
};
