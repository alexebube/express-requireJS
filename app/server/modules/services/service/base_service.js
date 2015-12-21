/**
 * Base Service module that defines basic service
 * 
 * @module service/base_service
 */
define([], function(){

	/**
	 * Base Service constructor
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

	/**
	 * Retrieve all record from the database
	 * @method get
	 * @return {Promise} Promise with all record
	 */
	BaseService.prototype.get = function(){
		var dataService = this.getDataService();
		return dataService.find().then(function(result){
			return result;
		});
	};

	/**
	 * Retrieve a record from the database by id - primaryKey 
	 * @method getById
	 * @param {Integer} id - primaryKey
	 * @return {Promise} Promise with the record
	 */
	BaseService.prototype.getById = function(id){
		var dataService = this.getDataService();
		return dataService.findById(id).then(function(result){
			return result;
		});
	};

	return BaseService;
});