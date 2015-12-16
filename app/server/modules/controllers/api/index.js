define([
	'express',
	'controller/api/controller'
], function(
	express, 
	apiController
) {

	var router = express.Router();

	router.route('/')
		.get(apiController.findAll);

	router.route('/:id')
		.get(apiController.findOne);
		
	return router;
});