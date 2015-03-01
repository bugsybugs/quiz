'use strict';
var mongoose = require('mongoose');
var config = require('../config/config');

var mode = config.env.mode;
var modeDb = config.db[mode];


mongoose.connect(modeDb.hostname, function(err){
	if(err){
		console.log('MongoDB Connection unsuccessful : ');
		console.log(err);
	} else{
		console.log('Successfully Connected to MongoDB@'+modeDb.host);
	}
});

module.exports = mongoose;