module.exports  = function(saleData){

  var departmentMap = {};
  var departmentName = ' ';
  var max = 0;
  for(var i=0; i<saleData.length; i++){

    var currentMap = saleData[i];

    if(departmentMap[currentMap.department] === undefined){
      departmentMap[currentMap.department] = 0;
    }

      departmentMap[currentMap.department] += currentMap.sales;
    }
  console.log(departmentMap);


for(var departments in departmentMap){
    if(departmentMap[departments] > max){
      max = departmentMap[departments];
      departmentName = departments;
      console.log(departmentName);
    }
  }
  return departmentName;
}
