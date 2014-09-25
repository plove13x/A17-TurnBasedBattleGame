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
})();


describe("Makes dog hungry", function() {
  
  beforeEach(function(){
    this.dog = new Dog({hungry: true});
  });

	it("should make dog hungry", function(){
  		expect(this.dog.hungry).to.be.true;
	});

});
