import styled from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';
import TitleComp from '../Title';
import SubtitleComp from '../Subtitle';

const Wrapper = styled.div`
	width: 737px;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	background-color: ${getColor('common', 'white')};
	${mediaBreaks.tablet`
		width: 100%;
		height: 100%;
		justify-content: center;
	`}
`;
const Content = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding: 0 50px 28px;
	${mediaBreaks.tablet`
		padding: 0 12px 15px;
		flex-flow: column nowrap;
		height: calc(100% - 126px);
	`}
`;

const Head = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	padding: 36px 0;
	width: 100%;
	${mediaBreaks.tablet`
		padding-bottom: 20px;
	`}
`;

const Title = styled(TitleComp)`
	margin-bottom: 29px;
`;
const Subtitle = styled(SubtitleComp)`
	max-width: 458px;
	width: 100%;
	text-align: center;
`;
export default {
	Wrapper,
	Content,
	Head,
	Title,
	Subtitle
};
