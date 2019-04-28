var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Code-share', description: 'the platform for code collaboration' });
});

router.get('/about', function(req, res, next) {
	res.render('about', {title: 'code-share: a plaform for code collaboration.'});
});

router.route('/contact')
	.get(function(req, res, next) {
		res.render('contact', {title: 'code-share: a platform for code collaboration.'})
	})
	.post(function(req, res, next) {
		req.checkBody('name', 'Empty name').notEmpty();
		req.checkBody('email', 'Invalid email').notEmpty();
		req.checkBody('message', 'Empty message').notEmpty();
		var errors = req.validationErrors();
		
		if(errors) {
			res.render('contact', {
				title: 'code-share: a plaform for code collaboration.',
				name: req.body.name,
				email: req.body.email,
				message: req.body.messge,
				errorMessages: errors
			});
		} else {
			res.render('thank', {title: 'code-share: a platform for sharing code.'})	
		}
	});

module.exports = router;
