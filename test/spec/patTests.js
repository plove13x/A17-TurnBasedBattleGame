// Feel free to create personal test files as well (e.g. sterlingTest.js)


/* global describe, it */

(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });
});

describe("Creates new playerType", function() {

	beforeEach(function() {
    	this.playerType = new PlayerType("plove");
  	});

	it("should make playerType's name plove", function(){
		expect(this.playerType.name).to.equal("plove");
	});

	it("should make playerType harder to expire", function(){
  		expect(this.playerType.hp).to.equal(1500);
	});

});

describe("Creates new celebrity", function() {

	beforeEach(function() {
    	this.celebrity = new Celebrity("paris");
  	});

	it("should make celebrity's name paris", function(){
		expect(this.celebrity.name).to.equal("paris");
	});

	it("should make celebrity easier to expire", function(){
  		expect(this.celebrity.hp).to.equal(1000);
	});

	it("should make celebrity more conceited", function(){
  		expect(this.celebrity.conceit).to.equal(83.33333);
	});

});


describe("Creates new Gordon Gekko", function() {

	beforeEach(function() {
		this.gordonGekko = new GordonGekko("P");
	});

	it("should make GG have celebrity hp #", function(){
  		expect(this.gordonGekko.hp).to.equal(1000);
  		/*mason.pet(sadie);
  		expect(sadie.status).toBe('happy');*/
	});

	it("should make GG make it rain", function() {
		expect(this.gordonGekko.makeItRain).to.not.throw(Error);
	});

});


describe("Creates new Jaws", function() {

	beforeEach(function() {
		this.jaws = new Jaws("P");
	});

	it("should make Jaws easier have low HP", function() {
		expect(this.jaws.hp).to.equal(500);
	});

	it("should make Jaws have status of slow", function() {
  		expect(this.jaws.status).to.equal("slow");
  		/*mason.pet(sadie);
  		expect(sadie.status).toBe('happy');*/
	});

	it("should make Jaws eat the whole damn thing", function() {
		expect(this.jaws.eat).to.not.throw(Error);
	});

	it("should make Jaws have the name P assuming this is a multiplayer game", function() {
		expect(this.jaws.name).to.equal("P");
	});

});

/*"Initializes Gordon Gekko as a party member"*/



/*
describe("Makes dog hungry", function() {
  
  	beforeEach(function(){
    	this.dog = new Dog({hungry: true});
  	});

	it("should make dog hungry", function(){
  		expect(this.dog.hungry).to.be.true;
	});

});
*/


