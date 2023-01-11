import styled from 'styled-components';
import { mediaBreaks } from 'theme/devices';

const Popup = styled.div`
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: none;
	background: #fff;
	&[open] {
		position: fixed;
		display: block;
		z-index: 9999;
		box-shadow: 0 14px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.25);
		padding: 25px;

		${mediaBreaks.tablet`
			padding: 0;
		`}
	}
`;

export default { Popup };
