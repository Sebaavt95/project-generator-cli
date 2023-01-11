import styled from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';
import { Scrollbars } from 'react-custom-scrollbars';
import ButtonComponent from 'components/Button';
import TitleComp from '../Title';
import SubtitleComp from '../Subtitle';

const BaseButton = styled(ButtonComponent)`
	height: 48px;
	width: 320px;
	padding: 6px 0;
	${mediaBreaks.tablet`
		width: 100%;
	`}
	& .button-label {
		letter-spacing: 2px;
	}
`;

const Wrapper = styled.div`
	width: 776px;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	background-color: ${getColor('common', 'white')};
	${mediaBreaks.tablet`
		width: 100%;
	`}
`;

const Head = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	padding: 30px 0;
	background-color: ${getColor('grey', '200')};
	width: 100%;
	${mediaBreaks.tablet`
		padding: 20px 0 10px;
	`}
`;

const Title = styled(TitleComp)``;

const Subtitle = styled(SubtitleComp)`
	margin-top: 25px;
	width: 100%;
	max-width: 425px;
	${mediaBreaks.tablet`
		width: 100%;
		text-align: center;
		margin-top: 15px;
		margin-bottom: 5px;
	`}
	& > p {
		color: ${getColor('grey', '700')};
		text-align: center;
	}
`;

const Content = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 100%;
	background-color: ${getColor('common', 'white')};
`;

const ProductsList = styled.div`
	width: 100%;
	padding: 10px 24px 0 45px;
	${mediaBreaks.tablet`
		padding: 5px 5px 0 10px;
	`}
`;
const ProductsScroll = styled(Scrollbars)`
	display: flex;
	flex-flow: column nowrap;
	height: 204px;
`;
const WrapperButtons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 50px;
	width: 100%;
	${mediaBreaks.tablet`
		flex-flow: column nowrap;
		padding: 10px 15px;
	`}
`;

const ButtonChangeStore = styled(BaseButton)`
	border: 2px solid ${getColor('primary', 'main')};
	border-width: 2px;
	background-color: transparent;
	color: ${getColor('primary', 'main')};

	&:hover {
		color: ${getColor('primary', 'main')};
	}
	${mediaBreaks.tablet`
		margin-bottom: 10px;
	`}
`;
const ButtonConfirm = styled(BaseButton)`
	background-color: ${getColor('primary', 'main')};
	color: ${getColor('common', 'white')};

	&:hover {
		color: ${getColor('common', 'white')};
	}
`;

export default {
	Wrapper,
	Head,
	Title,
	Subtitle,
	Content,
	ProductsList,
	ProductsScroll,
	WrapperButtons,
	ButtonChangeStore,
	ButtonConfirm
};
