define(['fs'], function(fs){

	function MainApp () {
		console.log("YAY!!! its working");
		console.log(fs);
	};

	exports.Main = new MainApp();

});