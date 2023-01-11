import styled, { css } from 'styled-components';
import InputComponent from 'components/Input';
import { getColor, getTransition } from 'utils/theme';
import familySize from 'theme/familySize';
import IconButton from 'components/IconButton';

const QuantityButtonBase = styled(IconButton)`
	min-width: initial;
	width: ${({ buttonsWidth }) => `${buttonsWidth}px`};
	height: 100%;
	background-color: ${getColor('grey', '600')};
	display: flex;
	align-items: center;
	justify-content: center;
	${getTransition()}

	&.button-disabled {
		background: ${getColor('grey', '200')};

		.button-label {
			color: ${getColor('common', 'white')};
		}
	}

	&:hover {
		background-color: ${getColor('grey', '700')};
	}
`;

const Selector = styled.div`
	width: 100%;
	height: ${({ height }) => `${height}px`};
	display: flex;
	position: relative;

	${({ loading }) =>
		loading &&
		css`
			&::before {
				display: block;
				position: absolute;
				content: '';
				top: 0;
				left: 0;
				z-index: 1;
				width: 100%;
				height: 100%;
				background: ${getColor('common', 'white')};
				opacity: 0.7;
			}
		`}
`;

const Plus = styled(QuantityButtonBase)``;

const Minus = styled(QuantityButtonBase)`
	background: ${getColor('grey', '300')};
	color: ${getColor('grey', '600')};

	&:disabled {
		color: ${getColor('grey', '400')};
	}

	&:hover {
		background-color: ${getColor('grey', '400')};
	}
`;

const Input = styled(InputComponent)`
	flex: 1;

	&.native-input {
		width: 100%;
		height: 38px;
		border: none;
		color: ${getColor('common', 'black')};
		font-size: 11px;
		line-height: 13px;
		text-align: center;
		box-sizing: border-box;
		font-weight: ${familySize.semiBold};
	}
`;
export default { Selector, Plus, Minus, Input };
