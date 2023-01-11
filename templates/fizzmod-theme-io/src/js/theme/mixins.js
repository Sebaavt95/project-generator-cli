import { css } from 'styled-components';
import { devices } from './devices';

const mixins = {
	staticStyles: (...args) => css`
		&,
		&:hover,
		&:active,
		&:focus {
			${css(...args)}
		}
	`,
	flexCenter: css`
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	centerPositioned: css`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	`,
	removeButtonStyle: css`
		appearance: none;
		padding: 0;
		border: 0;
		outline: 0;
		background-color: transparent;
	`,
	fontIconParse: css`
		font-family: 'txm-icons';
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	`,
	removeAutocomplete: css`
		&:-webkit-autofill {
			-webkit-box-shadow: 0 0 0 30px white inset;
		}
	`,
	removeInputOutline: css`
		&:active,
		&:focus {
			outline: none;
		}
	`,
	parseFontRender: css`
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	`,
	textEllipsis: line => css`
		display: inline-block; // for non Webkit browsers
		display: -webkit-box; // needed for the effect to cut off
		-webkit-line-clamp: ${line}; // line to cut off
		-webkit-box-orient: vertical;
		overflow: hidden;
	`,
	customScroll: css`
		&::-webkit-scrollbar {
			width: 6px;
		}
		&::-webkit-scrollbar-track {
			background: #efefef;
		}
		&::-webkit-scrollbar-thumb {
			background-color: rgba(0, 0, 0, 0.2);
			border-radius: 3px;
		}
	`,
	hover: (...args) => css`
		${devices.onlyDesktop} {
			&:hover {
				${css(...args)}
			}
		}

		${devices.tablet} {
			&:active {
				${css(...args)}
			}
		}
	`,
	hoverOnly: (...args) => css`
		${devices.onlyDesktop} {
			&:hover {
				${css(...args)}
			}
		}
	`
};

export default mixins;
