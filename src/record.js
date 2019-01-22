class Record {
  constructor () {
    this.history = [];
  };
  get balance() {
    return this.calcBalance()
  };

  calcBalance() {
    this.history.reduce((a, b) => a + b, 0)
  };

};
