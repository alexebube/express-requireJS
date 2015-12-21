/**
 * A controller that defines function to call 
 * 
 * @module service/user_service
 * @requires service/user_service
 */
define([
	'service/user_service'
], function(
	userService
){
	/**
	 * Retrieves all users
	 * @func findAll
	 * @param  {object}   req  request object
	 * @param  {object}   res  response object
	 * @param  {Function} next next fn call the next middleware
	 */
	function findAll(req, res, next) {
		userService.getUsers().then(function(results){
			res.send(results);
			next();
		}).catch(function(error){
			next(error);
		});
	}

	/**
	 * Retrieves a user base on id
	 * @func findOne
	 * @param  {object}   req  request object
	 * @param  {object}   res  response object
	 * @param  {Function} next next fn call the next middleware
	 */
	function findOne(req, res, next){
		var id = req.params.id;

		userService.getUser(id).then(function(results){
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