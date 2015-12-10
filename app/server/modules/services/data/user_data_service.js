define([
	'util',
	'models/index',
	'data/base_data_service'
], function(
	util,
	model,
	BaseDataService
){
	var UserDataService = function(options){
		BaseDataService.call(this, model.Users, options);
	};

	util.inherits(UserDataService, BaseDataService);

	return new UserDataService();

});