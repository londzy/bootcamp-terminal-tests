let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday' , function(){
    it('should return true because friday is actually a weekday.' , function(){
assert.equal(isWeekday('friday'), true);

  });

    it('should return false for Saturday is not a weekday. .' , function(){
assert.equal(isWeekday('Saturday'), false);
  });
});
