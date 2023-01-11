import styled, { css } from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';
import Typography from 'components/Typography';

const Title = styled(Typography)`
	color: ${getColor('grey', '700')};
	margin: 0;
`;
const Value = styled(Typography)`
	text-decoration: ${({ underline }) => (underline ? 'underline' : 'inherit')};
	color: ${getColor('primary', 'main')};
	margin: 0;
	line-height: 21px;
`;
const getTotalizerStyles = totalizerId => {
	if (!totalizerId) return css``;
	switch (totalizerId) {
		case 'Total':
			return css`
				background-color: ${getColor('secondary', 'main')};
				margin: 0;
				order: 10;
				padding: 15px 30px;
				text-transform: uppercase;

				${mediaBreaks.tablet`
					background-color: transparent;
					border-top: 2px solid ${getColor('grey', '100')};
					margin: 0 15px;
					padding: 15px 0;
				`}

				${Title}, ${Value} {
					color: ${getColor('common', 'white')};
					${mediaBreaks.tablet`
						color: ${getColor('secondary', 'main')}; 
					`}
				}
		`;
		case 'Shipping':
			return css`
				order: 1;

				${mediaBreaks.tablet`
					order: 2;	
				`}
			`;
		case 'Items':
			return css`
				border-top: 2px solid ${getColor('grey', '200')};
				margin-top: 12px;
				order: 2;
				padding-bottom: 12px;

				${mediaBreaks.tablet`
					border-top: none;
					order: 0;
					padding-bottom: 0;
				`}
			`;
		case 'Discounts':
			return css`
				order: 0;

				${mediaBreaks.tablet`
					order: 1;
					padding-top: 0;
					margin-bottom: 5px;
				`}

				p {
					color: ${getColor('grey', '500')};
				}
			`;
		default:
			return css``;
	}
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 30px;
	padding-top: 12px;

	${mediaBreaks.tablet`
		margin: 0 15px 20px;
	`}

	${({ id }) => id && getTotalizerStyles(id)}
`;

export default {
	Wrapper,
	Title,
	Value
};
