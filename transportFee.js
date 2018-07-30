module.exports = function(fee){
  switch(fee){
    case "morning" :
        return "R20";
       break;
    case "afternoon" :
        return "R10";
       break;
    case "nightshift" :
        return "free";
       break;
     default :
        return "unapplicacable";

            }
};

//assert.equal(transportFee("morning"),"R20");
//assert.equal(transportFee("afternoon"),"R10");
//assert.equal(transportFee("nightshift"),"free");
//assert.equal(transportFee("Monday"),"unapplicacable");
