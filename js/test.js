"use strict";

/**
 * Account Testing
 */
describe("Account Testing", () => {

    describe("deposit", () => {
        let account = new Account(1);

        account.deposit(1000);

        it("add money into the account.", () => {
            assert.equal(1000, account.getBalance());
        });

        it("add money into the account, by negative value.", () => {
            assert.throws(() => account.deposit(-1000), RangeError);
        });
    });

    describe("withdrow", () => {
        let account = new Account(1);

        account.deposit(1000);

        account.withdraw(500);

        it("removes money from the account.", () => {
            assert.equal(500, account.getBalance());
        });
        
        it("removes money from the account, when amount is less than or equal to zero.", () => {
            assert.throws(() => account.withdraw(-1000), RangeError);
        });
        
        it("removes money from the account, when the account has insufficient funds (balance).", () => {
            assert.throws(() => account.withdraw(2000), Error);
        });
    });

    describe("getNumber", () => {
        let account = new Account(1);

        it("return the number of the account.", () => {
            assert.equal(1, account.getNumber());
        });
    });

    describe("getBalance", () => {
        let account = new Account(1);

        account.deposit(1000);

        it("return the balance of the account.", () => {
            assert.equal(1000, account.getBalance());
        });
    });

    describe("toString", () => {
        let account = new Account(1);

        account.deposit(1000);

        it("return a string format for the account.", () => {
            assert.equal("Account 1: balance 1000", account.toString());
        });
    });

    describe("endOfMonth", () => {
        let account = new Account(1);

        it("return a string format for the account.", () => {
            assert.equal("", account.endOfMonth());
        });
    });
});

/**
 * Savings Account Testing
 */
describe("Savings Account Testing", () => {

    describe("Interest", () => {
        let account = new SavingsAccount(1, 10);

        account.deposit(1000);

        it("get interest from the account.", () => {
            assert.equal(10, account.interest);
        });

        account.interest = 10;

        it("set interest to the account.", () => {
            assert.equal(10, account.interest);
        });
        
        it("set interest to the account, when interenst is less than to zero.", () => {
            assert.throws(() => account.interest = -10, RangeError);
        });

        account.addInterest(10);

        it("add interest to the account.", () => {
            assert.equal(1100, account.getBalance());
        });

        it("add interest to the account, when interenst is less than to zero.", () => {
            assert.throws(() => account.addInterest(-10), RangeError);
        });
    });

    describe("toString", () => {
        let account = new SavingsAccount(1, 10);

        account.deposit(1000);

        it("return a string format for the account.", () => {
            assert.equal("Savings Account 1: balance 1000: interest 10", account.toString());
        });
    });
});

/**
 * Checking Account Testing
 */
describe("Checking Account Testing", () => {

    var account;

    describe("Overdraft Limit", () => {
        it("get overdraft limit from the account.", () => {
            account = new CheckingAccount(1, 100);

            assert.equal(100, account.overdraftLimit);
        });

        it("set overdraft limit to the account.", () => {
            account = new CheckingAccount(1, 100);

            account.overdraftLimit = 200;

            assert.equal(200, account.overdraftLimit);
        });
        
        it("set overdraft limit to the account, when overdraft limit is less than to zero.", () => {
            account = new CheckingAccount(1, 100);

            assert.throws(() => account.overdraftLimit = -100, RangeError);
        });
    });

    describe("Withdrow", () => {

        it("removes money from the account.", () => {
            account = new CheckingAccount(1, 100);
            
            account.deposit(1000);
    
            account.withdraw(500);

            assert.equal(500, account.getBalance());
        });
        
        it("removes money from the account, when amount is less than or equal to zero.", () => {
            account = new CheckingAccount(1, 100);
            
            account.deposit(1000);
    
            account.withdraw(500);
            
            assert.throws(() => account.withdraw(-1000), RangeError);
        });
        
        it("removes money from the account, when the account has reach the overdraft limit.", () => {
            account = new CheckingAccount(1, 100);
            
            account.deposit(1000);
    
            account.withdraw(500);
            
            assert.throws(() => account.withdraw(700), Error);
        });
    });

    describe("toString", () => {
        it("return a string format for the account.", () => {
            account = new CheckingAccount(1, 100);
    
            account.deposit(1000);
    
            assert.equal("Checking Account 1: balance 1000: overdratLimit 100", account.toString());
        });
    });
});

/**
 * Bank Testing
 */
describe("Bank Testing", () => {

    var bank;

    describe("Add Different Accounts", () => {
        it("add Account to Bank.", () => {
            bank = new Bank();

            bank.addAccount();

            assert.equal(1, bank.accounts.length);
        });
        
        it("add SavingsAccount to Bank.", () => {
            bank = new Bank();

            bank.addSavingsAccount(10);

            assert.equal(1, bank.accounts.length);
        });

        it("add CheckingAccount to Bank.", () => {
            bank = new Bank();

            bank.addCheckingAccount(100);

            assert.equal(1, bank.accounts.length);
        });
    });

    describe("Remove Account", () => {
        it("remove Account from Bank.", () => {
            bank = new Bank();

            let accountNumber = bank.addAccount();

            bank.closeAccount(accountNumber);

            assert.equal(0, bank.accounts.length);
        });
    });

    describe("Account Report", () => {
        it("show accounts report for Bank.", () => {
            bank = new Bank();

            bank.addAccount();
            bank.addSavingsAccount(10);
            bank.addCheckingAccount(100);

            assert.equal("\nAccount 5: balance 0"
             + "\nSavings Account 6: balance 0: interest 10"
             + "\nChecking Account 7: balance 0: overdratLimit 100", bank.accountReport());
        });
    });

    describe("End of Month", () => {
        it("end of month summary for each Account from the Bank.", () => {
            bank = new Bank();

            let accountNumber;
            bank.addAccount();
            bank.accounts[0].deposit(1000);
            bank.addSavingsAccount(10);
            bank.accounts[1].deposit(1000);
            bank.addCheckingAccount(100);
            bank.accounts[2].deposit(1000);

            console.log(bank.endOfMonth());
        });
    });
});