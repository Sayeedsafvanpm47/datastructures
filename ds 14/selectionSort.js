function selectionSort(arr)
{
          for(let i=0; i<arr.length; i++)
          {  let lowest = i 
                    for(let j=i+1; j<arr.length; j++)
                    {
                              console.log(i,j)
                            
                              if(arr[j] < arr[lowest])
                              {
                                        lowest = j 
                              }
                             
                    }
                    if(lowest !== i)
                    {
                              let temp = arr[i]
                              arr[i] = arr[lowest]
                              arr[lowest] = temp 
                    }
          }
          return arr 
}
console.log(selectionSort([1,2,3,4,7,6,5]));

// function findMin(arr) {
//           if (arr.length === 0) return; 
          
//           let minIndex = 0;
//           for (let i = 1; i < arr.length; i++) {
//               if (arr[i] < arr[minIndex]) {
//                   minIndex = i;
//               }
//           }
//           return arr[minIndex];
//       }
      
//       function findMax(arr) {
//           if (arr.length === 0) return; 
          
//           let maxIndex = 0;
//           for (let i = 1; i < arr.length; i++) {
//               if (arr[i] > arr[maxIndex]) {
//                   maxIndex = i;
//               }
//           }
//           return arr[maxIndex];
//       }
      
   
//       const array = [4, 3, 8, 1, 5, 9, 2];
//       const minimum = findMin(array);
//       const maximum = findMax(array);
      
//       console.log("Array:", array);
//       console.log("Minimum element:", minimum); 
//       console.log("Maximum element:", maximum); 


// function selectionSort(arr) {
//           let odd = [];
//           let even = [];
      
//           for (let i = 0; i < arr.length; i++) {
//               let lowest = i;
//               for (let j = i + 1; j < arr.length; j++) {
//                   if (arr[j] < arr[lowest]) {
//                       lowest = j;
//                   }
//               }
      
//               if (lowest !== i) {
//                   let temp = arr[i];
//                   arr[i] = arr[lowest];
//                   arr[lowest] = temp;
      
//                   if (arr[lowest] % 2 === 0) {
//                       even.push(arr[lowest]);
//                   } else {
//                       odd.push(arr[lowest]);
//                   }
//               }
//           }
      
//           return `This is the sorted array: ${arr}\nThis is odd array: ${odd}\nThis is even array: ${even}`;
//       }
      
//       console.log(selectionSort([4, 3, 5, 6, 21, 6, 2, 4, 6]));
      
      