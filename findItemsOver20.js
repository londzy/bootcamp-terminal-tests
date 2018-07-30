module.exports = function(item){
  // console.log(item);
  var num = [];
  for(var i = 0; i < item.length; i++){
  var theitem = item[i];
    if(theitem.qty > 20){
    num.push(theitem)
      console.log(num);
    }
  }
  return num;
};
