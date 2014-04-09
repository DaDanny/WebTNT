'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');

/**
  * Site Schema
  */

 var SiteSchema = new Schema({
 	site: String,
 	siteURL: String,
 	followers: Number,
 	//Collection of ID's referencing Tips
 	tips: [],
 	/****
 		Image for this specific Site
 		Help with Implementing:
 		https://gist.github.com/aheckmann/2408370
 	*/
 	img: {data: Buffer, contentType:String}
 });

 mongoose.model('Site',SiteSchema);