'use strict';

let router    = require('koa-router')();

let apiRouter = require('./api/index');


// router.use('/api', apiRouter.routes());

router.get('/', function* () {
    console.log('chpok!!!')

    this.body = yield this.render('index.jade', {
        title: 'Hello, Quotes!'
    });
});


module.exports = router;