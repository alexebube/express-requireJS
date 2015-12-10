/**
 * The main entry point
 */

var requirejs = require('requirejs');
	requireJSConfig = require('./requirejs-config');

// Call require JS config
requirejs.config(requireJSConfig());

requirejs(['main/server'], function(Server){

	var app = new Server();
	app.run();
});