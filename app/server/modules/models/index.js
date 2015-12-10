define([
	'fs',
	'path',
	'module',
	'lodash',
	'sequelize',
	'json!config'
], function(
	fs,
	path,
	module,
	_,
	Sequelize,
	config
){

	var sequelize, 
		db = {}, 
		config = config.database
		filename =  module.uri,
		dirname = path.dirname(filename);

	sequelize = new Sequelize(config.database, config.user, config.password, {
	 	host: config.host,
	 	port: config.port,
	 	dialect: config.dialect
	});

	fs.readdirSync(dirname)
	  .filter(function(file){
		return (file.indexOf('.') !== 0 && file !== 'index.js');
	  })
	  .forEach(function(file){
	  	var model = sequelize.import(file);
	  	 db[model.name] = model;
	  });

	Object.keys(db).forEach(function(modelName) {
		if ("associate" in db[modelName]) {
			db[modelName].associate(db);
		}
	});

	db.sequelize = sequelize;
	db.Sequelize = Sequelize;

	return db;
});