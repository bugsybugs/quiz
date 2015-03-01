'use strict';
var config = {
	db:{
		prod:{
			hostname:'mongodb://bugsadmin:bugspassword@ds055709.mongolab.com:55709/bugs',
			username: 'bugsadmin',
			password: 'bugspassword',
			host:'ds055709.mongolab.com'
		},
		dev:{
			hostname:'mongodb://localhost:27017/bugs',
			username: '',
			password: '',
			host:'localhost'
		}
	},
	env:{
		mode: process.argv[2] === 'dev' ? 'dev':'prod'
	}
}

module.exports = config;