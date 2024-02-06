// function pivot(arr,start=0,end=arr.length-1)
// {
//           let pivot = arr[start]
//           let swapIndex = start 
//           function swap(arr,i,j)
//           {
//                     let temp = arr[i]
//                     arr[i] = arr[j]
//                     arr[j] = temp  
//           }
//           for(let i=start + 1; i<=end; i++)
//           {
//                     if(pivot > arr[i])
//                    { 
//                     swapIndex++ 
//                     swap(arr,swapIndex,i)   
//                    }        
//           }
//           swap(arr,start,swapIndex)
// return swapIndex
//           }

//           function quickSort(arr,left=0,right=arr.length-1)
//           {
//                     if(left < right){
//                     let pivotIndex = pivot(arr,left,right)
//                     // left 
//                     quickSort(arr,left,pivotIndex-1)
//                     quickSort(arr,pivotIndex+1,right)
//                     }
//                     return arr 
//           }


// console.log(quickSort([8,5,4,6,3,8,2])); 


// find the kth smallest element in an unsorted array 

// function pivot(arr, start = 0, end = arr.length - 1) {
//           let pivot = arr[start];
//           let swapIdx = start;
      
//           function swap(arr, i, j) {
//               let temp = arr[i];
//               arr[i] = arr[j];
//               arr[j] = temp;
//           }
      
//           for (let i = start + 1; i <= end; i++) {
//               if (pivot > arr[i]) {
//                   swapIdx++;
//                   swap(arr, swapIdx, i);
//               }
//           }
//           swap(arr, start, swapIdx);
//           return swapIdx;
//       }
      
//       function quickSort(arr, left = 0, right = arr.length - 1) {
//           if (left < right) {
//               let pivotIndex = pivot(arr, left, right);
//               quickSort(arr, left, pivotIndex - 1);
//               quickSort(arr, pivotIndex + 1, right);
//           }
//           return arr;
//       }
      
//       function findElement(arr, k) {
//           const sortedArr = quickSort(arr.slice())
      
//           if (k > 0 && k <= sortedArr.length) {
//               return `Sorted Array: [${sortedArr}], ${k}th smallest element: ${sortedArr[k - 1]}`;
//           }
//           return null;
//       }
      
//       console.log(findElement([4, 3, 2, 1, 67, 4, 6, 3], 2));
      

// quick sort using random pivot 

// function getRandomPivot(low,high)
// {
//           return Math.floor(Math.random() * (high-low + 1) + low)
// }
// function pivot(arr,low,high)
// {
//           let pivotIndex = getRandomPivot(low,high)
//           let pivot = arr[pivotIndex]
//           while (low <= high) {
//                     while (arr[low] < pivot) {
//                         low++;
//                     }
//                     while (arr[high] > pivot) {
//                         high--;
//                     }
            
//                     if (low <= high) {
//                         [arr[low], arr[high]] = [arr[high], arr[low]];
//                         low++;
//                         high--;
//                     }
//                 }
//                 return low;

// }
// function quickSort(arr, low = 0, high = arr.length - 1) {
//           if (low < high) {
//               let pivotIndex = pivot(arr, low, high);
      
//               quickSort(arr, low, pivotIndex - 1);
//               quickSort(arr, pivotIndex, high);
//           }
//           return arr;
//       }

//       const array = [9, 5, 7, 3, 1, 8, 2, 6, 4];
// console.log("Original array:", array);
// const sortedArray = quickSort(array);
// console.log("Sorted array:", sortedArray);