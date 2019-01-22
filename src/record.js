class Record {
  constructor () {
    this.history = [];
  };
  balance() {
    const amounts = this.history.map(item => item.amount);
    return amounts.reduce((a, b) => a + b, 0)
  };
  add(amount) {
    let balance = this.balance() + amount;
    let date = Format.date(new Date());
    this.history.push({ date: date, amount: amount, balance: balance });
  };
};
