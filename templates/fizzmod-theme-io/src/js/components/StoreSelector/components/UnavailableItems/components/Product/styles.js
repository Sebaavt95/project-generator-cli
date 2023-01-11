import styled from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';
import ListPriceComponent from 'components/ListPrice';
import BestPriceComponent from 'components/BestPrice';
import Typography from 'components/Typography';

const Wrapper = styled.div`
	padding: 14px 0;
	display: flex;
	border-bottom: 2px solid ${getColor('grey', '200')};
	margin-right: 26px;
	${mediaBreaks.tablet`
		padding: 15px 0;
	`}
`;

const Image = styled.img`
	width: 75px;
	height: 75px;
`;

const Description = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-left: 15px;
`;

const Info = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const Brand = styled(Typography)`
	color: ${getColor('grey', '500')};
`;

const Name = styled(Typography)`
	width: 100%;
	max-width: 195px;
	margin-top: 15px;
	color: ${getColor('common', 'black')};
	${mediaBreaks.tablet`
		margin-top: 4px;
		margin-bottom: 8px;
	`}
`;

const Prices = styled.div`
	margin-left: auto;
	margin-right: 50px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	${mediaBreaks.tablet`
		margin: 5px 0 0;
		align-items: center;
		justify-content: flex-start;
		flex-flow: row nowrap;
	`}
`;

const ListPrice = styled(ListPriceComponent)`
	margin-bottom: 5px;
	${mediaBreaks.tablet`
		margin-right: 16px;
		margin-bottom: 0;
	`}
`;
const Price = styled(BestPriceComponent)``;

export default {
	Wrapper,
	Image,
	Description,
	Brand,
	Name,
	Prices,
	ListPrice,
	Price,
	Info
};
