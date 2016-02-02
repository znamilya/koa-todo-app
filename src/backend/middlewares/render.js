'use strict';

let path   = require('path');
let jade   = require('jade');
let config = require('config');


module.exports = function () {
    return function* (next) {
        this.render = function* (filepath, options) {
            return jade.renderFile(path.join(config.templatePath, filepath), options)
        }

        yield* next;
    }
}