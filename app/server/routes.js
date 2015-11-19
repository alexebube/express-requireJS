/**
 * The API Routes
 * @param  {[Object]} express [description]
 * @param  {Object} _       [description]
 * @param  {[Object]} api_v1) {	var        api [description]
 * @return {[function]}         [rount funtion]
 */
define(['express', 'lodash', 'controller/api/index'], function(express, _, api_v1) {

	var api = express.Router();

	api.use(api_v1);

	return api;
});