import { css } from 'styled-components';
import { mediaBreaks } from 'theme/devices';

const Typography = {
	fontFamily: ['"Roboto"', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
	useNextVariants: true,
	fontWeightLight: 300,
	fontWeightRegular: 700,
	fontWeightMedium: 500,
	fontWeightBold: 700,
	fontWeightBlack: 900,
	h1: css`
		font-size: 43px;
		font-weight: 700;
		line-height: 50px;
		letter-spacing: 0;
		font-style: normal;
		${mediaBreaks.tablet`
			font-size: 34px;
			line-height: 40px;
		`}
	`,
	h2: css`
		font-size: 35px;
		font-weight: 500;
		line-height: 41px;
		letter-spacing: 3px;
		font-style: normal;
		${mediaBreaks.tablet`
			font-size: 20px;
			line-height: 24px;
			letter-spacing: 1.71px;
		`}
	`,
	h3: css`
		font-size: 32px;
		font-weight: 700;
		line-height: 38px;
		letter-spacing: 0;
		font-style: normal;
		${mediaBreaks.tablet``}
	`,
	h4: css`
		font-size: 32px;
		font-weight: 400;
		line-height: 38px;
		letter-spacing: 2px;
		font-style: normal;
		${mediaBreaks.tablet`
			font-size: 16px;
			line-height: 19px;
			letter-spacing: 1px;
		`}
	`,
	h5: css`
		font-size: 28px;
		font-weight: 700;
		line-height: 33px;
		letter-spacing: 0;
		font-style: normal;
		${mediaBreaks.tablet`
			font-size: 20px;
			line-height: 24px;
		`}
	`,
	h6: css`
		font-size: 20px;
		font-weight: 700;
		line-height: 24px;
		letter-spacing: 0;
		font-style: normal;
		${mediaBreaks.tablet`
			font-size: 18px;
			line-height: 21px;
		`}
	`,
	subtitle1: css`
		font-size: 18px;
		font-weight: 400;
		line-height: 21px;
		letter-spacing: 1px;
		font-style: normal;
		${mediaBreaks.tablet``}
	`,
	subtitle2: css`
		font-size: 14px;
		font-weight: 500;
		line-height: 16px;
		letter-spacing: 0;
		font-style: normal;
		${mediaBreaks.tablet``}
	`,
	body1: css`
		font-size: 16px;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: 0;
		font-style: normal;
		${mediaBreaks.tablet``}
	`,
	body2: css`
		font-size: 14px;
		font-weight: 400;
		line-height: 16px;
		letter-spacing: 0;
		font-style: normal;
		${mediaBreaks.tablet`
			font-size: 13px;
			line-height: 15px;
		`}
	`,
	caption: css`
		font-size: 12px;
		font-weight: 500;
		line-height: 16px;
		letter-spacing: 1px;
		font-style: normal;
		${mediaBreaks.tablet``}
	`,
	overline: css`
		font-size: 10px;
		font-weight: 500;
		line-height: 16px;
		letter-spacing: 0;
		font-style: normal;
		${mediaBreaks.tablet`
			font-size: 11px;
		`}
	`
};

export default Typography;
