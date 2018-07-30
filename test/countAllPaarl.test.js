

let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl', function(){

    it('function that count all registration numbers from Paarl ', function(){
    //  var count = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
;
      //  assert.deepEqual(countAllPaarl(count),[CJ 678 543,CJ 67890]);
  //  });
  assert.equal(countAllPaarl('CJ 345 123', 'CJ 2345', 'CL 123-546', 'CK 345' , 'CJ 123') , 1 )
assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123') , 2 )
});


it('function that count all registration numbers from Paarl ', function(){
//  var count = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
;
  
assert.equal(countAllPaarl('CJ 345 123', 'CJ 2345', 'CL 123-546', 'CK 345' , 'CJ 123') , 1 )
assert.equal(countAllPaarl(', CK 345') , 0 )
});

});
