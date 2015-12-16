/**
 * Main Route Module that instantiates express route
 * 
 * @module main/routes
 * @param {Object} express - express module
 * @param {Object} lodash -  lodash utility module
 * @param {Object} api_v1 -  controller
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