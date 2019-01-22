describe('record', () => {
  it('exists and has a history', () => {
      let record = new Record();
      expect(record.history).toBeDefined();
  });
  it('has a balance getter', () => {
      let record = new Record();
      expect(record.balance).toBeDefined();
  });
  it('has a calcBalance method', () => {
      let record = new Record();
      expect(record.calcBalance).toBeDefined();
  });
});
