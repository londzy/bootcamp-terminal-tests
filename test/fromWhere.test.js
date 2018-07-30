let assert = require("assert");
let greet = require("../greet");

describe('fromWhere', function(){
    //var count = 'morning, afternoon, nightshift';

    it('it should return Bellville registration number starting with CY', function(){
      assert.equal(fromWhere("CY 324"),"Bellville");
    });

    it('it should return Paarl registration number starting with CJ.', function(){
        // this test will fail - can you fix it?
      assert.equal(fromWhere("CJ 123"),"Paarl");
    });

    it('it should return Capetown registration number starting with CA.', function(){
        // this test will fail - can you fix it?
        assert.equal(fromWhere("CA 987"),"Cape Town");
    });

    it('should return unapplicacable if input is not a registration number.', function(){
        // this test will fail - can you fix it?
        assert.equal(fromWhere("NUZ 476"),"Some other place!");
    });


});
