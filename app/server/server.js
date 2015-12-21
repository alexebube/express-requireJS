/**
 * Server module that instantiates the express server
 * Initilize routes and middleware.
 * 
 * @module Server
 * @requires express
 * @requires bodyParser middleware
 * @requires lodash
 * @requires main/routes
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
	 * Configure the express middleware and routes
	 * @method configureServer
	 */
	Server.prototype.configureServer = function(){
		var app = this.app;
		app.use(bodyParser.json());
		app.use('/api',routes);
		app.use('/docs', express.static('dist/doc/requirejs-node/0.0.1/'));
	};

	/**
	 * run express app
	 * @method run
	 */
	Server.prototype.run = function() {
		this.configureServer();
		this.app.listen(this.port);
		console.log('Server running at http://localhost:'+ this.port +'/');
	};

	return Server;
});