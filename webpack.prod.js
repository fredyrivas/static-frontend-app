const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CssnanoPlugin = require('cssnano-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    optimization: {
        minimizer: [
            new CssnanoPlugin(),
            new TerserPlugin()
        ]
    }
})