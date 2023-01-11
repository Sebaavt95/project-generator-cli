import styled from 'styled-components';
import { getColor } from 'utils/theme';
import { mediaBreaks } from 'theme/devices';
import Svg from 'components/Svg';
import StoreSelectorComp from 'components/StoreSelector';
import Typography from 'components/Typography';
import stylesStoreSelector from '../../../../components/StoreSelector/styles';

const Wrapper = styled.div`
	position: fixed;
	display: flex;
	flex-flow: column nowrap;
	width: 360px;
	right: 0;
	box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
	height: calc(100vh - 124px);
	background-color: ${getColor('common', 'white')};
	z-index: 11;
	${mediaBreaks.tablet`
		position: relative;
			height: auto;
			width: 100%;
		`}
`;

const StoreSelector = styled(StoreSelectorComp)`
	max-width: initial;
	background-color: ${getColor('grey', '100')};
	margin: initial;
	height: 49px;
	${stylesStoreSelector.Button} {
		position: relative;
		margin-top: 10px;
		padding: 10px;
		font-size: 0;
		height: initial;
		border-left: none;
	}
	${stylesStoreSelector.Icon} {
		color: ${getColor('grey', '900')};
	}
	${stylesStoreSelector.Text} {
		color: ${getColor('grey', '900')};
		margin: 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		letter-spacing: normal;
		font-size: 14px;
		max-width: calc(100% - 80px);
		margin: 0 10px;
		${mediaBreaks.tablet`
				font-size: 11px;
			`}
	}
	${stylesStoreSelector.Wrapper} {
		display: flex;
		text-align: left;
		align-items: center;
		${mediaBreaks.tabletLg`
				flex-flow: row nowrap;
				align-items: center;
				width: 100%;
			`}
	}
`;

const WrapperIcon = styled.div`
	display: none;
	justify-content: center;
	align-items: center;
	padding-top: 15px;
`;

const Icon = styled(Svg)`
	color: ${getColor('secondary', 'light')};
`;

const TextLock = styled(Typography)`
	color: ${getColor('secondary', 'light')};
`;

export default { Wrapper, StoreSelector, WrapperIcon, Icon, TextLock };
