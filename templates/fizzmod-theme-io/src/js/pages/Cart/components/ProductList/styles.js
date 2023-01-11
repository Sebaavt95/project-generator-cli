import styled, { css } from 'styled-components';
import { getColor } from 'utils/theme';
import { Scrollbars as ScrollbarsComponent } from 'react-custom-scrollbars';
import { mediaBreaks } from 'theme/devices';
import Typography from 'components/Typography';

const Wrapper = styled.div`
		background-color: inherit;
		padding: 20px 5px 20px 20px;
		${mediaBreaks.tablet`
			padding: 0;
		`}
		${mediaBreaks.tabletLg`
			padding-right: 5px;
		`}
		${mediaBreaks.tablet`
			padding-right: 0;
		`}
	`;

const HeaderGrid = styled.div`
	display: grid;
	grid-template-columns: 35fr 12fr 20fr 12fr 20fr 35px;
	grid-gap: 15px;
	margin-bottom: 7px;
	margin-right: 15px;
	${mediaBreaks.tabletLg`
			margin-right: 0;
		`}
`;

const LoadingWrapper = styled.div`
	width: 100%;
	height: auto;
	position: relative;
	${({ isLoading }) =>
		isLoading &&
		css`
			&::after {
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				content: '';
				background: ${getColor('common', 'white')};
				opacity: 0.8;
			}
		`}
`;

const WrapperList = styled.div``;

const List = styled.ul`
	padding-right: 15px;
	height: 100%;
	${mediaBreaks.tabletLg`
		padding-right: 15px;
	`}
	${mediaBreaks.tablet`
		padding-right: 0;
	`}
`;

const Scrollbars = styled(ScrollbarsComponent)``;

const Text = styled(Typography)`
	color: ${getColor('common', 'black')};

	&:first-child {
		padding-left: 20px;
	}
`;

export default { Wrapper, HeaderGrid, LoadingWrapper, WrapperList, List, Scrollbars, Text };
