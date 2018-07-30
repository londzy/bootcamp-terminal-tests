let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck', function(){


    it('should check if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('GP'), false);
    });

    it('should check if a registration number is not for GP, L, EC, MP registration plates.', function(){
        // this test will fail - can you fix it?
        assert.equal(regCheck('EC'),false);
    });

});
