"use strict";

describe("Arithmetic Operations", () => {
    describe("sum", () => {
        it("sum takes an array of numbers and returns the sum of all elements in the array.", () => {
            assert.equal(15, sum([1, 2, 3, 4, 5]));
        });
    });
    describe("multiply", () => {
        it("multiply takes an array of numbers and returns the product of all elements in the array.", () => {
            assert.equal(120, multiply([1, 2, 3, 4, 5]));
        });
    });
});
describe("Reverse", () => {
    it("reverse takes in a string and returns its reversal.", () => {
        assert.equal("javascript", reverse("tpircsavaj"));
    });
});
describe("FilterLongWords", () => {
    it("filterLongWords takes an array of words and an integer i and returns the array of words that are longer than i.", () => {
        expect(["Threes", "Configure"]).to.eql(filterLongWords(["One", "Threes", "Configure", "xylem"], 5));
    });
});