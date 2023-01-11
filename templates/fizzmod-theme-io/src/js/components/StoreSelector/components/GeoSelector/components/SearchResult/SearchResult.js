import React from 'react';
import { string } from 'prop-types';
import { splitText } from 'utils';
import styles from './styles';

const SearchResult = ({ text }) => {
	if (!text) return null;
	return (
		<styles.Wrapper>
			<styles.Icon svgName="icons/markerFill" size={18} />
			<styles.Text variant="caption" component="body1">
				{splitText(text, 48)}
			</styles.Text>
		</styles.Wrapper>
	);
};

SearchResult.propTypes = {
	text: string
};

SearchResult.defaultProps = {
	text: ''
};

export default SearchResult;
