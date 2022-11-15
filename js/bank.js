"use strict";

class Bank {

    static nextNumber = 0;

    constructor() {
        this._accounts = [];
    }

    get accounts() {
        return this._accounts;
    }

    addAccount() {
        this.accounts.push(new Account(++Bank.nextNumber));

        return Bank.nextNumber;
    }

    addSavingsAccount(interest) {
        this.accounts.push(new SavingsAccount(++Bank.nextNumber, interest));

        return Bank.nextNumber;
    }

    addCheckingAccount(overdraftLimit) {
        this.accounts.push(new CheckingAccount(++Bank.nextNumber, overdraftLimit));

        return Bank.nextNumber;
    }

    closeAccount(accountNumber) {
        this._accounts = this.accounts.filter(a => a.getNumber() !== accountNumber);
    }

    accountReport() {
        return this.accounts.reduce(
            (prevElem, currentElem) => prevElem.toString() + "\n" + currentElem.toString(), ""
        );
    }

    endOfMonth() {
        return this.accounts.map(a => a.endOfMonth())
                            .reduce((prevElem, currentElem) => prevElem + "\n" + currentElem, "");
    }

}