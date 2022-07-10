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