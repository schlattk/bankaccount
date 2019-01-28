class Format {
  static date(today) {
    let day = today.getDate().toString();
    let month = (today.getMonth() + 1).toString();
    let year = today.getFullYear().toString();
    if (day.length === 1) {day = '0' + month};
    if (month.length === 1) {month = '0' + month};
    return day + '/' + month + '/' + year;
  };
  static statement(record){
    console.log("  date    ||  credit   ||  debit   ||  balance");
    record.forEach(function(item){
      let credit = '       ';
      let debit = '       ';
      if(item.amount >= 0) { credit = item.amount.toFixed(2) }
      else { debit = Math.abs(item.amount).toFixed(2) };
      console.log(item.date + "||  " + credit + "  || " + debit + "  || " + item.balance.toFixed(2));
      }
    );
  };
};
