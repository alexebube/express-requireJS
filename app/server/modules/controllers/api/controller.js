define(['service/user_service'], function(userService){
	
	function findAll(req, res, next) {
		userService.getUsers().then(function(results){
			console.log(results);
			res.send(results);
			next();
		}).catch(function(error){
			next(error);
		});
	}

	return findAll;

});