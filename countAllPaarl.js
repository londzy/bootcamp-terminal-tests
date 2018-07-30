module.exports = function(regNum){
  var res = regNum.split(', ');
 console.log(regNum);
  var num = [];
  for (var i=0;i<res.length;i++){
    var numbers = res[i];
  console.log(numbers);
    if(numbers.startsWith("CJ")){
       console.log(numbers);
       num.push(numbers);
      //break;
    }


};

  return num.length;
  //console.log(num);
};
