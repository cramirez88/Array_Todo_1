// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// function pushFront(arr, val){
//     const original = [val, ...arr ]
  
//   return original
// }


// console.log(pushFront([1,2,3,4], 8))

// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

// function popFront(arr){
//   const [, ...rest] = arr
//   return rest
// }

// console.log(popFront([1,4,6]))


// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

// function insertAt(arr, idx, val){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] ===  arr[idx]){
//       arr[i] = val
//     }
//   }
//   return arr
// }

// console.log(insertAt([1,2,3], 1, 400))


// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

// function removeAt(arr, idx){
//   arr.splice(idx, 1)
//   return arr
// }

// console.log(removeAt([1,2,3,5,6], 3))
