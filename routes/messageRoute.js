const express = require('express');
const messageController = require('../controllers/messageController');
const log = require('../utils/log');

const router = express.Router();

router.get('/:id?', messageController.getStudentsForMessage);

module.exports = router;
