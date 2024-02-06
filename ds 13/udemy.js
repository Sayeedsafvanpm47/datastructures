// function same(arr1,arr2)
// {
//           if(arr1.length !== arr2.length)
//           {
//                     return false
//           }
//           for(let i=0; i<arr1.length; i++)
//           {
//                     let checkNum = arr2.indexOf(arr1[i] ** 2)
//                     if(checkNum == -1)
//                     {
//                               return false
//                     }
//                     arr2.splice(checkNum,1)
               
                    
//           }
//           return true
// }
// arr1 = [1,2,3,2]
// arr2 = [9,1,4,3]
// console.log(same(arr1,arr2))

// best approach for the above

// function same(arr1,arr2)
// {
//           if(arr1.length !== arr2.length)
//           {
//                     return false 
//           }
//           let countFrequency1 = {}
//           let countFrequency2 = {}
//           for(let val of arr1)
//           {
//                     countFrequency1[val] = (countFrequency1[val] || 0) + 1

//           }
//           for(let val of arr2)
//           {
//                     countFrequency2[val] = (countFrequency2[val] || 0) + 1
//           }
//           for(let key in countFrequency1)
//           {
//                     if(!(key ** 2 in countFrequency2))
//                     {
//                               return false

//                     }
//                     if(countFrequency2[key ** 2] !== countFrequency1[key])
//                     {
//                               return false
//                     }
//           }
//           return true 
// }

// console.log(same([1,2,3,4],[1,4,9,16]))


// check anagram

// function checkString(str1,str2)
// {
//           if(str1.length !== str2.length)
//           {
//                     return false
//           }
//           let freq1 = {}, freq2 = {}
//           for(let char of str1)
//           {
//                     freq1[char] = (freq1[char] || 0) + 1
//           }
//           for(let char of str2)
//           {
//                     freq2[char] = (freq2[char] || 0) + 1
//           }
//           for(let key in freq1 )
//           {
//                     if(!(key in freq2))
//                     {
//                               return false
//                     }
//                     if(freq1[key] !== freq2[key])
//                     {
//                               return false 
//                     }
//           }
//           return true
          
// }

// console.log(checkString('hello','holle'))


// check for the sum of pairs adding up to zero using this multiple pointers pattern 

// function checkZeroSum(arr)
// {
//           let left = 0
//           let right = arr.length - 1
//           while(left < right)
//           {
//                     let sum = arr[left] + arr[right] 
//                     if(sum === 0)
//                     {
//                               return [arr[left],arr[right]]
//                     }
//                     if(sum < 0)
//                     {
//                               left++
//                     }
//                     else if(sum > 0)
//                     {
//                               right--
//                     }

//           }
// }
// console.log(checkZeroSum([-3,-2,-1,0,1,2,3]))

// check the count of unique using the multiple pointers approach 

// function checkArray(arr) {
//           let left = 0;
//           let right = 1;
//           let count = 0;
      
//           while (right < arr.length) {
//                     if (arr[left] !== arr[right]) {
//                         count++;
//                         left = right;
//                     }
//                     right++;
//                 }
            
      
//                 if (left === arr.length - 1) {
//                     count++;
//                 }
            
//                 return count;
//             }
      
//       console.log(checkArray([1,2,3,3,3,3,3,6])); 

// another approach for the above

// function checkArray(arr)
// {
//           let i = 0
//           for(let j=1; j<arr.length; j++)
//           {
//                     if(arr[i] !== arr[j])
//                     {
//                               i++
//                               arr[i] = arr[j]


//                     }

//           }
//           return i+1
// }

// console.log(checkArray([1,1,1,2,3,5]))

// maxSubArraySum using sliding window approach 

// function maxSubArraySum(arr,num)
// {
//           if(arr.length < num)
//           {
//                     return null
//           }
//           let maxSum = 0
//           let tempSum = 0
//           for(let i=0; i<num; i++)
//           {
//                     maxSum += arr[i]
//           }
//           tempSum = maxSum
//           for(let i=num; i<arr.length; i++)
//           {
//             tempSum = maxSum - arr[i-num] + arr[i]
//             maxSum = Math.max(maxSum,tempSum)
                    
