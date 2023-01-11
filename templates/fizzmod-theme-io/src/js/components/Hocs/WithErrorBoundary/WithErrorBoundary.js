import React from 'react';

const WithErrorBoundary = Component =>
	class ErrorBoundary extends React.PureComponent {
		constructor(props) {
			super(props);
			this.state = {
				hasError: false
			};
		}

		static getDerivedStateFromError() {
			return { hasError: true };
		}

		render() {
			const { hasError } = this.state;
			if (hasError) return null;
			return <Component {...this.props} />;
		}
	};

export default WithErrorBoundary;
