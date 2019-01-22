class Record {
  constructor (open = 0) {
    this.history = [open];
  };
  balance() {
    return this.history.reduce((a, b) => a + b, 0)
  };
  add(amount) {
    // let day = new Date();
    // let formatDate = day.get Date().toString() + '/' + (day.get Month() + 1).toString()
    //                   + '/' + day.getFullYear().toString();
    // this.history.push({date: formatDate, amount: amount})
    this.history.push(amount)
  };
};
