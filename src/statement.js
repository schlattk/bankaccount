"use strict";

var Statement = (function (){

  var formatDate = function(date){
    var format = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    return format;
  };

  var print = function(account){
    console.log("date    || credit || debit || balance");
    var length = account.record.length;
    for (var i=0;i<length;i++){
      var item = account.record[i];
      console.log(formatDate(item.date) + "|| " + item.credit + " || " + item.debit + " || " + item.balance);
    }
  };
  return {print:print};
})();
