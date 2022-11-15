"use strict";

class SavingsAccount extends Account {

    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    get interest() {
        return this._interest;
    }

    set interest(interest) {
        if (interest < 0) {
            throw new RangeError("Interest has to be greater than zero");
        }
        this._interest = interest;
    }

    addInterest(interest) {
        if (interest < 0) {
            throw new RangeError("Interest has to be greater than zero");
        }
        super.deposit(super.getBalance() * interest / 100);
    }

    toString() {
        return "Savings Account " + super.getNumber() + ": balance " + super.getBalance() + ": interest " + this._interest;
    }

    endOfMonth() {
        this.addInterest(10);
        return "Interest added " + super.toString();
    }

}