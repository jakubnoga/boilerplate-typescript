let path = require('path');

module.exports = {
	entry: './index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js',
		library: 'unittesting'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: { browsers: "IE 10" } }],
							'@babel/preset-typescript',
						],
						plugins: [
							'@babel/plugin-proposal-class-properties',
							'@babel/plugin-proposal-object-rest-spread',
						],
					},
				},
			},
		],
	},
};