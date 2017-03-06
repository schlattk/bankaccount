'use strict';

var Account = function(){
  this.balance = 0;
  this.record = [];
};

Account.prototype.deposit = function(money){
  this.balance += money;
  this.record.push({date : new Date(), value : money});
};

Account.prototype.withdraw = function(money){
  this.balance -= money;
  this.record.push({date : new Date(), value : -money});
};
