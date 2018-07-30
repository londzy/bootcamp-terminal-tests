let assert = require("assert");
let findItemsOver = require("../findItemsOver");



describe('findItemsOver', function(){

    it('The function should return products that have quantity higher than the threshold...', function(){
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

    it('The function should return products that have quantity higher than the threshold..', function(){



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
