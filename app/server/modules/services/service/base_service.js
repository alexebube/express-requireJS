define([], function(){

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

	return BaseService;
});