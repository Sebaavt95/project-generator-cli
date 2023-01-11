import familySize from 'theme/familySize';
import { palette } from 'theme/palette';

export default {
	Button: {
		root: {
			fontSize: 14,
			fontWeight: familySize.bold,
			letterSpacing: 3,
			borderRadius: 0,
			lineHeight: 1
		},
		contained: {
			boxShadow: ['none'],
			color: `${palette.common.white}`,
			'&$disabled': {
				backgroundColor: `${palette.grey['600']}`,
				color: `${palette.common.white}`
			}
		},
		containedPrimary: {
			color: `${palette.common.white}`
		},
		outlined: {
			boxShadow: ['none'],
			padding: '6px 16px'
		},
		outlinedSecondary: {
			border: `2px solid ${palette.secondary.main}`,
			'&:hover': {
				color: `${palette.secondary.dark}`,
				borderWidth: 2,
				border: `2px solid ${palette.secondary.dark}`,
				backgroundColor: 'transparent'
			}
		},
		outlinedPrimary: {
			border: `2px solid ${palette.primary.main}`,
			'&:hover': {
				borderWidth: 2,
				border: `2px solid ${palette.primary.dark}`,
				backgroundColor: 'transparent'
			}
		}
	}
};
