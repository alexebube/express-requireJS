/**
 * A user service module that defines user service class and methods
 * for accessing and manipulating users
 * 
 * @module service/user_service
 * @requires service/base_service
 * @requires util
 * @requires bluebird
 * @requires data/user_data_service
 * @requires helper/user_helper
 */
define([
	'util',
	'bluebird',
	'service/base_service',
	'data/user_data_service',
	'helper/user_helper'
], function(
	util,
	Promise,
	BaseService,
	dataService,
	userConverter
){

	/**
	 * UserService Constructor
	 * 
	 * @constructor
	 * @param {object} dataService user data model
	 * @param {object} options     options object
	 */
	var UserService = function(dataService, options){
		BaseService.call(this, dataService, options);
	};

	util.inherits(UserService, BaseService);

	/**
	 * Retrieve all users
	 * @methods getUsers
	 * @return {Promise} A promise with all users
	 */
	UserService.prototype.getUsers = function(){
		var deferred = Promise.pending(), result;

		this.get().then(function(results){
			result = userConverter.conversion(results);
			deferred.resolve(result);
		})
		.catch(function(error){
			deferred.reject(error);
		});

		return deferred.promise;
	};

	/**
	 * Retrieve a users by the user id
	 * @methods getUser
	 * @return {Promise} A promise with the users
	 */
	UserService.prototype.getUser = function(id){
		var deferred = Promise.pending(), result;

		this.getById(id).then(function(results){
			result = userConverter.conversion(results);
			deferred.resolve(result[0]);
		})
		.catch(function(error){
			deferred.reject(error);
		});

		return deferred.promise;
	};

	return new UserService(dataService, {});
});