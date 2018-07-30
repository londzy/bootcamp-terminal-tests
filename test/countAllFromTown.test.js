let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe('countAllFromTown', function(){

    it('a function that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return all the registration numbers in the string that is for that town.', function(){
      var count = "CL 124,CY 567,CL 345, CJ 456,CL 341','CL";
;
        assert.equal(countRegNumber(count), 3);
    });


    it('a function that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return all the registration numbers in the string that is for that town.', function(){
      var count = "CL 124,CY 567,CL 345, CJ 456','CL";
;
        assert.equal(countRegNumber(count), 2);
    });

});
