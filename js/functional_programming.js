"use strict";

// sum all the element in an array
let sum = (array) => array.reduce((x, y) => x + y, 0);
// multiply all the element in an array
let multiply = (array) => array.reduce((prevElem, currentElem) => prevElem * currentElem);
// reverse a string
let reverse = (string) => [...string].reverse().join("");
// filter all the words by a specific length
let filterLongWords = (words, i) => words.filter(word => word.length > i);