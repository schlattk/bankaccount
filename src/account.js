'use strict';

var Account = function(){
  this.balance = 0;
  this.record = [];
};

Account.prototype.deposit = function(money){
  this.balance += money;
  this.record.push({date : new Date(), credit : money, debit : "    ", balance : this.balance});
};

Account.prototype.withdraw = function(money){
  this.balance -= money;
  this.record.push({date : new Date(), credit : "    ", debit : money, balance : this.balance});
};
