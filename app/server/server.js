/**
 * Server module that instantiates the express server
 * Initilize routes and middleware.
 * 
 * @module Server
 * @param {Object} express -    express module
 * @param {Object} bodyParser - body Parser middleware
 * @param {Object} lodash  -    lodash utility module
 * @param {function} routes -   routes
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
	/**
	 * Server constructor.
	 * Representing a Server Class
	 * @constructor
	 */
	function Server() {
		this.app = express();
		this.port = port = process.env.PORT || 4444;
	}

	/**
	 * configureServer method
	 */
	Server.prototype.configureServer = function(){
		var app = this.app;
		app.use(bodyParser.json());
		app.use('/api',routes);
	};

	/**
	 * run method
	 */
	Server.prototype.run = function() {
		this.configureServer();
		this.app.listen(this.port);
		console.log('Server running at http://localhost:'+ this.port +'/');
	};

	return Server;
});