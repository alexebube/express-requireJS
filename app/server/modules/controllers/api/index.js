define(['express','controller/api/controller'], function(express, apiController){

	var router = express.Router();

	router.route('/')
		.get(apiController);

	return router;
});