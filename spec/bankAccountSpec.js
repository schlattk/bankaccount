describe( 'bankAccount balance', () => {

  it( 'exists and has a balance method', () => {
      let bankAccount = new BankAccount();

      expect( bankAccount.balance ).toBeDefined();
  });

  it( 'calls balance on the ledger', () => {
      let ledger = new Ledger( Format ),
      bankAccount = new BankAccount( ledger, Format );
      spyOn( bankAccount.ledger, 'balance' );
      bankAccount.withdraw( 1000 );

      expect( bankAccount.ledger.balance ).toHaveBeenCalled();
  });

  it( 'deposits increase the balance', () => {
      let ledger = new Ledger( Format ),
      bankAccount = new BankAccount( ledger, Format );
      bankAccount.deposit( 2000 );

      expect(bankAccount.balance()).toEqual( 2000 );
  });

  it( 'withdrawals lower the balance', () => {
      let ledger = new Ledger( Format ),
      bankAccount = new BankAccount( ledger, Format );
      bankAccount.withdraw( 2000 );

      expect( bankAccount.balance() ).toEqual( -2000 );
  });

  it( 'calculates the correct balance', () => {
      let ledger = new Ledger( Format ),
      bankAccount = new BankAccount( ledger, Format );
      bankAccount.withdraw( 2000 );
      bankAccount.deposit( 1000 );
      bankAccount.withdraw( 500 );
      bankAccount.deposit( 5000 );

      expect( bankAccount.balance() ).toEqual( 3500 );
  });
});

describe( 'deposits and withdrawals can be made', () => {
    let ledger = new Ledger( Format ),
    bankAccount = new BankAccount( ledger, Format );

  it( 'has a deposit method', () => {
      expect( bankAccount.deposit ).toBeDefined();
  });

  it( 'has a withdraw method', () => {
      expect( bankAccount.withdraw ).toBeDefined();
  });

  it( 'calls add on the ledger with deposit', () => {
      spyOn( bankAccount.ledger, 'add' );
      bankAccount.deposit( 2000 );

      expect( bankAccount.ledger.add ).toHaveBeenCalledWith( 2000 );
  });

  it( 'calls add on the ledger with withdraw', () => {
      spyOn( bankAccount.ledger, 'add' );
      bankAccount.withdraw( 1000 );

      expect( bankAccount.ledger.add ).toHaveBeenCalledWith( -1000 );
  });
});

describe( 'it has a print method', () => {
    let ledger = new Ledger( Format ),
    bankAccount = new BankAccount( ledger, Format );

    it( 'has a print method', () => {
    expect( bankAccount.print ).toBeDefined();
    });

    it( 'calls the format class', () => {
      spyOn( bankAccount.format, 'statement' );
      bankAccount.print();

      expect( bankAccount.format.statement ).toHaveBeenCalled();
    });
});
