/**
 * Require JS configuration file
 */
function RequireJSConfig(){
	var baseConfig = {
		baseUrl: 'app',
		paths: {
			'main':'server',
			'module':'server/modules',
			'controller':'server/modules/controllers'
		},
		nodeRequire: require
	}

	return baseConfig;
};

module.exports = RequireJSConfig;