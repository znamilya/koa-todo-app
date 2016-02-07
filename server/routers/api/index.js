'use strict';

let router       = require('koa-router')();

let QuotesRouter = require('./quotes');


router.use('/quotes', QuotesRouter.routes());

module.exports = router;