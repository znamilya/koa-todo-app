'use strict';

let router    = require('koa-router')();
let apiRouter = require('./api');

router.use('/api', apiRouter.routes());

router.get('/', function* () {
    this.body = yield this.render('index.jade', {
        title: 'Hello, Koa.js!'
    });
})

module.exports = router;