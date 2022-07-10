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