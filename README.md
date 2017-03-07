# bank
bank tech test
User Stories:

As a user I want to keep money in my bank account

As a user I want to deposit money in my bank account

As a user I want to withdraw money from  my bank account

As a user I want to be able to see a bank statement such as this:

date       || credit || debit   || balance
14/01/2012 ||        || 500.00  || 2500.00
13/01/2012 || 2000.00||         || 3000.00
10/01/2012 || 1000.00||         || 1000.00

Console instructions are as below:

myacc = new Account();
Object { balance: 0, record: Array[0] }
myacc.withdraw(1000)
undefined
myacc.withdraw(1000)
undefined
myacc.deposit(2000)
undefined
Statement.print(myacc);
date    || credit || debit || balance  
7/3/2017||        || 1000  || -1000  
7/3/2017||        || 1000  || -2000  
7/3/2017||  2000  ||       || 0
