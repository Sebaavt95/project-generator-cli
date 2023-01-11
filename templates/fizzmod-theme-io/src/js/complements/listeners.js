import { subscribe } from 'hooks/useVtexCheckout/api';
import { initializei18n } from './i18n';
import { captureEvents, setViewport, stepEvents, stepInitialize } from './steps';

const {
	activeCheckoutModules: { storeSelector },
	googleApiKey
} = ENV;

window.addEventListener('load', () => {
	initializei18n();
	setViewport();
});

window.addEventListener('resize', setViewport);

window.addEventListener(stepEvents.initialize, stepInitialize);

subscribe('hashchange stateUpdated.vtex orderFormUpdated.vtex', captureEvents);

// Add Google Maps API script to checkout page
window.addEventListener('DOMContentLoaded', () => {
	if (!storeSelector) return;

	const googleMapsScript = document.createElement('script');
	googleMapsScript.setAttribute('id', 'google-maps-script');
	googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places&callback=initMap`;
	googleMapsScript.async = true;

	window.initMap = () => console.log('google maps API script added'); // eslint-disable-line

	if (!document.getElementById('google-maps-script')) document.head.appendChild(googleMapsScript);
});
