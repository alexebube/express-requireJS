/**
 * Server JS file that fires the express server and initilize routes and middleware
 * @param  {Object} express    Express module
 * @param  {Object} exports    CommonJS exports module
 * @param  {Object} bodyParser Body Parser middleware
 * @param  {Object} _          lodash utility module
 * @param  {function} routes)    {	function   Server() {		this.app [description]
 * @return {Object}            Server Object
 */
define([
	'express',
	'body-parser', 
	'lodash',
	'main/routes'
], function(
	express, 
	bodyParser, 
	_,
	routes
) {

	function Server() {
		this.app = express();
		this.port = port = process.env.PORT || 4444;
	}

	Server.prototype.configureServer = function(){
		var app = this.app;
		app.use(bodyParser.json());
		app.use('/api',routes);
	};

	Server.prototype.run = function() {
		this.configureServer();
		this.app.listen(this.port);
		console.log('Server running at http://localhost:'+ this.port +'/');
	};

	return Server;
});