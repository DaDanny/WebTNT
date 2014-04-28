'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');

/**
 * Create user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.save(function(err) {
    if (err) return res.json(400, err);
    
    req.logIn(newUser, function(err) {
      if (err) return next(err);

      return res.json(req.user.userInfo);
    });
  });
};

/**
 *  Get profile of specified user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404);

    res.send({ profile: user.profile });
  });
};

/**
 * Change password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return res.send(400);

        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Get current user
 */
exports.me = function(req, res) {
  res.json(req.user || null);
};

/*
** Follow a Site
*/
exports.follow = function(req,res){
  var foundSite = false;
  User.findById(req.body.userId, function(err, user){
    var sites = user.followedSites.length;
    for(var i = 0; i< sites; i++){
      if(user.followedSites[i] == req.body.siteId){
        foundSite = true;
      }
    }
    if(foundSite == false){
    User.update(
      {_id:req.body.userId},
      {$push:{followedSites: req.body.siteId}},
      function(err,user){
        if(err){
          res.send(err);
        }
        else{
          User.find(function(err,users){
            if(err){
              res.send(err);
            }
            else{
              res.json(users);
            }
          });
        }
      });
    }
  });   
};

exports.unfollow = function(req,res){
  User.findById(req.body.userId, function(err, user){
    var sites = user.followedSites.length;
    var index = 0;
    var foundSite = false;
    for(var i = 0; i<sites;i++){
      if(user.followedSites[i] == req.body.siteId){
        foundSite = true;
        index = i;
      }
    }
    if(foundSite == true){
      user.followedSites.splice(index,1);
    }
    user.save(function(err){
      if(err){
        res.send(err);
      }
      else{
        res.send(200);
      }
    });
  });
};