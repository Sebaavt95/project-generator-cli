import styled from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';
import mixins from 'theme/mixins';
import shadows from 'theme/shadows';
import Svg from 'components/Svg';
import Typography from 'components/Typography';
import Button from 'components/Button';

const Minicart = styled.div`
	height: 100vh;
	position: fixed;
	right: 0;
	top: 0;
	width: 360px;
	z-index: 10000;

	${mediaBreaks.tablet`
		height: auto;
		margin-left: 0;
		position: relative;
		padding-bottom: 25px;
		width: 100%;
	`}
`;

const Container = styled.div`
	${shadows.modals};
	background: ${getColor('common', 'white')};
	display: flex;
	flex-direction: column;
	height: calc(100% - 60px) !important;
	min-height: 310px;
	position: relative;
	top: 60px;
	width: 100%;

	${mediaBreaks.tablet`
		box-shadow: none;
		top: 0;
	`}
`;

const Header = styled.div`
	${mixins.flexCenter};
	background: ${getColor('grey', '200')};
	border-radius: 0;
	max-height: 90px;
	height: 100%;

	${mediaBreaks.tablet`
			height: 60px;
			width: 100%;
		`}
`;
const Title = styled(Typography)`
	color: ${getColor('grey', '700')};
	text-align: center;
	margin: 0;
`;
const Totalizers = styled.div`
	margin: auto 0 0;
	padding: 0;
	background: ${getColor('common', 'white')};
	border: none;
	border-radius: initial;
	box-shadow: 0 -2px 10px -2px rgba(0, 0, 0, 0.05);
	position: relative;
	display: flex;
	align-items: flex-end;
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	overflow: hidden;
`;

const Products = styled.div`
	padding: 6px 22px 2px 22px;

	${mediaBreaks.tablet`
		min-height: 86px;
		padding: 6px 15px 0;
	`}
`;

const ProductsList = styled.ul`
	overflow-y: auto;
	list-style: none;
	padding: 0;
	margin: 0;
	max-height: none;
	height: 100%;

	&::-webkit-scrollbar-track {
		background-color: ${getColor('common', 'white')};
	}
	&::-webkit-scrollbar {
		width: 5px;
		background-color: ${getColor('common', 'white')};
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${getColor('grey', '100')};
	}
`;

const Text = styled(Typography)`
	display: flex;
	align-items: center;
`;

const Icon = styled(Svg)`
	margin-right: 10px;
`;

const GoToCart = styled(Button)`
	height: 62px;
	width: 100%;
	padding: 0;
	color: ${getColor('grey', '600')};

	&:hover,
	&:focus {
		color: ${getColor('grey', '600')};
		outline: none;
		text-decoration: none;
	}

	& > span {
		height: 62px;
	}

	${mediaBreaks.tablet`
		width: 90%;
		height: 40px;
	    margin: 0 auto;
		color: ${getColor('secondary', 'main')};
		border: 2px solid ${getColor('secondary', 'main')};

		&:hover,
		&:focus {
			color: ${getColor('secondary', 'main')};
		}
	`}
`;

export default {
	Minicart,
	Container,
	Header,
	Title,
	Totalizers,
	Wrapper,
	Products,
	ProductsList,
	GoToCart,
	Text,
	Icon
};
