import styled from 'styled-components';
import { getTransition } from 'utils/theme';

const Button = styled.a.attrs({
	classes: { disabled: 'custom-disabled', root: 'custom-root', label: 'button-label' }
})`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	text-transform: uppercase;
	text-align: center;
	padding: 6px 16px;
	font-size: 14px;
	min-width: 64px;
	box-sizing: border-box;
	line-height: 1;
	font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
	font-weight: 700;
	border-radius: 0;
	letter-spacing: 3px;
	font-weight: 700;
	${getTransition()}
	&:hover {
		text-decoration: none;
	}
`;

export default { Button };
