import styled from 'styled-components';
import ButtonComponent from 'components/Button';
import Svg from 'components/Svg';
import Typography from 'components/Typography';
import { getColor } from 'utils/theme';

const BaseButton = styled(ButtonComponent)`
	font-size: 14px;
	height: 48px;
	letter-spacing: 2px;
	width: 100%;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-flow: column nowrap;
`;

const WrapperMessage = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
	width: 100%;
`;
const Icon = styled(Svg)`
	color: ${getColor('error', 'main')};
	margin-bottom: 15px;
`;

const Text = styled(Typography)`
	color: ${getColor('error', 'main')};
	text-align: center;
	width: 100%;
	max-width: 250px;
`;

const WrapperButtons = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-top: 15px;
	width: 100%;
`;

const SearchAddress = styled(BaseButton)`
	background-color: ${getColor('common', 'white')};
	color: ${getColor('secondary', 'main')};
	border: 2px ${getColor('secondary', 'main')} solid;
	&:hover {
		color: ${getColor('common', 'black')};
	}
	margin-bottom: 7px;
`;
const FindStore = styled(BaseButton)`
	background-color: ${getColor('secondary', 'main')};
	color: ${getColor('common', 'white')};
	&:hover {
		background-color: ${getColor('common', 'black')};
		color: ${getColor('common', 'white')};
	}
`;

export default {
	Wrapper,
	Text,
	Icon,
	WrapperButtons,
	SearchAddress,
	WrapperMessage,
	FindStore
};
