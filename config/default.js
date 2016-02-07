'use strict';

const path = require('path');


module.exports = {
    secret: 'secret_phrase',
    root: process.cwd(),
    templatePath: path.join(process.cwd(), 'server', 'templates'),
};
