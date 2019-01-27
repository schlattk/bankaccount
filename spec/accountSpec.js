describe('bankAccount balance', () => {
  it('exists and has a balance method', () => {
      let record = new Record(Format);
      let bankAccount = new BankAccount(record, Format);
      expect(bankAccount.balance).toBeDefined();
  });
  it('calls balance on the record class with bankAccount.balance', () => {
      let record = new Record(Format);
      let bankAccount = new BankAccount(record, Format);
      spyOn(bankAccount.record, 'balance');
      bankAccount.withdraw(1000);
      expect(bankAccount.record.balance).toHaveBeenCalled();
  });
  it('deposits increase the balance', () => {
      let record = new Record(Format);
      let bankAccount = new BankAccount(record, Format);
      bankAccount.deposit(2000);
      expect(bankAccount.balance()).toEqual(2000);
  });
  it('withdrawals lower the balance', () => {
      let record = new Record(Format);
      let bankAccount = new BankAccount(record, Format);
      bankAccount.withdraw(2000);
      expect(bankAccount.balance()).toEqual(-2000);
  });
  it('calculates the correct balance', () => {
      let record = new Record(Format);
      let bankAccount = new BankAccount(record, Format);
      bankAccount.withdraw(2000);
      bankAccount.deposit(1000);
      bankAccount.withdraw(500);
      bankAccount.deposit(5000);
      expect(bankAccount.balance()).toEqual(3500);
  });
});
describe('deposits and withdrawals can be made', () => {
    let record = new Record(Format);
    const bankAccount = new BankAccount(record, Format);
  it('has a deposit method', () => {
      expect(bankAccount.deposit).toBeDefined();
  });
  it('has a withdraw method', () => {
      expect(bankAccount.withdraw).toBeDefined();
  });
  it('calls add on the record class with deposit', () => {
      spyOn(bankAccount.record, 'add');
      bankAccount.deposit(2000);
      expect(bankAccount.record.add).toHaveBeenCalledWith(2000);
  });
  it('calls add on the record class with withdraw', () => {
      spyOn(bankAccount.record, 'add');
      bankAccount.withdraw(1000);
      expect(bankAccount.record.add).toHaveBeenCalledWith(-1000);
  });
});
describe('it has a print method', () => {
    record = new Record(Format);
    const bankAccount = new BankAccount(record, Format);
    it('has a print method', () => {
      expect(bankAccount.print).toBeDefined();
    });
    it('calls the format class', () => {
      spyOn(Format, 'statement');
      bankAccount.print();
      expect(Format.statement).toHaveBeenCalled();
    });
});
