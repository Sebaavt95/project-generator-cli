import React from 'react';
import { bool, func } from 'prop-types';
import Typography from 'components/Typography';
import styles from './styles';

const TermsAndConditions = ({ isChecked, handleCheck }) => {
	const handleClick = evt => {
		evt.stopPropagation();
	};

	return (
		<styles.Wrapper>
			<styles.TermsAndCond>
				<styles.Checkbox checked={isChecked} onClick={handleCheck} readOnly />
				<styles.Text variant="body2" as={Typography} onClick={handleCheck}>
					He leído y acepto los{' '}
					<styles.Link
						onClick={handleClick}
						href="/institucional/terminos-y-condiciones"
						target="_blank"
					>
						terminos y condiciones
					</styles.Link>{' '}
					del sitio.
				</styles.Text>
			</styles.TermsAndCond>
			{!isChecked && (
				<styles.Error variant="body2">Es obligatorio aceptar para continuar.</styles.Error>
			)}
		</styles.Wrapper>
	);
};

TermsAndConditions.propTypes = {
	isChecked: bool.isRequired,
	handleCheck: func.isRequired
};

export default TermsAndConditions;
