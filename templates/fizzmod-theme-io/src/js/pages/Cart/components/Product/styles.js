import styled from 'styled-components';
import { getColor } from 'utils/theme';
import IconButton from 'components/IconButton';
import { mediaBreaks } from 'theme/devices';
import QuantitySelectorComponent from 'components/QuantitySelector';

const Wrapper = styled.li`
	display: grid;
	grid-template-columns: 35fr 12fr 20fr 12fr 20fr 35px;
	grid-gap: 15px;
	padding: 17px 0;
	background-color: ${getColor('common', 'white')};
	&:not(:first-child) {
		margin-top: 2px;
	}
`;

const WrapperTotal = styled.div`
	display: flex;
`;

const DeleteIcon = styled(IconButton)`
	background-color: ${getColor('common', 'white')};
	margin-left: auto;
	margin-right: 15px;
	color: ${getColor('grey', '800')};

	&:hover {
		color: ${getColor('grey', '900')};
	}

	${mediaBreaks.tabletLg`
		margin-right: 10px;
	`}
`;

const QuantitySelector = styled(QuantitySelectorComponent)`
	width: 150px;
	display: flex;
	align-self: center;
`;

export default {
	Wrapper,
	WrapperTotal,
	DeleteIcon,
	QuantitySelector
};
