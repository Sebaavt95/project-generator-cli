import React from 'react';
import { string } from 'prop-types';
import styles from './styles';
import messages from './messages.json';

const OptionMessage = ({ checkedOption }) => (
	<styles.MessageWrapper>
		<styles.Text variant="overline" component="body1">
			{messages[checkedOption]}
		</styles.Text>
	</styles.MessageWrapper>
);

OptionMessage.propTypes = {
	checkedOption: string
};

OptionMessage.defaultProps = {
	checkedOption: ''
};

export default OptionMessage;
