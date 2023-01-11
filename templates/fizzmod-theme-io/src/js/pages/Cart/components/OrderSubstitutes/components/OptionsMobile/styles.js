import styled from 'styled-components';
import SelectComponent from 'components/Select';

const SelectWrapper = styled.div`
	width: 100%;
	max-width: 300px;

	.react-select-container {
		width: 100%;
	}
`;

const Select = styled(SelectComponent)``;

export default {
	SelectWrapper,
	Select
};
