'use strict';

var mongoose = require('mongoose'),
	Site = mongoose.model('Site');

/*
** Create a new Site for Tips
*/
exports.create = function(req, res, next){
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	Site.create({
		site : req.body.site,
		siteURL : req.body.siteURL
	}, function(err, site){
		if(err){
			res.send(err);
		}
		else{
			Site.find(function(err,sites){
				if(err){
					res.send(err);
				}
				else{
					res.json(sites);
				}
			});
		}
	});
};

/*
** Remove a Site
*/
exports.remove = function(req, res){
	Site.remove({
		_id : req.params.site_id
	}, function(err, site){
		if(err){
			res.send(err);
		}
		else{
			Site.find(function(err,sites){
				if(err){
					res.send(err);
				}
				else{
					res.json(sites);
				}
			});
		}
	});
};

/*
** List of All Sites
*/
exports.all = function(req,res){
	Site.find().exec(function(err,sites){
		if(err){
			res.send(err);
		}
		else{
			res.json(sites);
		}
	});
};