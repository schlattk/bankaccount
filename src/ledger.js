class Ledger {
  constructor (format) {
    this.history = [];
    this.format = format;
  };
  balance() {
    const amounts = this.history.map(item => item.amount);
    return amounts.reduce((a, b) => a + b, 0);
  };
  add(amount) {
    let balance = this.balance() + amount;
    let date = this.format.date(new Date());
    this.history.push({ date: date, amount: amount, balance: balance });
  };
};
