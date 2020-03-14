// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === n * 2 - 1) {
        console.log(level)
        pyramid(n, row + 1)
        return;
    }
    const midpoint = Math.floor((2 * n - 1) / 2)
    let thingToAdd;

    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        thingToAdd = "#"
    } else {
        thingToAdd = " "
    }

    pyramid(n, row, level + thingToAdd)


}


module.exports = pyramid;

// function pyramid(n) {
//     for (let row = 0; row < n; row++) {
//         const midpoint = Math.floor((2 * n - 1) / 2)
//         let level = '';
//         for (let column = 0; column < n * 2 - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += "#"
//             } else {
//                 level += ' '
//             }
//         }
//         console.log(level)
//     }
// }
