define(['lodash'], function(_){

	var BaseHelper = function(){

	};

	BaseHelper.prototype.conversion = function(data){
		var results = [];

		if(_.isArray(data)){
			_.each(data, function(values){
				if(_.has(values,'dataValues')){
					results.push(values['dataValues']);
				}
			});
		} else {
			if(_.has(data,'dataValues')) {
				results.push(data['dataValues']);
			}
		}

		return results;
	};

	return BaseHelper;

});