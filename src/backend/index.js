'use strict';

let koa    = require('koa');

let router = require('./routers');

let app    = koa();


app.use(router.routes());


app.listen(3224);