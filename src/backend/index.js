'use strict';

let koa        = require('koa');
let config     = require('config');
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

app.use(favicon());
app.use(serve('public'));
app.use(logger());
app.use(render());
app.use(error());
app.use(session(app));
app.use(bodyparser());
app.use(router.routes());


app.listen(3224);