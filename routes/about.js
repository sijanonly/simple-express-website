/*
* @Author: leapfrong
* @Date:   2017-12-14 14:02:23
* @Last Modified by:   leapfrong
* @Last Modified time: 2017-12-14 14:02:54
*/

var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
