let assert = require("assert");
let countRegNumber = require("../countRegNumber");


describe('countRegNumber', function(){

    it(' It should count all the registration numbers.', function(){
      var count = "CL 124,CY 567,CL 345, CJ 456,CL 341";
        assert.equal(countRegNumber(count), 3);
    });


    it(' It should count all the registration numbers.', function(){
      var count = "CL 124,CY 567,CL 345, CJ 456";
        assert.equal(countRegNumber(count), 2);
    });

});
