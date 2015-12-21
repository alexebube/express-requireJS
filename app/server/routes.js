/**
 * Main Route Module that instantiates express route
 * 
 * @module main/routes
 * @requires express
 * @requires controller/api/index
 * @requires lodash
 * @return {function} ap1 -  route function
 */
define([
	'express', 
	'lodash', 
	'controller/api/index'
], function(
	express,
	 _, 
	 api_v1
) {

	var api = express.Router();

	api.use(api_v1);

	return api;
});