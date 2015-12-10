define(['lodash'], function(_){

	var BaseHelper = function(){

	};

	BaseHelper.prototype.conversion = function(data){
		var results = [];

		_.each(data, function(values){
			if(_.has(values,'dataValues'))
			results.push(values['dataValues']);
		});

		return results;
	};

	return BaseHelper;

});