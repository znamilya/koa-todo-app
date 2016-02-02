'use strict';

let koa    = require('koa');
let config = require('config');

let router = require('./routers');

let app    = koa();

app.keys = [config.get('secret')];
app.use(router.routes());


app.listen(3224);