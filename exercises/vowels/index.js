// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"]

    for (const letter of str.toLowerCase()) {
        vowels.forEach(vowel => {
            if (letter.includes(vowel)) {
                count++
            }
        });
    }


    return count
}

module.exports = vowels;

// function vowels(str) {
//     let splitStr = str.toLowerCase().split("")
//     let vowels = ["a", "e", "i", "o", "u"]
//     let count = 0;
//     // itterate through each letter in the str check it against each letter in vowels
//     for (let i = 0; i < splitStr.length; i++) {
//         let currentStrChar = splitStr[i]
//         for (let j = 0; j < vowels.length; j++) {
//             let currentVowel = vowels[j]
//             if (currentStrChar === currentVowel) {
//                 count++
//             }
//         }
//     };

//     return count
// }

// function vowels(str) {
//     let count = 0;
//     let vowels = ["a", "e", "i", "o", "u"]

//     for (const letter of str.toLowerCase()) {
//         vowels.forEach(vowel => {
//             if (letter.includes(vowel)) {
//                 count++
//             }
//         });
//     }


//     return count
// }