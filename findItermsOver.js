function findItemsOver(item,amount){

  var num = [];
  for(var i = 0; i < item.length; i++){
  var theitem = item[i];
    if(theitem.qty > amount){
    num.push(theitem)
    }
  }
  return num;
};
