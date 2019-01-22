describe('account balance', () => {
  it('exists and has a balance', () => {
      let account = new Account();
      expect(account.balance).toBeDefined();
  });
  it('has a default balance', () => {
      let account = new Account();
      expect(account.balance).toEqual(0);
  });
  it('can be set up with a balance', () => {
      let account = new Account(1000);
      expect(account.balance).toEqual(1000);
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
      expect(account.balance).toEqual(2000);
  });
  it('has a withdraw method', () => {
      let account = new Account();
      expect(account.withdraw).toBeDefined();
  });
  it('withdrawals lower the balance', () => {
      let account = new Account();
      account.withdraw(2000);
      expect(account.balance).toEqual(-2000);
  });


});
