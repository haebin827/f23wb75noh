var express = require('express');
var router = express.Router();

/* GET home page. */
app.get('/elections', (req, res) => {
  res.render('elections', { title: 'Search Results - Elections' });
});

module.exports = router;
