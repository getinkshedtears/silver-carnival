var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(passport) {
    
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/',
            failureRedirect : '/',
            failureFlash: true
        }));

return router;
}
