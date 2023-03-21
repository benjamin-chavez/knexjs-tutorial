const express = require('express');
const personController = require('../controller/person');
// FIXME: SETUP REQUEST BODY VALIDATION

const router = express.Router();
router.post('/person', personController.createPerson);

module.exports = router;
