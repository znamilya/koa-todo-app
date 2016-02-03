'use strict';

let http = require('http');


module.exports = function () {
    return function* (next) {
        try {
            yield* next;
        } catch(err) {
            if (err.status) {
                this.status = err.status;
                this.body = err.message;
                console.log(err.stack);
            } else {
                this.status = 500;
                this.body = http.STATUS_CODES[500];
                console.log(err.stack);
            }
        }
    }
}