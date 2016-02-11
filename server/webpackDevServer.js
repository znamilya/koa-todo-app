'use strict';

let webpack          = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let webpackConfig    = require('../webpack.config.js');


module.exports = function () {
    new WebpackDevServer(webpack(webpackConfig), {
       hot: true,
       historyApiFallback: true,
       proxy: {
         "*": "http://localhost:3224"
       }
    }).listen(3225, 'localhost', function (err, result) {
       if (err) {
         console.log(err);
       }

       console.log('Listening at localhost:3225');
    });
}