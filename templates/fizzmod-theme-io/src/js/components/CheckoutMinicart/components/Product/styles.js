import styled from 'styled-components';
import { getColor } from 'utils/theme';
import mixins from 'theme/mixins';
import Link from 'components/Link';
import Svg from 'components/Svg';
import Typography from 'components/Typography';
import ListPriceComponent from 'components/ListPrice';
import BestPriceComponent from 'components/BestPrice';

const Product = styled.li`
	border-top: none;
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	padding: 16px 0 16px 0;

	&:not(:last-child) {
		border-bottom: 1px solid ${getColor('grey', '100')};
	}
`;

const ImageWrapper = styled(Link)`
	align-self: center;
	display: flex;
	margin-right: 16px;
`;

const Image = styled.img`
	align-self: center;
	display: flex;
	height: 60px;
	width: 60px;
`;

const InfoWrapper = styled.div`
	max-width: 217px;
	flex-basis: 100%;
`;

const Name = styled(Typography)`
	color: ${getColor('common', 'black')};
	text-transform: uppercase;
	margin-bottom: 5px;
	text-overflow: ellipsis;
	${mixins.textEllipsis(1)};
	white-space: nowrap;
	display: block;
`;

const Quantity = styled(Typography)`
	color: ${getColor('grey', '600')};
`;

const Prices = styled.div``;

const ListPrice = styled(ListPriceComponent)`
	color: ${getColor('grey', '600')};
	margin-right: 12px;
`;

const BestPrice = styled(BestPriceComponent)`
	color: ${getColor('secondary', 'light')};
`;

const UnavailableWrapper = styled.div`
	align-items: center;
	background: rgba(255, 0, 0, 0.1);
	box-sizing: border-box;
	display: flex;
	height: 32px;
	margin-top: 18px;
	padding: 10px;
	position: relative;
	width: 100%;
`;

const UnavailableText = styled(Typography)`
	align-items: center;
	color: ${getColor('error', 'main')};
	display: flex;
`;

const Arrow = styled.span`
	border: 10px solid transparent;
	bottom: auto;
	position: absolute;
	border-bottom-color: rgba(255, 0, 0, 0.1);
	top: -20px;
	left: 25px;
	margin-left: -5px;
`;

const Icon = styled(Svg)`
	color: ${getColor('error', 'main')};
	margin-right: 6px;
`;

export default {
	Product,
	ImageWrapper,
	InfoWrapper,
	UnavailableWrapper,
	Prices,
	Image,
	Name,
	Quantity,
	ListPrice,
	BestPrice,
	UnavailableText,
	Arrow,
	Icon
};
