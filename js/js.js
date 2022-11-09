function max(x, y) {
    if (x > y) return x;
    else return y;
}

function maxOfThree(x, y, z) {
    max = x;
    if (y > max) max = y;
    if (z > max) max = z;
}

function isVowel(char) {
    char = char.toLowerCase();

    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
        return true;
     else
        return false;
}

function sum(numbers) {
    var result = 0;

    for(var i = 0; i < numbers.length; i++)
        result += numbers[i];

    return result;
}

function multiply(numbers) {
    var result = 1;

    for(var i = 0; i < numbers.length; i++)
        result *= numbers[i];

    return result;
}

function reverse(string) {
    var reverseString = "";

    for(var i = string.length - 1; i >= 0; i--)
        reverseString += string[i];

    return reverseString;
}

function findLongestWord(words) {
    var maxLength = 0;

    for(var i = 0; i < words.length; i++)
        if (words[i].length > maxLength)
            maxLength = words[i].length;

    return maxLength;
}

function findLongestWord(words) {
    var maxLength = 0;

    for(var i = 0; i < words.length; i++)
        if (words[i].length > maxLength)
            maxLength = words[i].length;

    return maxLength;
}

function filterLongWords(words, length) {
    var longWords = [];

    for(var i = 0; i < words.length; i++)
        if (words[i].length > length)
            longWords.push(words[i]);

    return longWords;
}

function multiply10(numbers) {
    return numbers.map(function(elem, i, array) { return elem * 10; });
}

function equal3(numbers) {
    return numbers.filter(function(elem, i, array) { return elem === 3; });
}

function product(numbers) {
    return numbers.reduce(function(prevValue, elem, i, array) { return prevValue * elem; });
}

/*
    Test
*/

console.log("Expected output of max(4, 5) is 5 "
            + myFunctionTest(5, function(){ return max(4, 5) }));


console.log("Expected output of max(4, 15, 9) is 15 "
            + myFunctionTest(15, function(){ return max(4, 15, 9) }));


console.log("Expected output of isVowel(\"A\") is true "
            + myFunctionTest(true, function(){ return isVowel("A") }));
console.log("Expected output of isVowel(\"B\") is false "
            + myFunctionTest(false, function(){ return isVowel("B") }));

console.log("Expected output of sum([1, 3, 5]) is 9 "
            + myFunctionTest(9, function(){ return sum([1, 3, 5]) }));
console.log("Expected output of multiply([1, 3, 5]) is 15 "
            + myFunctionTest(15, function(){ return multiply([1, 3, 5]) }));

console.log("Expected output of reverse(\"txet elpmis\") is simple text "
            + myFunctionTest("simple text", function(){ return reverse("txet elpmis") }));

console.log("Expected output of findLongestWord([\"Hi\", \"Hello\", \"What's app\"]) is 10 "
            + myFunctionTest(10, function(){ return findLongestWord(["Hi", "Hello", "What's app"]) }));

console.log("Expected output of filterLongWords([\"Hi\", \"Hello\", \"What's app\"], 3) is [\"Hello\", \"What's app\"] "
            + myFunctionTest(["Hello", "What's app"], function(){ return filterLongWords(["Hi", "Hello", "What's app"], 3) }));

console.log("Expected output of multiply10([1,3,5,3,3]) is [10,30,50,30,30] "
            + myFunctionTest([10,30,50,30,30], function(){ return multiply10([1,3,5,3,3]) }));

console.log("Expected output of equal3([1,3,5,3,3]) is [3, 3, 3] "
            + myFunctionTest([3, 3, 3], function(){ return equal3([1,3,5,3,3]) }));

console.log("Expected output of product([1,3,5,3,3]) is 135 "
            + myFunctionTest(135, function(){ return product([1,3,5,3,3]) }));

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
    return elem * 10;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
    return elem === 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
});
document.writeln(d+ "<br/>");

function myFunctionTest(expectedResult, func) {
    var msg;
    
    if (Array.isArray(expectedResult)) {
        if (JSON.stringify(expectedResult) === JSON.stringify(func()))
            msg = "TEST SUCCEEDED.";
        else
            msg = "TEST FAILED";
        
        console.assert(JSON.stringify(expectedResult) === JSON.stringify(func()), "TEST FAILED.");
    } else {
        if (expectedResult === func())
            msg = "TEST SUCCEEDED.";
        else
            msg = "TEST FAILED";
        
        console.assert(expectedResult === func(), "TEST FAILED.");
    }

    return msg;
}