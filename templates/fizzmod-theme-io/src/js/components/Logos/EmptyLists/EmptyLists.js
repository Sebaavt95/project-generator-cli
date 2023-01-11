import React from 'react';
import EmptyListsSVG from './styles';

const EmptyLists = props => (
	<EmptyListsSVG width="160" height="160" viewBox="0 0 160 160" {...props}>
		<defs>
			<path id="empty-lists-c" d="M.947 3.213L0 4.178 3.89 8 10 .88 8.974 0 3.806 6.022z" />
			<path id="empty-lists-e" d="M.947 3.213L0 4.178 3.89 8 10 .88 8.974 0 3.806 6.022z" />
			<path id="empty-lists-g" d="M.947 3.213L0 4.178 3.89 8 10 .88 8.974 0 3.806 6.022z" />
			<circle id="empty-lists-a" cx="78" cy="78" r="78" />
		</defs>
		<g transform="translate(.35 .35)" fill="none" fillRule="evenodd">
			<circle fill="#9B9B9B" cx="112.298" cy="55.298" r="1.648" />
			<circle
				cx="3.845"
				cy="3.845"
				r="3.845"
				transform="translate(127.65 52.65)"
				stroke="#979797"
				strokeWidth="1.65"
			/>
			<g stroke="#979797" strokeLinecap="square" strokeWidth="1.65">
				<path d="M116.199 38.199v6.592M119.495 41.495h-6.592" />
			</g>
			<g stroke="#979797" strokeLinecap="square" strokeWidth="1.65">
				<path d="M27.199 84.199v6.592M30.495 87.495h-6.592" />
			</g>
			<circle stroke="#979797" strokeWidth="1.65" cx="30.396" cy="64.396" r="2.746" />
			<g transform="translate(1.65 1.65)">
				<mask id="empty-lists-b" fill="#fff">
					<use xlinkHref="#empty-lists-a" />
				</mask>
				<rect
					fill="#EEE"
					mask="url(#empty-lists-b)"
					x="40"
					y="60"
					width="77.867"
					height="104"
					rx="4"
				/>
			</g>
			<path fill="#BDBDBD" d="M56.65 56.65h47v12h-47z" />
			<g transform="translate(51.65 121.65)">
				<mask id="empty-lists-d" fill="#fff">
					<use xlinkHref="#empty-lists-c" />
				</mask>
				<use fill="#01C796" fillRule="nonzero" xlinkHref="#empty-lists-c" />
				<g mask="url(#empty-lists-d)" fill="#9E9E9E">
					<path d="M-1-2h12v12H-1z" />
				</g>
			</g>
			<path
				stroke="#9E9E9E"
				strokeWidth="1.5"
				strokeLinecap="square"
				d="M66.65 123.65h41M66.65 127.65h20"
			/>
			<g transform="translate(51.65 101.65)">
				<mask id="empty-lists-f" fill="#fff">
					<use xlinkHref="#empty-lists-e" />
				</mask>
				<use fill="#01C796" fillRule="nonzero" xlinkHref="#empty-lists-e" />
				<g mask="url(#empty-lists-f)" fill="#9E9E9E">
					<path d="M-1-2h12v12H-1z" />
				</g>
			</g>
			<path
				stroke="#9E9E9E"
				strokeWidth="1.5"
				strokeLinecap="square"
				d="M66.65 103.65h41M66.65 107.65h20"
			/>
			<g>
				<g transform="translate(51.65 81.65)">
					<mask id="empty-lists-h" fill="#fff">
						<use xlinkHref="#empty-lists-g" />
					</mask>
					<use fill="#01C796" fillRule="nonzero" xlinkHref="#empty-lists-g" />
					<g mask="url(#empty-lists-h)" fill="#9E9E9E">
						<path d="M-1-2h12v12H-1z" />
					</g>
				</g>
				<path
					stroke="#9E9E9E"
					strokeWidth="1.5"
					strokeLinecap="square"
					d="M66.65 83.65h41M66.65 87.65h20"
				/>
			</g>
			<path fill="#9E9E9E" d="M56.65 56.65h47v4h-47z" />
			<path
				d="M79.65 0c43.99 0 79.65 35.66 79.65 79.65 0 43.99-35.66 79.65-79.65 79.65C35.66 159.3 0 123.64 0 79.65 0 35.66 35.66 0 79.65 0zm0 3.3C37.483 3.3 3.3 37.483 3.3 79.65 3.3 121.817 37.483 156 79.65 156c42.167 0 76.35-34.183 76.35-76.35C156 37.483 121.817 3.3 79.65 3.3z"
				fill="#E5E5E5"
				fillRule="nonzero"
			/>
		</g>
	</EmptyListsSVG>
);

export default EmptyLists;
