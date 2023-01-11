import styled from 'styled-components';
import Svg from 'components/Svg';
import Button from 'components/Button';
import Typography from 'components/Typography';
import { getColor, getTransition } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';

const Wrapper = styled(Button)`
	display: flex;
	flex-flow: column nowrap;
	width: 302px;
	height: 192px;
	align-items: center;
	border: 2px solid ${getColor('grey', '300')};
	margin: 0 9px;
	${mediaBreaks.tablet`
		width: 100%;
		${({ quantity }) => {
			return `height: calc((100vh - 175px) / ${quantity});`;
		}}
		margin-bottom: 10px;
		max-height: 180px;
	`}
	& .button-label {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	}
	&:hover {
		background: none;
		border: 2px solid transparent;
		box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.15);
		${getTransition('all', 'shortest')};
		& > p,
		& > .svg-icon {
			color: ${getColor('common', 'black')};
			${getTransition('all', 'shortest')};
		}
	}
`;
const Icon = styled(Svg)`
	margin-bottom: 22px;
	color: ${getColor('grey', '600')};
`;
const Text = styled(Typography)`
	letter-spacing: 2px;
	color: ${getColor('grey', '600')};
	text-transform: uppercase;
`;
export default { Wrapper, Icon, Text };
