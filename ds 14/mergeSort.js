// function merge(arr1,arr2)
// {
//           let result = []
//           let i=0;
//           let j = 0;
//           while(i < arr1.length && j < arr2.length)
//           {
//                     if(arr2[j] > arr1[i])
//                     {
//                               result.push(arr1[i])
//                                i++  
//                     }else
//                     {
//                               result.push(arr2[j])
//                               j++ 
//                     }
//           }
//           while(i < arr1.length)
//           {
//                     result.push(arr1[i])
//                     i++
//           }
//           while(j <arr2.length)
//           {
//                     result.push(arr2[j])
//                     j++ 
//           }
//           return result 
// }
// function mergeSort(arr){
//            if(arr.length <= 1) return arr 
//           let mid = Math.ceil(arr.length/2)
//           let left = mergeSort(arr.slice(0,mid))
//           let right = mergeSort(arr.slice(mid))
//           return merge(left,right)
// }
// console.log(mergeSort([1,2,3,2,1,6,3,5,27,2,7]))

// inversion coubt 
// function countInversions(arr) {
//           let count = 0;
      
//           function merge(arr1, arr2) {
//               let result = [];
//               let i = 0;
//               let j = 0;
      
//               while (i < arr1.length && j < arr2.length) {
//                   if (arr1[i] <= arr2[j]) {
//                       result.push(arr1[i]);
//                       i++;
//                   } else {
//                       result.push(arr2[j]);
//                       j++;
//                       console.log('length' + arr1.length)
//                       console.log('i' + i)
                      
//                       count += arr1.length - i;
//                       console.log('count' + count)
//                   }
//               }
      
//               while (i < arr1.length) {
//                   result.push(arr1[i]);
//                   i++;
//               }
      
//               while (j < arr2.length) {
//                   result.push(arr2[j]);
//                   j++;
//               }
      
//               return result;
//           }
      
//           function mergeSort(arr) {
//               if (arr.length <= 1) return arr;
//               const mid = Math.floor(arr.length / 2);
//               let left = mergeSort(arr.slice(0, mid));
//               let right = mergeSort(arr.slice(mid));
//               return merge(left, right);
//           }
      
//           mergeSort(arr);
//           return count;
//       }
      
//       console.log(countInversions([3,1,2,5,4])); 


// 

// merge sorted arrays
 
// function merge (arr1,arr2)
// {
//           let result = []
//           let i = 0
//           let j = 0
          
//                     while(i < arr1.length && j < arr2.length){
//                     if(arr1[i] < arr2[j])
//                     {
//                               result.push(arr1[i])
//                               i++ 
//                     }else{
//                               result.push(arr2[j])
//                               j++ 
//                     }

          

//           }
//           while(i<arr1.length)
//           {
//                     result.push(arr1[i])
//                     i++
//           }
//           while(j<arr2.length)
//           {
//                     result.push(arr2[j])
//                     j++ 
//           }
// return result 
// }
// console.log(merge([3,4,5,6,7],[1,2]));

// median of two sorted arrays

function median(arr1,arr2)
{
          let result = []
          function merge(arr1,arr2)
          {
                   
                    let i = 0 
                    let j = 0
                    while( i < arr1.length && j < arr2.length)
                    {
                              if(arr1[i] < arr2[j])
                              {
                                        result.push(arr1[i])
                                        i++
                              }else
                              {
                                        result.push(arr2[j])
                                        j++ 
                              }
                    }
                    while(i<arr1.length)
                    {
                              result.push(arr1[i])
                              i++ 
                    }
                    while(j<arr2.length)
                    {
                              result.push(arr2[j])
                              j++ 
                    }
                    return result 
          }
          merge(arr1,arr2)
          const length = result.length;
          if (length % 2 === 0) {
   
              const mid = length / 2;
              return (result[mid - 1] + result[mid]) / 2;
          } else {
             
              return result[Math.floor(length / 2)];
          }
}
console.log(median([1,2,3,2,3],[5,6,3,8]));