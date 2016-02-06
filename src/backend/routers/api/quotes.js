'use strict';

let http      = require('http');
let mongoose  = require('mongoose');
let router    = require('koa-router')();

let QuoteModel = require('../../models/quote');


router.param('quoteById', function* (id, next) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        this.throw(400);
    }

    this.quoteById = yield QuoteModel.findById(id);

    if (!this.quoteById) {
        this.throw(404);
    }

    yield* next;
})


router.get('/', function* () {
    this.body =  yield QuoteModel.find({}).lean();
});


router.get('/:quoteById', function* () {
    this.body = this.quoteById.toObject();
});


router.post('/', function* () {
    let newQuoteData = {
        text: this.request.body.text
    };

    if (this.request.body.author) {
        newQuoteData.author = this.request.body.author;
    }

    if (this.request.body.source) {
        newQuoteData.source = this.request.body.author;
    }

    this.body = yield QuoteModel.create(newQuoteData);
});


router.delete('/:quoteById', function* () {
    yield this.quoteById.remove();

    this.body = 'ok';
});


module.exports = router;
