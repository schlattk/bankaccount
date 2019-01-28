describe( 'ledger', () => {
  it( 'exists and has a history', () => {
      let ledger = new Ledger();
      expect( ledger.history ).toBeDefined();
  });
  it( 'has a balance method', () => {
      let ledger = new Ledger();
      expect( ledger.balance ).toBeDefined();
  });
  it( 'has a add to history method', () => {
      let ledger = new Ledger();
      expect( ledger.add ).toBeDefined();
  });
  it( 'entries can be made with add method', () => {
      let ledger = new Ledger( Format );
      ledger.add( 1000 );
      expect( ledger.balance() ).toEqual( 1000 );
  });
  it( 'keeps a history with a date', () => {
      spyOn( Format, 'date' ).and.returnValue( '23/01/2019' );
      let ledger = new Ledger( Format );
      ledger.add( 1000 );
      ledger.add( -1000 );
      expect( ledger.history ).toEqual( [
      { date: '23/01/2019', amount: 1000, balance: 1000 }, { date: '23/01/2019', amount: -1000, balance: 0 } ] );
  });
  it( 'calls the Format class', () => {
      spyOn( Format, 'date' );
      let ledger = new Ledger( Format );
      ledger.add( 1000 );
      expect( Format.date ).toHaveBeenCalled();
    });
});
