// function sortArray(arr)
// {
//           for(let i=arr.length; i>0; i--)
//           {
                    
//                     for(let j=0; j<i-1; j++)
//                     {
                 
                  
//                               if(arr[j]>arr[j+1])
//                               {
//                                         let temp = arr[j]
//                                         arr[j] = arr[j+1]
//                                         arr[j+1] = temp 
//                               }
//                     }
               
                    
//           }
//           return arr 
// }
// console.log(sortArray([1,2,3,4,7,6,5]));
// optimized version 

// function sortArray(arr)
// {
//           for(let i=arr.length; i>0; i--)
//           {
//                     let noSwap = true
                    
//                     for(let j=0; j<i-1; j++)
//                     {
                 
                  
//                               if(arr[j]>arr[j+1])
//                               {
//                                         let temp = arr[j]
//                                         arr[j] = arr[j+1]
//                                         arr[j+1] = temp 
//                                         noSwap = false
//                               }
//                     }
               
//                     if(noSwap) break
                    
//           }
//           return arr 
// }
// console.log(sortArray([4,3,6,8,4,2,6,4]));


function smallest(arr,k)
{
        
          for(let i=arr.length; i>= 0; i--)
          {
                    let noSwap = true 
                    for(let j=0; j<arr.length;j++)
                    {
                              if(arr[j] > arr[j+1])
                              {
                                        let temp = arr[j]
                                        arr[j] = arr[j+1]
                                        arr[j+1] = temp 
                                        noSwap = false
                              }
                    }
                    if(noSwap) break 
          }
          return `${arr[k-1]} is the ${k}th smallest number`
}
console.log(smallest([2,3,4,5,1,6,8,43],2));