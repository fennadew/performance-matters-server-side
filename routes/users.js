var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/portret/:nummer', function(req, res) {
    res.send('user ' + req.params.nummer);
});

module.exports = router;
