import React from 'react';
import { useDispatch } from 'react-redux';
import { string, array, object } from 'prop-types';
import { changeOrderSubstitute } from 'redux/substitutes';
import styles from './styles';

const OptionsDesktop = ({ substitutesFunctions, substitutesOptions, checkedValue }) => {
	const dispatch = useDispatch();

	const handleClickOrderSubstitute = value =>
		substitutesFunctions && dispatch(changeOrderSubstitute(substitutesFunctions, value));

	return (
		<styles.OptionsWrapper>
			{substitutesOptions &&
				!!substitutesOptions.length &&
				substitutesOptions.map(({ value, label }, idx) => {
					const labelId = `${value}-substitute`;

					return (
						<React.Fragment key={idx.toString()}>
							<styles.Option key={idx.toString()} selected={value === checkedValue}>
								<styles.Radio
									name="substitute"
									onClick={() => handleClickOrderSubstitute(value)}
									checked={value === checkedValue}
									id={labelId}
									className="radio-input"
									readOnly
								/>
								<styles.RadioFill selected={value === checkedValue} />
							</styles.Option>
							<styles.Label htmlFor={labelId}>
								<styles.LabelText
									selected={value === checkedValue}
									variant="body2"
									component="overline"
								>
									{label}
								</styles.LabelText>
							</styles.Label>
						</React.Fragment>
					);
				})}
		</styles.OptionsWrapper>
	);
};

OptionsDesktop.propTypes = {
	substitutesFunctions: object,
	substitutesOptions: array,
	checkedValue: string
};

OptionsDesktop.defaultProps = {
	substitutesFunctions: {},
	substitutesOptions: [],
	checkedValue: ''
};

export default OptionsDesktop;
