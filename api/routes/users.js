var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:name', (req, res, next) => {
  res.send(req.get('name'));
  console.log(req);
});

module.exports = router;
