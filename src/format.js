class Format {
  static date(today) {
    let day = today.getDate().toString();
    let month = (today.getMonth() + 1).toString();
    let year = today.getFullYear().toString();
    if (month.length === 1) {month = '0' + month};
    return day + '/' + month + '/' + year;
  };
  static statement(record){

    console.log("  date    || credit || debit || balance");
    record.history.forEach(function(item){
      let credit = '    ';
      let debit = '    ';
      item.amount >= 0 ? credit = item.amount : debit = Math.abs(item.amount);
      console.log(item.date + "||  " + credit + "  || " + debit + "  || " + item.balance);
      }
    );
  };
};
