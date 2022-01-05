var express = require('express');
var router = express.Router();

//The 404 Route (ALWAYS Keep this as the last route)
router.get('/', function (req, res) {
    res.status(404).send('Error 404');
});

module.exports = router;