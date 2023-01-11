import styled from 'styled-components';
import { getColor } from 'utils/theme';
import mixins from 'theme/mixins';
import { mediaBreaks } from 'theme/devices';
import Typography from 'components/Typography';
import Link from 'components/Link';

export default {
	Wrapper: styled.div`
		display: flex;
		align-items: center;
	`,
	WrapperText: styled.div`
		display: flex;
		flex-flow: column nowrap;
		width: calc(100% - 95px);
		${mediaBreaks.tabletLg`
			width: 100%;
			max-width: 105px;
		`}
	`,
	Brand: styled(Typography)`
		color: ${getColor('grey', '500')};
		text-transform: uppercase;
		margin-bottom: 6px;
	`,
	Name: styled(Typography)`
		color: ${getColor('common', 'black')};
		${mixins.textEllipsis(2)};
	`,
	ImageWrapper: styled(Link)`
		display: block;
		width: 94px;
		height: auto;
	`,
	Image: styled.img`
		display: block;
		margin: 0 15px;
		max-width: 65px;
		width: 100%;
		height: auto;
		vertical-align: top;
	`
};
