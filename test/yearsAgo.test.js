let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe('yearsAgo', function(){


    it('that takes in a year and return how many years ago that was.', function(){
        assert.equal(yearsAgo('2012 '), 5);
    });


        it('that takes in a year and return how many years ago that was.', function(){
            assert.equal(yearsAgo('2009 '), 8);
        });
});
