import styled from 'styled-components';
import SelectComponent from 'components/Select';
import { mediaBreaks } from 'theme/devices';

const SelectWrapper = styled.div`
	display: flex;
	align-items: center;
	align-content: center;

	.react-select-container {
		width: 100%;
		max-width: 250px;

		${mediaBreaks.tablet`
			max-width: initial;
		`}
	}
`;

const Select = styled(SelectComponent)``;

export default {
	SelectWrapper,
	Select
};
