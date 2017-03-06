describe('account', function(){
    it('exists', function(){
      account = new Account();
      expect(account.balance).toBe(0);
    });
  });
