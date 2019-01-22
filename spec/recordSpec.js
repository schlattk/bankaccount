describe('record', () => {
  it('exists and has a history', () => {
      let record = new Record();
      expect(record.history).toBeDefined();
  });
  it('has a balance method', () => {
      let record = new Record();
      expect(record.balance).toBeDefined();
  });
  it('has a add to history method', () => {
      let record = new Record();
      expect(record.add).toBeDefined();
  });
  it('entries can be made with add method', () => {
      let record = new Record();
      record.add(1000);
      expect(record.balance()).toEqual(1000);
  });
  it('keeps a history with a date', () => {
      spyOn(Format, 'date').and.returnValue("23/01/2019");
      let record = new Record();
      record.add(1000);
      record.add(-1000);
      expect(record.history).toEqual([
      {date: "23/01/2019", amount:1000, balance: 1000}, {date: "23/01/2019", amount: -1000, balance: 0 }]);
  });

});
