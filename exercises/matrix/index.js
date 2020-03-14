// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// === solo attempt ===
function matrix(n) {
    let results = []
    let counter = 1
    let startRow = 0
    let endRow = n - 1
    let startCol = 0
    let endCol = n - 1

    for (let i = 0; i < n; i++) {
        results.push([])
    }

    while (startRow <= endRow && startCol <= endCol) {
        // for loop to create first row
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter
            counter++
        }

        startRow++

        // loop to create last column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++
        }
        endCol--

        // loop to create bottom row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter
            counter++
        }
        endRow--

        // loop to create first column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter
            counter++
        }
        startCol++
    }
    console.log(results)
    return results

}



module.exports = matrix;









// ===first attempt===
// function matrix(n) {
//     // make an array of arrays representing NxX
//     // n will have n rows, n columns
//     let startingRow;
//     let endingRow;
//     let startingColumn;
//     let endingColumn;
//     let counter = 1;

//     let results = []
//     function createRow() {
//         let row = []
//         for (i = 0; i < n; i++) {
//             row.push(" ")
//         }
//         results.push(row)
//     }
//     for (let j = 0; j < n; j++) {
//         createRow()
//     }
//     console.log(results, n)

//     while (startingColumn <= endingColumn && startingRow <= endingRow) {
//         for (startingColumn = 0; startingColumn < endingColumn.length; startingColumn++) {
//             let columnCount = results[startingColumn[i]]
//             counter++
//         }

//     }

// }

// matrix(3)

// ===Second attempt (w/ video)===
// function matrix(n) {
//     // make a empty results array
//     let results = [];

//     // for n steps push in a sub array
//     for (i = 0; i < n; i++) {
//         results.push([])
//     }

//     // create a counter variable THAT STARTS AT 1
//     let counter = 1

//     // keep track of start column, start row, ending column, ending row
//     // both ending variables will be n-1
//     let columnStart = 0;
//     let columnEnd = n - 1;
//     let rowStart = 0;
//     let rowEnd = n - 1;

//     // keep running code as long as the start column is <= end column and start row <= end row
//     while (columnStart <= columnEnd && rowStart <= rowEnd) {
//         // create a loop that assembles first row
//         for (let i = columnStart; i <= columnEnd; i++) {
//             results[rowStart][i] = counter
//             counter++
//         }
//         // increment start row after this loop
//         rowStart++

//         // create a loop that assembles the column on the right
//         for (let i = rowStart; i <= rowEnd; i++) {
//             results[i][columnEnd] = counter;
//             counter++
//         }
//         columnEnd--

//         // create a loop that assembles the last row
//         for (let i = columnEnd; i >= columnStart; i--) {
//             results[rowEnd][i] = counter;
//             counter++
//         }
//         rowEnd--

//         // create a loop that assembles the column on the left
//         for (let i = rowEnd; i >= rowStart; i--) {
//             results[i][columnStart] = counter
//             counter++
//         }
//         columnStart++
//     }

//     return results;

// }