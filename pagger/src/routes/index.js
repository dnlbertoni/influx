const express = require('express');
const router = express.Router();
const dummy = require('../servicios/dummy');
const send = require('../controllers/v1/send');
const metrics = require('../servicios/prometheus/metrics/');

router.get('/dummy', dummy);
router.get('/send/:evento/:grupo/:server/:address/:info', send);
router.get('/metrics', metrics);

module.exports = router;