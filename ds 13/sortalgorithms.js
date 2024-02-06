// bubble sort
// function bubbleSort(arr)
// {
//           let swapped
// do{
//           swapped = false
// for(let i=0; i<arr.length - 1; i++)
// {
//    if(arr[i] > arr[i+1])
//    {
//           let temp = arr[i]
//           arr[i] = arr[i+1]
//           arr[i+1] = temp
// swapped = true   
// }
// }

// }while(swapped)
// }

// const arr = [2,19,4,6,3,7]
// bubbleSort(arr)
// console.log(arr)4
// time complexity : O(n^2) - quadratic

// insertion sort 

// function insertionSort(arr)
// {
//           for(let i=1; i<arr.length; i++)
//           {
//                     let numberToInsert = arr[i]
//                     let j = i-1
//                     while( j>=0 && arr[j] > numberToInsert)
//                     {
//                               arr[j+1] = arr[j]
//                               j = j-1
//                     }
//                     arr[j+1] = numberToInsert
//           }
// }
// const arr = [ 8,20,-2,4,-6]
// insertionSort(arr)
// console.log(arr)

//time complexity - O(n^2) since it is nested loop