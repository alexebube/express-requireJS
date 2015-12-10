define([
	'util',
	'helper/base_helper'
],function(
	util,
	BaseHelper
){

	var UserHelper = function(){
		BaseHelper.call(this);
	};

	util.inherits(UserHelper, BaseHelper);

	return new UserHelper();
});