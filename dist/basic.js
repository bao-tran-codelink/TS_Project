"use strict";
function combines(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var printRes = true;
var resultPhrase = "Result is: ";
combines(number1, number2, printRes, resultPhrase);
//# sourceMappingURL=basic.js.map