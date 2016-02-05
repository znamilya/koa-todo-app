'use strict';

let http      = require('http');
let mongoose  = require('mongoose');
let router    = require('koa-router')();
let UserModel = require('../models/user');


router.param('userById', function* (id, next) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        this.throw(400);
    }

    this.userById = yield UserModel.findById(id);

    if (!this.userById) {
        this.throw(404);
    }

    yield* next;
})


router.get('/users', function* () {
    this.body =  yield UserModel.find({}).lean();
});


router.get('/users/:userById', function* () {
    this.body = this.userById.toObject();
});


router.post('/users', function* () {
    let newUser = yield UserModel.create({
        name: this.request.body.name,
        email: this.request.body.email,
    });

    this.body = newUser;
});


router.delete('/users/:userById', function* () {
    yield this.userById.remove();

    this.body = 'ok';
});


module.exports = router;
