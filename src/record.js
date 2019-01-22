class Record {
  constructor (open = 0) {
    this.history = [open];
  };
  balance() {
    return this.history.reduce((a, b) => a + b, 0)
  };
  add(amount) {
    this.history.push(amount)
  };
};
