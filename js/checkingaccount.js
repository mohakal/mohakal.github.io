"use strict";

class CheckingAccount extends Account {

    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    get overdraftLimit() {
        return this._overdraftLimit;
    }

    set overdraftLimit(overdraftLimit) {
        if (overdraftLimit < 0) {
            throw new RangeError("overdraft limit has to be greater than zero");
        }
        this._overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }

        if (amount > (this._balance + this._overdraftLimit)) {
            throw Error("Overdraft limit exceeded!");
        }

        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this._number + ": balance "
         + this._balance + ": overdratLimit " + this._overdraftLimit;
    }

    endOfMonth() {
        return this._balance < 0 ? "Warning, low balance " + this.toString() : "";
    }

}