const express = require('express');
const router = express.Router();
const valueController = require('../controller/value');

router.get('/value', valueController.getValue);

module.exports = router;
