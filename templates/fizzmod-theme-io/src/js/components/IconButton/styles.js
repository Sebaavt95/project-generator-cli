import styled, { css } from 'styled-components';
import { getTransition, getColor } from 'utils/theme';

const IconButton = styled.button.attrs(({ variant }) => ({
	centerRipple: false,
	disableRipple: variant === 'pure-icon'
}))`
	${({ variant }) => {
		switch (variant) {
			case 'square':
				return css`
					background: ${getColor('primary', 'dark')};
					color: ${getColor('common', 'white')};
					border-radius: 0;
					border: 0;
					&:hover {
						background: ${getColor('common', 'black')};
					}
				`;
			case 'pure-icon':
				return css`
					padding: 0;
					color: ${getColor('grey', '500')};
					${getTransition()}
					border: 0;
					&:hover {
						color: ${getColor('grey', '600')};
						background: none;
					}

					&:active {
						color: ${getColor('grey', '700')};
					}
				`;
			default:
				return '';
		}
	}}
`;

export default {
	IconButton
};
