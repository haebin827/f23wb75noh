var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const query = req.query;
  const rows = Number(query.rows);
  const cols = Number(query.cols);

  if (
    Number.isInteger(rows) &&
    Number.isInteger(cols) &&
    rows >= 1 && rows <= 10 &&
    cols >= 1 && cols <= 10
  ) {
    res.render('board', { title: 'Board Display', query, rows, cols });
  } else {
    res.status(400).send('Invalid input');
  }
});

module.exports = router;