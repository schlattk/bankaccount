class Account {
  constructor (open = 0) {
    this.account = new Record(open);
  };
  balance () {
    return this.account.balance();
  }
  deposit (amount) {
    this.account.add(amount);
  };
  withdraw (amount) {
    this.account.add(amount * -1);
  };
};