//           }
//           return maxSum
// }
// console.log(maxSubArraySum([1,2,1,2,1,3,0],2))

// recursion

// function sumrange

// function sumRange(num)
// {
//           sum = 0
//           if(num === 1)
//           {
//                     return 1
//           }
//           return num + sumRange(num-1)
        

// }
// console.log(sumRange(3))

// factorial

// function factorial(n)
// {
//           if(n<0)
//           {
//                     return 'factorial not defined for negative numbers'
//           }
//           if(n==1 || n==0)
//           {
//                     return 1
//           }
//           return n * factorial(n-1)
// }
// console.log(factorial(5));

// helper function recursion
// function oddArray(arr)
// {
//           let result = []
//           function helper(helperInput)
//           {
                    
//           if(helperInput.length === 0)
//           {
//                     return 
//           }
//                     if(helperInput[0]%2 !== 0)
//                     {
//                               result.push(helperInput[0])
//                     }
//                     helper(helperInput.slice(1))
//           }
//           helper(arr)
//           return result 
// }
// console.log(oddArray([1,2,3,4,5,6]))
      
// another approach

// function oddArray(arr)
// {
//           let newArr = []
//           if(arr.length === 0)
//           {
//                     return newArr
//           }
//           if(arr[0] % 2 !== 0)
//           {
//                     newArr.push(arr[0])
//           }
//          newArr = newArr.concat(oddArray(arr.slice(1)))
//          return newArr
// }
// console.log(oddArray([2,3,4,5,6,8,4]));

// linear search 

// function checkArray(arr, val) {
//           if (arr.length === 0) {
//               return 'no items in array';
//           }
      
//           let found = false;
//           let index = -1;
      
//           arr.forEach((item, idx) => {
//               if (item === val) {
//                   found = true;
//                   index = idx;
//               }
//           });
      
//           if (found) {
//               return `${val} is at index ${index}`;
//           } else {
//               return `${val} is not found in the array`;
//           }
//       }
      
//       let arr = [1, 2, 3, 4, 2, 4, 56, 7, 4, 3, 56, 7, 34, 67, 4, 7];
//       console.log(checkArray(arr, 34));

//       other approach 

// function checkArray(arr,val)
// {
//           if(arr.length <= 0)
//           {
//                     return 'wronggg'
//           }
//           let index = arr.findIndex(item => item === val)
//           if(index !== -1)
//           {
//                     return index 
//           }
//           else
//           {
//                     return `item ithil illa bro :(`
//           }
// } 
// let arr = [1, 2, 3, 4, 2, 4, 56, 7, 4, 3, 56, 7, 34, 67, 4, 7];
// console.log(checkArray(arr, 56));

// binary search example 

// function checkBinary(arr,val)
// {
          
//           let left = 0
//           let right = arr.length-1
          
//           while(left <= right)
//           {
//                    let mid = Math.floor((left+right)/2)
//                     if(val === arr[mid])
//                     {
//                               return mid
//                     }
//                     if(val > arr[mid])
//                     {
//                              left = mid + 1
//                     }else 
//                     {
//                              right = mid - 1
//                     }
                   
                    
//           }
//           return -1

// }
// console.log(checkBinary([1,2,3,4,5,6,7,8,9,10], 10));

// naive approach for comparison of two strings
 
// function stringCompare(str1,str2)
// {
//           let count = 0
         
//           for(let i=0; i<str1.length; i++)
//           {
                   
//                     for(let j=0; j<str2.length; j++)
//                     {
//                               if(str2[j] !== str1[i+j])
//                               {
                                       
//                                         break 
//                               }
//                               if(j==str2.length -1)
//                               {
//                                         count++
//                               }
                            
//                     }
                  
//           }
//           return count
          
// }
// console.log(stringCompare('hihellohowhello','hello'));