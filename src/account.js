class Account {
  constructor () {
    this.account = new Record();
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
  print (account){
    Format.statement(this.account);
  };
};
