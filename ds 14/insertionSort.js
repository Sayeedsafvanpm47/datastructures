function insertionSort(arr)
{
          for(let i=1; i<arr.length; i++)
          {
                    let currentVal = arr[i]
                    for(var j = i-1; j>=0 && arr[j] > currentVal; j--)
                    {
                                   arr[j+1] = arr[j]
                            
                              console.log(arr)
                    }
                    arr[j+1] = currentVal

                
                    
          }
          return arr
}
console.log(insertionSort([1,4,5,6,2,3,7]));

// find the min element

// function minElement(arr)
// {
//      for(let i = 1; i<arr.length; i++)
//      {
//           let currVal = arr[i]
//           for(var j = i-1; j>=0 && arr[j] > currVal ; j--)
//           {
//                arr[j+1] = arr[j]
//           }
//           arr[j+1] = currVal
//      }
//      return arr[0]
     
// }
// console.log(minElement([4,5,6,7,2,3,4,6,9]));



// find max element

// function maxElement(arr)
// {
//      for(let i = 1; i<arr.length; i++)
//      {
//           let currVal = arr[i]
//           for(var j = i-1; j>=0 && arr[j] > currVal; j--)
//           {
//                arr[j+1] = arr[j]
//           }
//           arr[j+1] = currVal
//      }
//      return arr[arr.length - 1]
// }
// console.log(maxElement([2,3,4,1,5,7,8,3,7]));

 