describe('account balance', () => {
  it('exists and has a balance', () => {
      let account = new Account();
      expect(account.balance).toBeDefined();
  });
});
describe('deposits and withdrawals can be made', () => {
  it('has a deposit method', () => {
      let account = new Account();
      expect(account.deposit).toBeDefined();
  });
  it('deposits increase the balance', () => {
      let account = new Account();
      account.deposit(2000);
      expect(account.balance()).toEqual(2000);
  });
  it('has a withdraw method', () => {
      let account = new Account();
      expect(account.withdraw).toBeDefined();
  });
  it('withdrawals lower the balance', () => {
      let account = new Account();
      account.withdraw(2000);
      expect(account.balance()).toEqual(-2000);
  });
  it('calculates the correct balance', () => {
      let account = new Account();
      account.withdraw(2000);
      account.deposit(1000);
      account.withdraw(500);
      account.deposit(5000);
      expect(account.balance()).toEqual(3500);
  });
});
  describe('it has a print method', () => {
    it('has a print method', () => {
      let account = new Account();
      expect(account.print).toBeDefined();
    });
    it('logs to the console', () => {
      let account = new Account();
      spyOn(console, 'log');
      account.print();
      expect(console.log).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith("  date    ||  credit   ||  debit   ||  balance");
    });
});
