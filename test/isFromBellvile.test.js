

let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellvile', function(){


    it('that returns false if a registration number is not for Bellville .', function(){
        assert.equal(isFromBellvile('NB 11234 GP'), false);
    });

    it('function that returns true if a registration number is for Bellville.', function(){
        // this test will fail - can you fix it?
        assert.equal(isFromBellvile('CY 11234 GP'),true);
    });

});
