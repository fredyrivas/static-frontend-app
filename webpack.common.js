const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')



module.exports = {
    entry: {
        app: './src/app.js'
    },
    

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },


    plugins: [

        new CleanWebpackPlugin(['dist']),

        new MiniCssExtractPlugin({
            filename: "[name][contenthash].css"
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            template: './src/views/app/index.pug',
            chunks: ['app']
            //excludeChunks: ['xofluza', 'mainstyles']
        }),

        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/assets/img/'),
            to: path.resolve(__dirname, 'dist/assets/img/')
        }], { debug: 'info' }),

        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/assets/fonts/'),
            to: path.resolve(__dirname, 'dist/assets/fonts/')
        }], { debug: 'info' }),

        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/assets/js/external'),
            to: path.resolve(__dirname, 'dist/assets/js/external')
        }], { debug: 'info' })


    ],


    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader?url=false',
                'sass-loader?url=false'
            ]
        },
        {
            test: /\.pug$/,
            use: {
                loader: 'pug-loader',
                query: {
                    pretty: true
                }
            }
        }
        ]
    },


    resolve: {
        alias: {
            "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
            "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
            "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
            "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
            "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
            "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')
        },
    }

    
}