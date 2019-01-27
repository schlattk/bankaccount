class BankAccount {
  constructor (record, format) {
    this.record = record;
    this.format = format;
  };
  balance () {
    return this.record.balance();
  }
  deposit (amount) {
    this.record.add(amount);
  };
  withdraw (amount) {
    this.record.add(amount * -1);
  };
  print (){
    this.format.statement(this.record.history);
  };
};
