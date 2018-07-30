let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe('countAllFromTown', function(){

    it('It should return all the registration numbers in the string that is for that town.', function(){
      var count = "CL 124,CY 567,CL 345, CJ 456,CL 341','CL";
;
        assert.equal(countAllFromTown(count), 3);
    });


    it('It should return all the registration numbers in the string that is for that town.', function(){
      var count = "CL 124,CY 567,CL 345, CJ 456','CL";
;
        assert.equal(countAllFromTown(count), 2);
    });

});
