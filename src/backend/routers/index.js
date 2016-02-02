'use strict';

let router = require('koa-router')();



router.get('/api/users', function* () {
    this.body = 'get users';
});


router.get('/api/users/:id', function* () {
    this.body = 'get user ' + this.params.id;
});


router.post('/api/users/', function* () {
    this.body = 'post user';
});


router.delete('/api/users/:id', function* () {
    this.body = 'delete user ' + this.params.id;
});


router.get('/', function* () {
    this.body = yield this.render('index.jade', {
        title: 'Hello, Koa.js!'
    });
})

module.exports = router;