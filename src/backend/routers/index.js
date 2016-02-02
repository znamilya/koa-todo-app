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


module.exports = router;