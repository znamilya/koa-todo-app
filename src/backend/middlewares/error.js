'use strict';

let http = require('http');


module.exports = function () {
    return function* (next) {
        try {
            yield* next;
        } catch(e) {
            if (e.status) {
                this.status = e.status;
                this.body = e.message;
            } else {
                this.status = 500;
                this.body = http.STATUS_CODES[500];
            }
        }
    }
}