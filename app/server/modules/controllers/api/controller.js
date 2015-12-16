define([
	'service/user_service'
], function(
	userService
){
	
	function findAll(req, res, next) {
		userService.getUsers().then(function(results){
			res.send(results);
			next();
		}).catch(function(error){
			next(error);
		});
	}

	function findOne(req, res, next){
		var id = req.params.id;

		userService.getUser(id).then(function(results){
			console.log(results);
			res.send(results);
			next();
		}).catch(function(error){
			next(error);
		});
	}

	return {
		"findAll": findAll,
		"findOne": findOne,
	} 

});