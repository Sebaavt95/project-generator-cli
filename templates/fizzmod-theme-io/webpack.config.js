const path = require('path');
const webpack = require('webpack');

const config = {
	module: {
		rules: [
			{
				test: /\.conf$/,
				loader: 'json-loader'
			},
			{
				test: /\.scss$/,
				loader: 'sass-loader'
			}
		]
	},
	resolve: {
		alias: {
			FitConfig: path.resolve(__dirname, 'fitCustomConfig')
		},
		modules: ['FitConfig', path.resolve(__dirname, 'src/js'), 'node_modules']
	},
	plugins: [
		new webpack.ProvidePlugin({
			ENV: path.resolve(`${__dirname}/env/`, process.env.VTEX_ENV)
		})
	]
};

module.exports = config;
