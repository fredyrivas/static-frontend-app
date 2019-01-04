const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    
    devtool: 'source-map'

    // plugins: [
    //     new FaviconsWebpackPlugin({
    //         logo: './src/assets/favicon/fav.png',
    //         prefix: 'assets/favicons/'
    //     })
    // ]
})