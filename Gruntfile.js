module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-mysql-runfile');

	grunt.initConfig({

		db: grunt.file.readJSON('config/config.json'),

		mysqlrunfile: {
			options: {
				connection: {
					host: '<%= db.database.host %>',
					port: '<%= db.database.port %>',
					user: '<%= db.database.user %>',
					password: '<%= db.database.password %>',
					database: '<%= db.database.database %>',
					multipleStatements: true
				}
			},
			tables: {
                src: ['sql/schema.sql']
            },
            sample: {
            	src: ['sql/sampleDB.sql']
            }
		}
	});

	grunt.registerTask('db:setup','Setting up SQL Schema and adding sample data',[
		'mysqlrunfile:tables',
		'mysqlrunfile:sample'
	]);
};