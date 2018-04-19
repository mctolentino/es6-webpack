const webpack = require('webpack')
const path = require('path');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
	devtool: 'source-map',
	entry: {
		filename: './app.js'
	},
	output: {
		path: path.resolve(__dirname, '_build'),
		filename: 'bundle.js'
	},
	plugins: [
	  // env plugin
	  new webpack.DefinePlugin({
	  	'process.env': {
	  		NODE_ENV: JSON.stringify(nodeEnv)
	  	}
	  })
	]
}