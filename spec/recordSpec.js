describe('record', () => {
  it('exists and has a history', () => {
      let record = new Record(Format);
      expect(record.history).toBeDefined();
  });
  it('has a balance method', () => {
      let record = new Record(Format);
      expect(record.balance).toBeDefined();
  });
  it('has a add to history method', () => {
      let record = new Record(Format);
      expect(record.add).toBeDefined();
  });
  it('entries can be made with add method', () => {
      let record = new Record(Format);
      record.add(1000);
      expect(record.balance()).toEqual(1000);
  });
  it('keeps a history with a date', () => {
      spyOn(Format, 'date').and.returnValue("23/01/2019");
      let record = new Record(Format);
      record.add(1000);
      record.add(-1000);
      expect(record.history).toEqual([
      {date: "23/01/2019", amount:1000, balance: 1000}, {date: "23/01/2019", amount: -1000, balance: 0 }]);
  });
  it('calls the Format class', () => {
      spyOn(Format, 'date');
      let record = new Record(Format);
      record.add(1000);
      expect(Format.date).toHaveBeenCalled();
    });
});
