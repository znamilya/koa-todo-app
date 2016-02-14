'use strict';

let webpack           = require('webpack');
let path              = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let appPath           = path.join(__dirname, 'app');
let publicPath        = path.join(__dirname, './public');


module.exports = {
    devtool: 'eval',
    target: 'web',
    entry: [
        'webpack-dev-server/client?http://localhost:3225',
        'webpack/hot/only-dev-server',
        path.join(appPath, 'index')
    ],

    output: {
        path: publicPath,
        filename: 'main.js',
        publicPath: '/'
    },

    resolve: {
        root: appPath,
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: appPath,
                loaders: ['react-hot-loader', 'babel-loader'],
            },
            {
                test: /\.js$/,
                include: appPath,
                loader: 'babel-loader',
            },
            {
                test: /\.styl$/,
                loaders: [
                    'style-loader',
                    'css-loader', 'autoprefixer-loader', 'stylus-loader'
                ]
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('main.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}