import styled from 'styled-components';
import { getColor, getFontWeight } from 'utils/theme';
import mixins from 'theme/mixins';
import IconButton from 'components/IconButton';
import ListPriceComponent from 'components/ListPrice';
import BestPriceComponent from 'components/BestPrice';
import PPUMPriceComponent from 'components/PPUMPrice';
import QuantitySelectorComponent from 'components/QuantitySelector';
import Typography from 'components/Typography';
import ProductSubstitutesComponent from '../ProductSubstitutes';

const Product = styled.div`
	width: 100%;
	height: auto;
	border-bottom: 2px solid ${getColor('grey', '200')};
	padding: 15px;
	text-transform: uppercase;
`;

const Head = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
`;

const WrapperTitle = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const Title = styled(Typography)`
	color: ${getColor('common', 'black')};
	${getFontWeight('regular')};
	width: 257px;
	text-overflow: ellipsis;
	${mixins.textEllipsis(1)};
`;

const Brand = styled(Typography)`
	color: ${getColor('grey', '500')};
	text-transform: uppercase;
	margin-bottom: 4px;
`;

const DeleteIcon = styled(IconButton)`
	color: ${getColor('grey', '500')};
	background-color: ${getColor('common', 'white')};
	&:hover {
		color: ${getColor('grey', '600')};
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ImageWrapper = styled.div`
	width: 70px;
	height: auto;
`;

const Image = styled.img`
	width: 100%;
	height: auto;
	vertical-align: top;
`;

const Totals = styled.div``;

const PriceWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const ListPrice = styled(ListPriceComponent)`
	font-size: 15px;
	margin-right: 12px;
`;

const BestPrice = styled(BestPriceComponent)``;

const PPUMPrice = styled(PPUMPriceComponent)`
	line-height: 12px;
	margin-left: 8px;
`;

const ActionsWrapper = styled.div`
	padding-top: 25px;
`;

const ProductSubstitutes = styled(ProductSubstitutesComponent)`
	position: relative;
	z-index: 90;
`;

const SubstituteTitle = styled(Typography)`
	color: ${getColor('common', 'black')};
	padding: 7px 15px;
	background: ${getColor('grey', '100')};
	text-transform: initial;
	margin-bottom: 4px;
`;

const QuantitySelector = styled(QuantitySelectorComponent)`
	width: 150px;
	margin-bottom: 11px;
`;

export default {
	Product,
	Head,
	WrapperTitle,
	Title,
	Brand,
	DeleteIcon,
	Content,
	ImageWrapper,
	Image,
	Totals,
	PriceWrapper,
	ListPrice,
	BestPrice,
	PPUMPrice,
	ActionsWrapper,
	ProductSubstitutes,
	SubstituteTitle,
	QuantitySelector
};
