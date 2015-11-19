/**
 * The main entry point
 */

var requirejs = require('requirejs');
	requireJSConfig = require('./requirejs-config');

// Call require JS config
requirejs.config(requireJSConfig());

requirejs(['main/server'], function(main){

	var app = new main.Server();
	app.run();
});