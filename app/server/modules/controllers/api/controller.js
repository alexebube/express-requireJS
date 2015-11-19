define([], function(){
	
	function finder(req, res, next) {
		res.send('Api route running')
		next();
	}

	return finder;

});