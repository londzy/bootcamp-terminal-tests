module.exports = function(regNum){
  switch(regNum){
    case "CY 324":
      return "Bellville";
     break;
    case "CJ 123":
      return "Paarl";
     break;
    case "CA 987":
      return "Cape Town";
     break;
    default :
       return "Some other place!";

         }
};

/*assert.equal(fromWhere("CY 324"),"Bellville");
assert.equal(fromWhere("CJ 123"),"Paarl");
assert.equal(fromWhere("CA 987"),"Cape Town");
assert.equal(fromWhere("NUZ 476"),"Some other place!");*/
