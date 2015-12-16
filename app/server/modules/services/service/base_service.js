/**
 * Base Service module that defines basic service
 * 
 * @module service/base_service
 */
define([], function(){

	/**
	 * [BaseService description]
	 *
	 * @constructor
	 * @param {object} dataService - sequelize data model
	 * @param {object} options     - options object
	 */
	var BaseService = function(dataService, options){
		this.getDataService = function(){
			return dataService;
		};
	};

	BaseService.prototype.get = function(){
		var dataService = this.getDataService();
		return dataService.find().then(function(result){
			return result;
		});
	};

	BaseService.prototype.getById = function(id){
		var dataService = this.getDataService();
		return dataService.findById(id).then(function(result){
			return result;
		});
	};

	return BaseService;
});