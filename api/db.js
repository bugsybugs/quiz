//var mongoose 	= require( 'mongoose' );
var db 				=	require('./dbConnection');
var Schema   		=	db.Schema;
 
var Categories = new Schema({
    name   			: 	String,
    description    	: 	String,
    questions 		: 	String
});
 
db.model( 'Categories', Categories );

var expose = {
	checkIfEmpty : function(){
		var category = new Categories({
			name: 'Math',
			description: 'Category for all the mathematics questions.',
			questions: '0'
		});
	},

	getCategories : function(response){
		console.log('Cats');
		Categories.find({}).find(function(err,data){
			
			if(err){
				response.send('Error');
				console.log(err);
			} else {
				console.log('Success')
				console.log(data);
			}
		})
	}
}

module.exports = expose;