class Format {
  static date( today ) {
    let day = today.getDate().toString(),
    month = ( today.getMonth() + 1 ).toString(),
    year = today.getFullYear().toString();
    if ( day.length === 1 ) {
      day = '0' + month
    };
    if ( month.length === 1 ) {
       month = '0' + month
     };
    return day + '/' + month + '/' + year;
  };
  static statement( ledger ) {
    console.log( '  date    ||  credit   ||  debit   ||  balance' );
    ledger.forEach( function( item ) {
      let credit = '       ',
      debit = '       ',
      balance = item.balance.toFixed( 2 );
      if ( item.amount >= 0 ) {
        credit = item.amount.toFixed( 2 )
      } else {
        debit = Math.abs( item.amount ).toFixed( 2 )
      };
      console.log( item.date + '||  ' + credit + '  || ' + debit + '  || ' + balance );
      }
    );
  };
};
