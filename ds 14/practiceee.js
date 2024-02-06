function pivot(arr,start=0,end=arr.length-1)
{
          let pivot = arr[start]
          let swapIdx = start 
          function swap(arr,i,j)
          {
                    let temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp 
          }
          for(let i = start+1; i<arr.length; i++)
          {
                    if(arr[i] < pivot)
                    {
                              swapIdx++
                              swap(arr,swapIdx,i)
                    }
          }
          swap(arr,start,swapIdx)
          return swapIdx 
}
function quickSort(arr,left=0,right=arr.length-1)
{
          if(left < right)
          {
                    let pivotIndex = pivot(arr,left,right)
                    quickSort(arr,left,pivotIndex-1)
                    quickSort(arr,pivotIndex+1,right)
          }
          return arr 

}
console.log(quickSort([2,3,5,3,1,3]));