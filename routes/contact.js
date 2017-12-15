/*
* @Author: leapfrong
* @Date:   2017-12-14 14:19:28
* @Last Modified by:   leapfrong
* @Last Modified time: 2017-12-14 15:15:46
*/


var express = require('express');
var nodemailer = require('nodemailer')
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
  	service: 'Gmail',
  	auth: {
  		user: 'sijanonly@gmail.com',
  		pass: 'testtest'
  	}
  });
 
  var mailOptions = {
  	from: 'John Doe <Johndoe@gmail.com>',
  	to: 'sijanonly@gmail.com',
  	subject : 'Website Submission',
  	text: 'You have a new submission with the following details...Name: '+req.body.name+ 'Email: '+req.body.email+ ' Message: '+req.body.message,
  	html: '<p>You go a new submission with the following details</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  };
  transporter.sendMail(mailOptions, function(err, info){
  		if(err){
  			console.log(err);
  			res.redirect('/');
  		} else {
  			console.log('Message sent', info.response);
  			res.redirect('/');
  		}
  });

});

module.exports = router;
