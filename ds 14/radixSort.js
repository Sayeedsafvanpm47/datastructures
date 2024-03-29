function getDigit(nums,i)
{
return Math.floor(Math.abs(nums)/Math.pow(10,i) % 10)
}
function digitCount(num)
{
          if(num===0) return 1 
          return Math.floor(Math.log10(Math.abs(num))) + 1 
}
function mostDigits(nums)
{
          let max = 0 
          for(let i=0; i<nums.length; i++)
          {
                    max = Math.max(max,digitCount(nums[i]))
          }
          return max 
}

function radixSort(nums)
{
          let maxCount = mostDigits(nums)
          for(let k=0; k<maxCount; k++)
          {
                    let digitBucket = Array.from({length:10},()=>[])
                    for(i=0; i<nums.length; i++)
                    {
                          digitBucket[getDigit(nums[i],k)].push(nums[i])    
                              
                    }
             nums = [].concat(...digitBucket)
          }
          return nums 
}

console.log(radixSort([2,3,4,55,3,45,1,4,7,7,3]));