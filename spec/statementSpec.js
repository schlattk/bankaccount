describe('statement', function(){
    it('has a print function', function(){
      expect(Statement.print).toBeDefined();
    });
    it("should test for console.log to be triggered", function () {
      console.log = jasmine.createSpy("log");
      var myacc = new Account();
      Statement.print(myacc);
      expect(console.log).toHaveBeenCalledWith("date    || credit || debit || balance");
    });
});
