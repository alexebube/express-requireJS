/**
 * The main entry point
 */

var requirejs = require('requirejs');
	requireJSConfig = require('./requirejs-config');

// Call require JS config
requirejs.config(requireJSConfig());

requirejs(['scripts/index']);