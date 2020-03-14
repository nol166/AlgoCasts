// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0

    while (index < array.length) {
        chunked.push(array.slice(index, index + size))
        index += size
    }

    return chunked


}

module.exports = chunk;





// ======== this is a bad example ============= //
// function chunk(array, size) {
//     // take the array and flatten it
//     let flatArr = array.reduce((array, val) => array.concat(val), [])
//     let chunked = []
//     for (let i = 0; i < flatArr.length; i++) {
//         let newArr = []
//         if (newArr.length === size || !newArr[chunked.length - 1]) {
//             newArr.push(flatArr[i])
//         } else {
//             chunked.push(newArr)
//         }
//     }
//     return chunked;

//     // get the length of the flattened array and divide it by size
//     // make sure that it is rounded

//     // itterate through each element in the flattened array for the flatted array length divided by its size. When the array has reached its max size, push it to the master array and create a new one
// }


// function chunk(array, size) {
//     const chunked = [];

//     for (const element of array) {
//         const last = chunked[chunked.length - 1]

//         if (!last || last.length === size) {
//             chunked.push([element])
//         } else {
//             last.push(element)
//         }
//     }
//     return chunked;

// }