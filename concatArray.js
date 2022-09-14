const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if(array1 == null && array1 == undefined && array2 == null && array2 == undefined) {
      console.log(undefined)
      return undefined
  } else if(array1 && array2 == []) {
      console.log(![])
      return ![]
  } else if(array1 == null || undefined && array2 == true) {
      console.log(array2)
      return array2
  } else if(array2 == null || undefined && array1 == true) {
      console.log(array1)
      return array1
  } else {
      let concatArrays = array1.concat(array2)
      console.log(concatArrays)
      return concatArrays
  } 
}
module.exports = concatArray
// concatArray([5, 10, 15], [2, 4, 6, 7])
// concatArray([ ], ['item1', 'item2', 'item3'])
// concatArray([10, 6, 5], []) 
// concatArray([], []) 
// concatArray(undefined, [2, 4, 6, 7])
// concatArray([2, 4, 6, 7], null) 
// concatArray(undefined, undefined) 
// concatArray(null, undefined) 
// concatArray(undefined, null) 
// concatArray(null, null) 