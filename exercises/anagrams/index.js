// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
    let cleanString = str => str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
    console.log(cleanString(stringA), cleanString(stringB))
    if (cleanString(stringA) === cleanString(stringB)) {
        return true;
    } else {
        return false;
    }
}



module.exports = anagrams;

//   function anagrams(stringA, stringB) {
//     // check if cleaned data A is clean data B

//     const cleanString = (str) => {
//         return str
//             .trim()
//             .toLowerCase()
//             .split('')
//             .sort()
//             .join('');
//     }

//     if (cleanString(stringA) === cleanString(stringB)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function anagrams(stringA, stringB) {
//     let aMap = buildCharMap(stringA);
//     let bMap = buildCharMap(stringB);

//     if (Object.keys(aMap).length !== Object.keys(bMap).length) {
//         return false
//     }

//     for (const letter in aMap) {
//         if (aMap[letter] !== bMap[letter]) {
//             return false;
//         }

//     }
//     return true;
// }

// let buildCharMap = (str) => {
//     let newArr = []
//     for (const char of str.replace(/[^\w]/g).toLowerCase()) {
//         if (!newArr[char]) {
//             newArr[char] = 1
//         } else {
//             newArr[char]++
//         }
//     }
//     console.log(newArr)

//     return newArr;
// }