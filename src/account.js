'use strict';

class Account {
  constructor (balance = 0) {
    this.balance = balance;
  };
  deposit (amount) {
    this.balance += amount;
  };
  withdraw (amount) {
    this.balance -= amount;
  };
};
