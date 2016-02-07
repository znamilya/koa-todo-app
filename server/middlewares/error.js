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

            // Mongoose errors
            } else if (err.name === 'ValidationError') {
                let errors = {};

                for (let field in err.errors) {
                    errors[field] = err.errors[field].message;
                }

                this.status = 400;
                this.body = { errors };

            } else {
                this.status = 500;
                this.body = http.STATUS_CODES[500];
                console.log(err.stack);
            }
        }
    }
}