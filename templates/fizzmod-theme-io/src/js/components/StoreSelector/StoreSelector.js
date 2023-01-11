import React from 'react';
import { func, string } from 'prop-types';
import { splitText } from 'utils';
import { STORE_KEY } from 'redux/header/reducer';
import useDevices from 'hooks/useDevices';
import useSticky from 'hooks/useSticky';
import styles from './styles';

const TEXT_TITLE = 'Estás comprando en:';
const TEXT_TITLE_MOBILE = 'Estás en:';

const StoreSelector = ({ handleOpen, storeName, ...props }) => {
	const { tabletLg } = useDevices();
	const { sticky } = useSticky();
	return (
		<styles.StoreSelector {...props} sticky={sticky}>
			<styles.Container>
				<styles.Button type="button" onClick={handleOpen(STORE_KEY, true)}>
					<styles.Wrapper>
						<styles.Icon svgName="icons/icn_marker" size={tabletLg || sticky ? 16 : 18} />
						<styles.Text variant="caption" sticky={sticky}>
							{!tabletLg ? TEXT_TITLE : TEXT_TITLE_MOBILE} {splitText(storeName, 35)}
						</styles.Text>
						<styles.Icon svgName="icons/icn_edit" size={tabletLg || sticky ? 16 : 18} />
					</styles.Wrapper>
				</styles.Button>
			</styles.Container>
		</styles.StoreSelector>
	);
};

StoreSelector.propTypes = {
	handleOpen: func,
	storeName: string
};
StoreSelector.defaultProps = {
	handleOpen: () => {},
	storeName: ''
};

export default StoreSelector;
