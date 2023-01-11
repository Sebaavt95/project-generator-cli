import styled from 'styled-components';

const ContainerMap = styled.div`
	height: 100%;
	& .gm-style {
		&-mtc,
		.gm-fullscreen-control,
		.gm-svpc {
			display: none;
		}
	}
`;

const LoadingElement = styled.div`
	height: 100%;
`;

export default {
	ContainerMap,
	LoadingElement
};
