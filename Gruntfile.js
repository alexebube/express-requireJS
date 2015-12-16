module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-mysql-runfile');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-jsdoc');

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
		},

		mochaTest: {
			test: {
				options: {
			    	reporter: 'spec',
			    	captureFile: 'results.txt',
			    	quiet: false,
			    	clearRequireCache: false
		    	},
		    	src: ['spec/**/*.js']
		    }
		},

		jsdoc : {
	        dist : {
	            src: ['app/server/**/*.js', 'spec/**/*.js'],
	            options: {
	                destination: 'doc'
	            }
	        }
	    }
	});

	grunt.registerTask('db:setup','Setting up SQL Schema and adding sample data',[
		'mysqlrunfile:tables',
		'mysqlrunfile:sample'
	]);

	grunt.registerTask('test', 'Run unit tests', ['mochaTest']);

	grunt.registerTask('doc', 'Generate documentation', ['jsdoc']);
};