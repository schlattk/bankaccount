describe('format', () => {
  it('formats the date', () => {
      let format = new Format();
      expect(format.date).toBeDefined();
  });
  it('formats a date', () => {
      let format = new Format();
      let today = new Date("2017-01-26");
      expect(format.date(today)).toEqual("26/01/2017");
  });
  // it('can be set up with a balance', () => {
  //     let account = new Account(1000);
  //     expect(account.balance()).toEqual(1000);
  // });
});
