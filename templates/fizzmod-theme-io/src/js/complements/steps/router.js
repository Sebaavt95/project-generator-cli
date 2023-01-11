export const router = current => {
	switch (current) {
		case 'profile':
			window.location.hash = '/profile';
			break;
		case 'shipping':
			window.location.hash = '/shipping';
			break;
		case 'payment':
			window.location.hash = '/payment';
			break;
		default:
			return true;
	}
};
