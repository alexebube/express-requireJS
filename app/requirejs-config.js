/**
 * Require JS configuration file
 */
function RequireJSConfig(){
	var baseConfig = {
		baseUrl: 'app',
		paths: {
			'main':'server',
			'module':'server/modules',
			'controller':'server/modules/controllers',
			'models':'server/modules/models',
			'config': '../config/config.json',
			'helper': 'server/modules/helpers',
			'data': 'server/modules/services/data',
			'service': 'server/modules/services/service',
			'text': '../node_modules/requirejs-plugins/lib/text',
			'json': '../node_modules/requirejs-plugins/src/json',
		},
		nodeRequire: require
	}

	return baseConfig;
};

module.exports = RequireJSConfig;