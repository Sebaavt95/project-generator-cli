import styled, { css } from 'styled-components';
import Svg from 'components/Svg';
import { getColor } from 'utils/theme';
import Select from 'react-select';
import familySize from 'theme/familySize';
import { mediaBreaks } from 'theme/devices';
import mixins from 'theme/mixins';

export default {
	IconContainer: styled.div`
		padding: 0 12px;
		display: flex;
		align-items: center;
	`,
	Icon = styled(Svg)`
	margin-right: 10px;
	color: ${({ open }) => (open ? getColor('primary', 'main') : getColor('grey', '800'))};
	`,
	Select: styled(Select).attrs({
		className: 'react-select-container',
		classNamePrefix: 'react-select'
	})`
		.react-select {
			&__value-container {
				padding: 2px 8px 2px 11px;
			}

			&__single-value {
				color: ${getColor('common', 'black')};
				font-weight: ${familySize.medium};
				font-size: 10px;
				line-height: 18px;
				text-transform: lowercase;
				letter-spacing: 0;

				${({ placeholderStyles }) =>
					placeholderStyles &&
					css`
						color: ${getColor('grey', '600')};
					`};

				&:first-letter {
					text-transform: uppercase;
				}
			}

			&__input > input {
				color: ${getColor('grey', '800')};
				font-weight: ${familySize.regular};
				font-size: 14px;
				line-height: 18px;
				text-transform: lowercase;

				&:first-letter {
					text-transform: uppercase;
				}
			}

			&__control,
			&__control:hover {
				cursor: pointer;
				border: 1px solid ${getColor('grey', '300')};
				border-radius: 0px;
				box-shadow: none;

				${mediaBreaks.mobile`
					min-height: 45px;
				`}
			}

			&__control {
				&--menu-is-open,
				&--menu-is-open:hover {
					border-radius: 0px;
					border-color: ${getColor('grey', '500')};};
					border-bottom: 1px solid transparent;
				}
			}

			&__menu {
				margin: 0;
				z-index: 2;
				box-shadow: none;
				border-radius: 0;
				border: 1px solid ${getColor('grey', '500')};
				border-top: none;
				top: calc(100% - 1px);
			}

			&__menu-list {
				padding: 0 0 10px;

				${mixins.customScroll}
			}

			&__option {
				cursor: pointer;
				color: ${getColor('common', 'black')};
				font-size: 10px;
				font-weight: ${familySize.medium};
				letter-spacing: 0;
				text-transform: lowercase;
				height: auto;
				padding: 8px 12px;
				line-height: 14px;

				${mediaBreaks.mobile`
					padding: 8px 12px;
				`}

				&:first-letter {
					text-transform: uppercase;
				}

				&--is-focused {
					color: ${getColor('common', 'black')};
					background: ${getColor('common', 'white')};

					${mixins.hoverOnly`
						color: ${getColor('primary', 'main')};
					`}
				}
				&--is-selected {
					color: ${getColor('common', 'black')};
					background: ${getColor('common', 'white')};
				}
				&:active {
					color: ${getColor('common', 'black')};
					background: ${getColor('common', 'white')};
				}
			}

			&__placeholder {
				color: ${getColor('grey', '600')};
				font-size: 14px;
				line-height: 18px;
			}

			&__indicator-separator {
				display: none;
			}
		}
	`
};
