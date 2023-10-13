const express = require('express');
const indexController = require('../controllers/indexController');
const log = require('../utils/log');

const router = express.Router();

router.get('/', indexController.getAllStudents);

module.exports = router;
