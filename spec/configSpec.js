it( 'instantiates a ledger class', () => {
    let ledger = new Ledger();

    expect( ledger ).toEqual( jasmine.any( Ledger ) );
});
