import styled from 'styled-components';
import InputComp from 'components/Input';
import Typography from 'components/Typography';
import { getColor } from 'utils/theme';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const Label = styled.label`
	margin-bottom: 8px;
`;

const Input = styled(InputComp)`
	height: 40px;
	padding: 0 14px;
	border: 1px solid ${getColor('grey', '300')};
	background-color: ${getColor('common', 'white')};
`;

const Text = styled(Typography)`
	color: ${getColor('common', 'black')};
`;
export default {
	Wrapper,
	Label,
	Input,
	Text
};
