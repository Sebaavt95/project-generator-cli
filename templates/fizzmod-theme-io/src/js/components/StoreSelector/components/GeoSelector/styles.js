import styled from 'styled-components';
import { mediaBreaks } from 'theme/devices';
import { getColor } from 'utils/theme';
import MapComp from '../Map';

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	${mediaBreaks.tablet`
		flex-flow: column nowrap;
		height: 100vh;
	`}
`;
const WrapperMap = styled.div`
	width: 611px;
	height: 413px;
	background: ${getColor('common', 'white')};
	${mediaBreaks.tablet`
		width: 100%;
		height: 241px;
		margin-top: 54px;
	`}
`;
const Map = styled(MapComp)``;

export default {
	Wrapper,
	WrapperMap,
	Map
};
