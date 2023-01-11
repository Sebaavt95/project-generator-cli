import React from 'react';
import { string, bool, number, oneOfType } from 'prop-types';
import styles from './styles';

const Step = ({ title, step, currentStep, validated }) => (
	<styles.Step>
		<styles.Title
			variant="subtitle2"
			component="caption"
			current={currentStep === step}
			active={validated || currentStep === step}
		>
			{title}
		</styles.Title>
	</styles.Step>
);

Step.propTypes = {
	title: string,
	step: string.isRequired,
	validated: oneOfType([bool, number]),
	currentStep: oneOfType([string, number])
};

Step.defaultProps = {
	title: '',
	validated: null,
	currentStep: null
};

export default Step;
