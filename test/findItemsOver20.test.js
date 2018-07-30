let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");


describe('findItemsOver20', function(){

    it('should return all the products that have a quantity higher than 20.', function(){
  var itemList = [
   {name : 'apples', qty : 10},
   {name : 'pears', qty : 37},
   {name : 'bananas', qty : 27},
   {name : 'apples', qty : 3},
];


        assert.deepEqual(findItemsOver20(itemList),[
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27}]);
    });

    it('should return all the products that have a quantity higher than 20.', function(){



        assert.deepEqual(findItemsOver20([
         {name : 'apples', qty : 10},
         {name : 'pears', qty : 23},
         {name : 'bananas', qty : 56},
         {name : 'apples', qty : 3},
      ]),[
          {name : 'pears', qty : 23},
          {name : 'bananas', qty : 56}]);
    });


});
