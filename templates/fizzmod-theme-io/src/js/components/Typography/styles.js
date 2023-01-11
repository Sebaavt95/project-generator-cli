import styled, { css } from 'styled-components';
import { typography } from 'theme';

const setVariant = variant =>
	!variant || !typography[variant] ? typography.body1 : typography[variant];

const Typography = styled.div`
	${({ variant }) => setVariant(variant)};

	${({ capitalize }) =>
		capitalize &&
		css`
			text-transform: lowercase;

			&:first-letter {
				text-transform: capitalize;
			}
		`}
`;

export default { Typography };
