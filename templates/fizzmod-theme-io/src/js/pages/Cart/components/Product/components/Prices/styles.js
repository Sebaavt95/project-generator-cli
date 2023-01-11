import styled from 'styled-components';
import PPUMPriceComponent from 'components/PPUMPrice';
import ListPriceComponent from 'components/ListPrice';
import BestPriceComponent from 'components/BestPrice';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
`;

const ListPrice = styled(ListPriceComponent)``;

const BestPrice = styled(BestPriceComponent)``;

const PPUMPrice = styled(PPUMPriceComponent)``;

export default {
	Wrapper,
	ListPrice,
	BestPrice,
	PPUMPrice
};
