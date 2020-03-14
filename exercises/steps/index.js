// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


/// recursive solution
function steps(n, row = 0, stair = '') {
    // figure out the escape clause, or when the program should stop recursion
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair)
        steps(n, row + 1)
        return;
    }

    if (stair.length <= row) {
        stair += "#"
    } else {
        stair += " "
    }
    steps(n, row, stair)

}

module.exports = steps;

// function steps(n) {
//     if (n < 0) {
//         throw new Error("You need a positive int")
//     }
//     for (let rows = 0; rows < n; rows++) {
//         let stair = '';
//         for (let columns = 0; columns < n; columns++) {
//             if (columns <= rows) {
//                 stair += "#"
//             } else {
//                 stair += " "
//             }
//         }
//         console.log(stair)
//     }

// }