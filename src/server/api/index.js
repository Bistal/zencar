const express = require('express');

const files = require('./files/files');
const types = require('./types/types');
const users = require('./users/users');

exports.setup = () => {
    const router = express.Router();

    router.use('/files', files.setup())
    router.use('/types', types.setup())
    router.use('/users', users.setup())

    return router;
}