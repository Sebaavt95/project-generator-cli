import React from 'react';
import { bool, func } from 'prop-types';
import CircularLoaderSuccess from 'components/CircularLoaderSuccess';
import styles from './styles';

const Success = ({ open, handleClose }) => {
	return (
		<styles.SuccessPopup onClose={handleClose} open={open}>
			<styles.Success>
				<styles.Wrapper>
					<styles.LoaderWrapper>
						<CircularLoaderSuccess />
					</styles.LoaderWrapper>
					<styles.SuccessText variant="h6" component="body1">
						¡Listo! Ya se guardaron tus preferencias
					</styles.SuccessText>
					<styles.SuccessMessage variant="body2">
						En caso que quieras cambiar la tienda, podes hacerlo en la barra superior de la página.
					</styles.SuccessMessage>
				</styles.Wrapper>
			</styles.Success>
		</styles.SuccessPopup>
	);
};

Success.propTypes = {
	open: bool,
	handleClose: func
};

Success.defaultProps = {
	open: false,
	handleClose: () => {}
};

export default Success;
