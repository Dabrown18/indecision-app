const path = require('path');

module.exports = {
	entry: './src/App.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: "bundle.js"
	}
};