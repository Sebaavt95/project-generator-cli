import { useState, useEffect } from 'react';

const useSticky = (stickyValue = 80, headerHeight = 126) => {
	const validateDocument = () => {
		const documentHeight = document.documentElement.offsetHeight;
		const windowHeight = window.innerHeight;

		return documentHeight - windowHeight > headerHeight + stickyValue;
	};

	const validateSticky = () => (validateDocument() ? window.scrollY >= stickyValue : false);

	const isInitialSticky = validateSticky();

	const [sticky, setSticky] = useState(isInitialSticky);

	const handleSticky = () => {
		if (validateSticky()) return setSticky(true);

		return setSticky(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleSticky);

		return () => window.removeEventListener('scroll', handleSticky);
	}, []);

	return {
		sticky
	};
};

export default useSticky;
