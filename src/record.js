class Record {
  constructor () {
    this.history = [];
  };
  balance() {
    const amounts = this.history.map(item => item.amount);
    return amounts.reduce((a, b) => a + b, 0)
  };
  add(amount) {
    this.history.push({ date: Format.date(new Date()), amount: amount, balance: this.balance() + amount });
  };
};
