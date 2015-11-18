/**
 * Require JS configuration file
 */
function RequireJSConfig(){
	var baseConfig = {
		baseUrl: 'app',
		path: {

		},
		nodeRequire: require
	}

	return baseConfig;
};

module.exports = RequireJSConfig;