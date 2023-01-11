import styled from 'styled-components';
import { mediaBreaks } from 'theme/devices';
import { getColor } from 'utils/theme';
import Typography from 'components/Typography';

const OrderSubstitutes = styled.div`
	padding: 20px;
`;

const Container = styled.div`
	box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.07);

	${mediaBreaks.tablet`
		box-shadow: none;
	`}
`;

const HeadWrapper = styled.div`
	width: 100%;
	background: ${getColor('grey', '100')};
	padding: 20px 20px 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-content: center;

	${mediaBreaks.tablet`
			padding: 0px 0 12px;
			background: ${getColor('common', 'white')};
		`}
`;

const BodyWrapper = styled.div`
	width: 100%;
	background: ${getColor('common', 'white')};
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-content: center;

	${mediaBreaks.tablet`
			padding: 0px 0 12px;
		`}
`;

const Title = styled(Typography)`
	color: ${getColor('common', 'black')};
	text-align: center;
	margin-bottom: 10px;
	position: relative;

	${mediaBreaks.tablet`
			margin-bottom: 15px;
			max-width: 186px;
		`}
`;

const Description = styled(Typography)`
	width: calc(100% - 150px);
	color: ${getColor('grey', '600')};
	text-align: center;
	margin-bottom: 25px;

	${mediaBreaks.tablet`
		width: 100%;
		max-width: 600px;
		margin-bottom: 15px;
	`}
`;

export default {
	OrderSubstitutes,
	Container,
	HeadWrapper,
	BodyWrapper,
	Title,
	Description
};
