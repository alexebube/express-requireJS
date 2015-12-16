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

	var UserService = function(dataService, options){
		BaseService.call(this, dataService, options);
	};

	util.inherits(UserService, BaseService);

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