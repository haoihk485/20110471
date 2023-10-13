const express = require('express');
const studentController = require('../controllers/studentController');
const log = require('../utils/log');

const router = express.Router();

router.get('/:id', studentController.getStudent);
router.post('/:id', studentController.addStudent);

module.exports = router;
