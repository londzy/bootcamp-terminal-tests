let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe('totalPhoneBill', function(){

    it('this function should calculate the total phone bill for sms and calls made', function(){
      var count = 'call, sms, call, sms, sms';
;
        assert.equal(totalPhoneBill(count), 'R7.45');
    });


    it('this function should calculate the total phone bill for sms and calls made', function(){
      var count = 'sms, call, sms, sms';
;
        assert.equal(totalPhoneBill(count), 'R4.70');
    });


});
