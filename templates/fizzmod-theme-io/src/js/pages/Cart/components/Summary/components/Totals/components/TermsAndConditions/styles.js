import styled from 'styled-components';
import { getColor } from 'utils/theme';
import CheckboxComponent from 'components/Checkbox';
import Typography from 'components/Typography';
import Link from 'components/Link';

export default {
	Wrapper: styled.div`
		display: flex;
		flex-flow: column nowrap;
		height: 63px;
	`,
	Checkbox: styled(CheckboxComponent)`
		padding-top: 6px;
		padding-left: 7px;
		cursor: pointer;

		&[readonly] {
			cursor: pointer;
		}
	`,
	TermsAndCond: styled.div`
		display: flex;
		align-items: center;
		color: ${getColor('primary', 'main')};
		margin-bottom: 6px;
		margin-left: 7px;
	`,
	Text: styled.label`
		font-size: 12px;
		cursor: pointer;
		margin-top: 4px;
		margin-left: 10px;
	`,
	Link: styled(Link)`
		color: ${getColor('secondary', 'main')};
		text-decoration: underline;
		&:hover {
			color: ${getColor('secondary', 'dark')};
		}
	`,
	Error: styled(Typography)`
		flex-basis: 100%;
		font-size: 12px;
		color: ${getColor('error', 'main')};
		padding: 0 0 0 19px;
	`
};
