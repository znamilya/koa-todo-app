'use strict';

let jade = require('jade');


module.exports = function () {
    return function* (next) {
        this.render = function (filepath, options) {
            return jade.renderFile(path.join(config.templatePath, filepath), options)
        }

        yield* next;
    }
}