define([
	
], function(

){

	var BaseDataService = function(model, options) {
		this.model = model;
	};

	BaseDataService.prototype.getModel = function(){
		return this.model;
	};

	BaseDataService.prototype.find = function(options){
		var model = this.getModel();
		return model.findAll(options).then(function(result){
			return result;
		});
	};

	return BaseDataService;
});