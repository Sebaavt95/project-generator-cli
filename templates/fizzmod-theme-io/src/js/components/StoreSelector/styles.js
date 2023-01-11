import styled from 'styled-components';
import { getColor, getFontWeight } from 'utils/theme';
import Svg from 'components/Svg';
import Typography from 'components/Typography';
import mixins from 'theme/mixins';
import { mediaBreaks } from 'theme/devices';

const StoreSelector = styled.div`
	width: 100%;
	padding: 4px 0;
	height: 100%;
	background-color: ${getColor('primary', 'dark')};
	margin: auto;
	${mediaBreaks.tabletLg`
		max-width: initial;
		margin: initial;
		padding: 0 8px;
		background-color: ${getColor('grey', '200')};
		height: 44px;
		max-height: 44px;
		display: flex;
		justify-content: center;
	`}
	${({ sticky }) => {
		return `
			max-height: ${sticky && !mediaBreaks.tabletLg ? '25px' : '30px'}
		`;
	}}
`;

const Container = styled.div`
	display: flex;
	max-width: 1280px;
	margin: auto;
	align-items: center;
	${mediaBreaks.tabletLg`
		flex-flow: row nowrap;
		align-items: center;
		width: 100%;
	`}
`;

const Wrapper = styled.div`
	display: flex;
	text-align: left;
	align-items: center;
	${mediaBreaks.tabletLg`
		flex-flow: row nowrap;
		align-items: center;
		width: 100%;
	`}
`;

const Text = styled(Typography)`
	margin-right: 11px;
	color: ${getColor('common', 'white')};

	${mediaBreaks.tabletLg`
			color: ${getColor('grey', '700')};
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		`}
`;
const Icon = styled(Svg)`
	color: ${getColor('common', 'white')};
	${mediaBreaks.tabletLg`
		color: ${getColor('grey', '700')};
	`}
	margin-right: 9px;
`;

const Button = styled.button`
	color: ${getColor('common', 'black')};
	font-size: 12px;
	width: 100%;
	letter-spacing: 0;
	line-height: 18px;
	cursor: pointer;
	${mixins.removeButtonStyle}
	padding: 0 35px;
	${mediaBreaks.tabletLg`
			color: ${getColor('grey', '700')};
			${getFontWeight('regular')};
			padding: 7px 0;
		`}
`;
export default {
	StoreSelector,
	Container,
	Wrapper,
	Text,
	Button,
	Icon
};
