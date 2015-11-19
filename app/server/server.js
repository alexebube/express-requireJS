define(['express', 'exports', 'body-parser', 'lodash'], function(express, exports, bodyParser, _){

	function Server() {
		this.app = express();
		this.port = port = process.env.PORT || 4444;
	}

	Server.prototype.configureServer = function(){
		var app = this.app;

		app.use(bodyParser.json());
	};

	Server.prototype.init = function(){
		_.bind(this.configureServer, this);
	};

	Server.prototype.run = function() {
		this.init();
		this.app.listen(this.port);
		console.log('Server running at http://localhost:'+ this.port +'/');
	};

	exports.Server = Server;
});