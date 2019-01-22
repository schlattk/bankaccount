describe('format', () => {
  it('formats the date', () => {
      expect(Format.date).toBeDefined();
  });
  it('formats a date', () => {
      let today = new Date("2017-01-26");
      expect(Format.date(today)).toEqual("26/01/2017");
  });
  it('it has a statement method', () => {
      expect(Format.statement).toBeDefined();
  });
});
