class BankAccount {
  constructor( ledger, format ) {
    this.ledger = ledger;
    this.format = format;
  };
  balance() {
    return this.ledger.balance();
  };
  deposit( amount ) {
    this.ledger.add( amount );
  };
  withdraw( amount ) {
    this.ledger.add( amount * -1 );
  };
  print() {
    this.format.statement( this.ledger.history );
  };
};
