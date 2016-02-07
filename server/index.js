'use strict';

let koa        = require('koa');
let config     = require('config');
let mongoose   = require('mongoose');
let favicon    = require('koa-favicon');
let serve      = require('koa-static');
let logger     = require('koa-logger');
let session    = require('koa-session');
let bodyparser = require('koa-bodyparser');
let render     = require('./middlewares/render');
let error      = require('./middlewares/error');
let router     = require('./routers');

let app = koa();

app.keys = [config.get('secret')];


/* ------------------------------------------------------------------------------------------ *
 * DB                                                                                         *
 * ------------------------------------------------------------------------------------------ */
// let db = mongoose.connect('mongodb://puper:123@ds055485.mongolab.com:55485/koa');
let db = mongoose.connect('mongodb://localhost/quotes');


/* ------------------------------------------------------------------------------------------ *
 * MIDDLEWERES                                                                                *
 * ------------------------------------------------------------------------------------------ */
app.use(favicon());
app.use(serve('public'));
app.use(logger());
app.use(render());
app.use(error());
app.use(session(app));
app.use(bodyparser());
app.use(router.routes());


/* ------------------------------------------------------------------------------------------ *
 * RUN SERVER                                                                                 *
 * ------------------------------------------------------------------------------------------ */
app.listen(3224);


/* ------------------------------------------------------------------------------------------ *
 * WEBPACK DEV SERVER                                                                         *
 * ------------------------------------------------------------------------------------------ */
let webpack          = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let webpackConfig    = require('../webpack.config.js');

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