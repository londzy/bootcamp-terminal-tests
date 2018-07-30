module.exports = function(regNum,regPlates){

if(regNum.endsWith(regPlates)){
  return true;
}
else {
  return false;
}
};
