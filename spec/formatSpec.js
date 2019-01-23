describe('format', () => {
  it('formats the date', () => {
      expect(Format.date).toBeDefined();
  });
  it('formats a date in a specific way', () => {
      let today = new Date("2017-01-26");
      expect(Format.date(today)).toEqual("26/01/2017");
  });
  it('it has a statement method', () => {
      expect(Format.statement).toBeDefined();
  });
  it('creates a statement with three lines', () => {
    spyOn(console, 'log');
    let record  = [{date: "23/01/2019", amount:1000, balance: 1000},
                   {date: "23/01/2019", amount: -1000, balance: 0 }];
      Format.statement(record);
      expect(console.log.calls.count()).toEqual(3);
      expect(console.log.calls.first().args).toEqual([ '  date    ||  credit   ||  debit   ||  balance' ]);
      expect(console.log.calls.all()[1].args).toEqual([ '23/01/2019||  1000.00  ||          || 1000.00' ]);
      expect(console.log.calls.all()[2].args).toEqual([ '23/01/2019||           || 1000.00  || 0.00' ]);
    });
});
