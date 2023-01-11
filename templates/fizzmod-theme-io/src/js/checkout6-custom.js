import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/create';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import Cart from 'pages/Cart';
import Header from 'components/CheckoutHeader';
import Footer from 'components/CheckoutFooter';
import '@babel/polyfill';
import GlobalLayout from 'Layouts/GlobalLayout';
import './complements/listeners';

const styleNode = document.createComment('insertion-point-jss');

document.head.insertBefore(styleNode, document.head.firstChild);

const jss = create({
	insertionPoint: 'insertion-point-jss'
});

const init = () => {
	const headerRoot = document.getElementById('header-root');
	const footerRoot = document.getElementById('footer-root');
	const FooterPortal = ({ children }) => ReactDOM.createPortal(children, footerRoot);

	ReactDOM.render(
		<JssProvider jss={jss}>
			<Provider store={store}>
				<BrowserRouter>
					<GlobalLayout>
						<Header />
						<Cart />
						<FooterPortal>
							<Footer />
						</FooterPortal>
					</GlobalLayout>
				</BrowserRouter>
			</Provider>
		</JssProvider>,
		headerRoot
	);
};

window.addEventListener('load', init);
