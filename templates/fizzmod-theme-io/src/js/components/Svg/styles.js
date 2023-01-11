import styled from 'styled-components';

const baseWrapper = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: ${({ size }) => `${size}px`};
	height: auto;
`;

const Icon = styled(baseWrapper)`
	color: ${({ color }) => color};
	& svg,
	& svg path,
	& svg polygon,
	& svg rect {
		fill: currentColor;
	}

	& svg {
		width: 100%;
		height: auto;
	}
`;
const Illustration = styled(baseWrapper)`
	& svg {
		width: 100%;
		height: auto;
	}
`;

Icon.displayName = 'Icon';
Illustration.displayName = 'Illustration';
export { Icon, Illustration };
