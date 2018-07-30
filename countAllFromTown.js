module.exports = function(Reg,Location){
  var res = Reg.split(',');
  console.log(res);
  //console.log(Location);
 //console.log(Reg);
  var num = [];
  for (var i=0;i<res.length;i++){
    var Stellies = res[i];
  //console.log(numbers);
    if(Stellies.startsWith("CL")){
       //console.log(Stellies);
       num.push(Stellies);

    }


}; // Stellies.length = 3;
 console.log(num);
 console.log(num.length);
     return num.length;
};
