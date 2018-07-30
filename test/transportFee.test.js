/*describe('transportFee', function(){

    it('that returns the right price based on the shift you are working', function(){
      var count = 'morning, afternoon, nightshift';
;
        assert.equal(transportFee(count), 'R30');
    });

});*/

let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee', function(){
    //var count = 'morning, afternoon, nightshift';

    it('it should return R20 for morning shift', function(){
      assert.equal(transportFee("morning"),"R20");
    });

    it('it should return R10 for afternoon shift.', function(){
        // this test will fail - can you fix it?
      assert.equal(transportFee("afternoon"),"R10");
    });

    it('it should return free for nightshift.', function(){
        // this test will fail - can you fix it?
        assert.equal(transportFee("nightshift"),"free");
    });

    it('should return unapplicacable if input is error.', function(){
        // this test will fail - can you fix it?
        assert.equal(transportFee("Monday"),"unapplicacable");
    });


});
