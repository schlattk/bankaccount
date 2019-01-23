it('instantiates a record class', () => {
    let account = new Account();
    expect(account.account).toEqual(jasmine.any(Record));
});
describe('account balance', () => {
  it('exists and has a balance method', () => {
      let account = new Account();
      expect(account.balance).toBeDefined();
  });
  it('calls balance on the record class with account.balance', () => {
      let account = new Account();
      spyOn(account.account, 'balance');
      account.withdraw(1000);
      expect(account.account.balance).toHaveBeenCalled();
  });
  it('deposits increase the balance', () => {
      let account = new Account();
      account.deposit(2000);
      expect(account.balance()).toEqual(2000);
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
describe('deposits and withdrawals can be made', () => {
  it('has a deposit method', () => {
      let account = new Account();
      expect(account.deposit).toBeDefined();
  });
  it('has a withdraw method', () => {
      let account = new Account();
      expect(account.withdraw).toBeDefined();
  });
  it('calls add on the record class with deposit', () => {
      let account = new Account();
      spyOn(account.account, 'add');
      account.deposit(2000);
      expect(account.account.add).toHaveBeenCalledWith(2000);
  });
  it('calls add on the record class with withdraw', () => {
      let account = new Account();
      spyOn(account.account, 'add');
      account.withdraw(1000);
      expect(account.account.add).toHaveBeenCalledWith(-1000);
  });
});
describe('it has a print method', () => {
    it('has a print method', () => {
      let account = new Account();
      expect(account.print).toBeDefined();
    });
    it('calls the format class', () => {
      let account = new Account();
      spyOn(Format, 'statement');
      account.print();
      expect(Format.statement).toHaveBeenCalled();
    });
});
