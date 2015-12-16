var requirejs = require("requirejs");
var chai = require("chai");
var expect = chai.expect;
var sinon = require('sinon');
var Promise = require('bluebird');
var chaiAsPromised = require("chai-as-promised");
var requireJSConfig = require('../../../../../app/requirejs-config');
var userServiceMock = require('../../../../resources/userService/user_service_stub');
var sandbox = sinon.sandbox.create();

// Pulling in mocks
var user = userServiceMock['user'];
var users = userServiceMock['users'];

// Mocking out Base Service 
var BaseService = function(dataService, options){};

BaseService.prototype = {
	get: sandbox.stub().returns(Promise.resolve({})),
	getById: sandbox.stub().returns(Promise.resolve({}))
};

// Mocking out Converter Service 
var userConverter = {
	conversion: sinon.stub().returns(users)
};

// using Chai Promise
chai.use(chaiAsPromised);

// Call require JS config
requirejs.config(requireJSConfig());


describe('User Service', function() {
    var Squire, injector;

    before(function() {
    	// Requiring squire.js to inject requireJS dependencies
    	Squire = requirejs('squirejs');
    	injector = new Squire();
    	injector.mock('service/base_service', BaseService);
    	injector.mock('helper/user_helper', userConverter);
    });

    after(function() {
    	// Clean out mocks
        sandbox.verifyAndRestore();
        injector.clean();
        injector.remove();
    });

    describe('#UserService.getUsers()', function(){

        it('should return a fulfilled promise', function(done){
            injector.require(['service/user_service'], function(userService){
    			expect(userService.getUsers()).to.be.fulfilled;
            	done();
    		});
        });

        it('should return an array of users objects', function(done){
            injector.require(['service/user_service'], function(userService){
    			userService.getUsers().then(function(results){
    				expect(results).to.be.an('array');
    				expect(results).to.have.length.above(1);
    				expect(results[0]).to.have.property('userID');
    				expect(results[0]).to.have.property('firstName');
    				expect(results[0]).to.have.property('email');
    				done();
    			});
    		});
        });
    });

    describe('#UserService.getUser(id)', function(){
    	var id = 1;

        it('should return a fulfilled promise', function(done){
            injector.require(['service/user_service'], function(userService){
    			expect(userService.getUser(id)).to.be.fulfilled;
            	done();
    		});
        });

        it('should return a user object', function(done){
            injector.require(['service/user_service'], function(userService){
            	userService.getUser(id).then(function(results){
    				expect(results).to.be.an('object');
    				expect(results).to.have.property('userID');
    				expect(results).to.have.property('firstName');
    				expect(results).to.have.property('email');
    				done();
    			});
    		});
        });
    });
});