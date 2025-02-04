"use strict";
// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function countVowels(word) {
    let count = 0;
    const splitWord = word.split('');
    splitWord.forEach(letter => {
        letter === "a" ? count++ : count;
        letter === "e" ? count++ : count;
        letter === "i" ? count++ : count;
        letter === "o" ? count++ : count;
        letter === "u" ? count++ : count;
    });
    return count;
}
// Expected output:
console.log(countVowels("hellooo")); // 2
console.log(countVowels("typescript")); // 2
