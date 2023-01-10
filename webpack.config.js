const path = require('path');
const { JavascriptModulesPlugin } = require('webpack');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "inline-source-map",
};