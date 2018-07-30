module.exports = function(aString){
 var phone = aString.split(", ");
  var cost = [];

  var sms = [];
  var call = [];

 for(var i=0;i<phone.length;i++){

   if(phone[i].startsWith("sms")){

     sms.push(phone[i]);

      }else{

     call.push(phone[i]);

      };

 }

  var total = (sms.length* 0.65) + (call.length*2.75);

   var finalTotal= total.toFixed(2)
  console.log(finalTotal);
   return "R"+finalTotal;

 };
