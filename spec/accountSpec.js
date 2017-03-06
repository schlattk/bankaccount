describe('account', function(){
  account = new Account();
  it('exists and has a balance', function(){
      expect(account.balance).toBeDefined();
  });
  it('has a record of deposits and withdrawals', function(){
      expect(account.record).toEqual(jasmine.any(Array));
  });
});

describe('deposit money', function(){
    it('has the possibility of adding money', function(){
    expect(account.deposit).toBeDefined();
  });
    it('increases the balance when money is added', function(){
    account.deposit(1000);
    expect(account.balance).toBe(1000);
  });
    it('adds the deposit and the time in the record', function(){
    expect(account.record[0].date).toEqual(jasmine.any(Date));
    });
});

describe('withdraw money', function(){
    it('has the possibility of withdrawing money', function(){
    expect(account.withdraw).toBeDefined();
  });
    it('reduces the balance when money is withdrawn', function(){
    account.withdraw(1000);
    expect(account.balance).toBe(0);
  });
    it('adds the withdrawal and the time in the record', function(){
    expect(account.record[1].date).toEqual(jasmine.any(Date));
    });
});
