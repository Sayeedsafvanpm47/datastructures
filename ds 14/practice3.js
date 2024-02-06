// class HashTable
// {
//          constructor(size=53)
//          {
//           this.keyMap = new Array(size)
//          }
//          _hash(key)
//          {
//           let total = 0
//           let prime = 31
//           for(let i=0; i<Math.min(key.length,100);i++)
//          {
//           let char = key[i]
//           let value = char.charCodeAt(0) - 96
//           total = (total*prime + value) % this.keyMap.length 
//          }
//          return total 
//          }
//          set(key,value)
//          {
//           let index = this._hash(key)
//           if(!this.keyMap[index])
//           {
//                     this.keyMap[index] = []
//           }
//           this.keyMap[index].push([key,value])

//           return this 
//          }
//          get(key)
//          {
//           let index = this._hash(key)
//           if(this.keyMap[index])
//           {
//                     for(let i=0; i< this.keyMap[index].length; i++)
//                     {
//                               if(this.keyMap[index][i][0] === key)
//                               {
//                                         return this.keyMap[index][i][1]
//                               }
//                     }
//           }
//           return undefined
         
//          }
//          remove(key)
//          {
//           let index = this._hash(key)
//           if(this.keyMap[index])
//           {
//                     for(let i=0; i<this.keyMap[index].length; i++)
//                     {
//                               if(this.keyMap[index][i][0] === key)
//                               {
//                                  this.keyMap[index].splice(i,1)
//                                  return true
//                               }
//                     }
//           }
//           return false 
//          }
//          values()
//          {
//           let valuesArray = []
//           for(let i=0; i<this.keyMap.length; i++)
//           {
//                     if(this.keyMap[i])
//                     {
//                               for(let j=0; j<this.keyMap[i].length; j++)
//                               {
//                                        if(!valuesArray.includes(this.keyMap[i][j][1]))
//                                        {
//                                         valuesArray.push(this.keyMap[i][j][1])
//                                        }
//                               }
//                     }
//           }
//           return valuesArray.forEach(item => console.log(item))
//          }
//          keys()
//          {
//           let keysArray = []
//           for(let i=0; i<this.keyMap.length; i++)
//           {
//                     if(this.keyMap[i])
//                     {
//                               for(let j=0; j<this.keyMap[i].length; j++)
//                               {
//                                         if(!keysArray.includes(this.keyMap[i][j][0]))
//                                         {
//                                                   keysArray.push(this.keyMap[i][j][0])
//                                         }
//                               }
//                     }
//           }
//           return keysArray.forEach(item => console.log(item))
//          }
//          display()
//          {
//           if(this.keyMap.length > 0)
//           {
//                     return this.keyMap.forEach((item)=>console.log(item))
//           }
//           return undefined 
//          }
// }

// const hash = new HashTable()
// console.log(hash.set('hello','bruh'));
// hash.set('hi','bro')
// hash.set('hey','there')
// hash.display()
// console.log(hash.get('hello'));
// console.log(hash.get('hey'));
// console.log(hash.remove('hey'));
// console.log(hash.get('hey'));
// hash.display()
// hash.values()
// hash.keys()


// queue

// class Node{
//           constructor(value)
//           {
//                     this.value = value 
//                     this.next = null 
//           }
// }

// class Queue{
//           constructor()
//           {
//                     this.first = null 
//                     this.last = null 
//                     this.length = 0
//           }
//           enqueue(value)
//           {
//                     const node = new Node(value)
//                     if(this.length === 0)
//                     {
//                               this.first = node 
//                               this.last = node 
//                     }else 
//                     {
//                               this.last.next = node 
//                               this.last = node
//                     }
//                     return ++this.length 
//           }
//           dequeue()
//          {
//           if(this.length === 0) return null 
//           if(this.length === 1)
//           {
          
//                     this.last = null 

//           }
//           let removed = this.first 
//           this.first = this.first.next 
//           this.length-- 
//           return removed 

//          }
//          peek()
//          {
//           if(this.length > 0)
//           {
//                     return this.first.value
//           }
//          }
//          display()
//          {
//           let curr = this.first 
//           let values = ''
//           while(curr !== null)
//           {
//            values += `${curr.value} `
//            curr = curr.next
//           }
//           console.log(values)
//          }
// }
// const q = new Queue()
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.dequeue()
// q.dequeue()
// q.enqueue(50)
// console.log(q.peek());
// q.display()

// stack

// class Node{
//           constructor(value)
//            {
//                     this.value = value 
//                     this.next = null 
//            }

// }
// class Stack{
//           constructor()
//           {
//                     this.first = null 
//                     this.last = null 
//                     this.length = 0
//           }
//           push(value)
//           {
//                     const node = new Node(value)
             
//                     if(this.length === 0)
//                     {
//                               this.first = node 
//                               this.last = node 
//                     }else
//                     {
//                               node.next = this.first 
//                               this.first = node 
//                     }
//                     return ++this.length 
//           }
//           pop()
//           {
//                     if(this.length === 0) return null 
//                     if(this.length === 1)
//                     {
//                               this.last = null 
//                     }
//                     let removed = this.first 
//                     this.first = this.first.next 
//                     this.length++
//                     return removed 
//           }
//           peekFront()
//           {
//                     if(this.length > 0)
//                     {
//                               return this.first.value 

//                     }
//           }peekRear()
//           {
//                     if(this.length>0)
//                     {
//                               return this.last.value
//                     }
//           }
//           print()
//           {
//                     let curr = this.first 
//                     let values = ''
//                     while(curr !== null)
//                     {
//                      values += `${curr.value} `
//                      curr = curr.next 
//                     }
//                     console.log(values)
                    
//           }
// }
// const stack = new Stack()
// stack.push(20)
// stack.push(30)
// stack.push(50)
// stack.pop()
// console.log(stack.peekFront());
// console.log(stack.peekRear());
// stack.print()


// bubble sort

// function bubbleSort(arr)
// {
//           for(let i=arr.length; i>0; i--)
//           {
//                     let noswap = true
//                     for(let j=0; j<=i; j++)
//                     {
//                               if(arr[j] > arr[j+1])
//                               {
//                                         let temp = arr[j]
//                                         arr[j] = arr[j+1]
//                                         arr[j+1] = temp 
//                                         noswap = false
//                               }
//                     }
//                     if(noswap) break 
//           }
//           return arr
// }
// console.log(bubbleSort([3,4,2,5,8,3,1]));

// selection sort

// function selectionSort(arr)
// {
//           for(let i=0; i<arr.length; i++)
//           {
//                     let lowest = i
//                     for(let j=i+1; j<arr.length; j++)
//                     {
//                               if(arr[lowest] > arr[j])
//                               {
//                                       lowest = j  
//                               }
                             
//                     }
//                     if(lowest !== i)
//                     {
//                               let temp = arr[lowest]
//                               arr[lowest] = arr[i]
//                               arr[i] = temp 
//                     }
//           }
//           return arr

// }
// console.log(selectionSort([3,4,5,2,5,7,1,8]));



// insertion Sort 

// function insertionSort(arr)
// {
//           for(let i=1; i<arr.length; i++)
//           {
//                     let currentVal = arr[i]
//                     for(j=i-1; j>=0 && arr[j]>currentVal; j--)
//                     {
//                               arr[j+1] = arr[j]
//                     }
//                     arr[j+1] = currentVal
//           }
//           return arr 
// }
// console.log(insertionSort([3,2,1,5,2,6,7]));


// mergeSort 

// function merge(arr1,arr2)
// {
//           let result = []
//           let i=0
//           let j=0
//           while(i<arr1.length && j<arr2.length)
//           {
//                     if(arr1[i]<arr2[j])
//                     {
//                               result.push(arr1[i])
//                               i++ 
//                     }else
//                     {
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
//           return result 
// }

// function mergeSort(arr)
// {
//           if(arr.length<=1) return arr
//           let mid = Math.floor(arr.length/2)
//           let left = mergeSort(arr.slice(0,mid))
//           let right = mergeSort(arr.slice(mid))
//           return merge(left,right)
// }

// console.log(mergeSort([2,3,4,5,3,2,1,6,7,3,1]));


function pivot(arr,start=0,end=arr.length-1)
{
 let pivot = arr[start]
 let swapIndex = start
 function swap(arr,i,j)
 {
          let temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
 }
 for(let i=start+1; i<arr.length; i++)
 {
     if(arr[i]<pivot)
     {
          swapIndex++
          swap(arr,swapIndex,i)
     }

 }
 swap(arr,start,swapIndex)
 return swapIndex
}
function quickSort(arr,left=0,right=arr.length-1)
{         


          if(left<right){
          let pivotIndex = pivot(arr,left,right)
          quickSort(arr,left,pivotIndex-1)
          quickSort(arr,pivotIndex+1,right)
          }
          return arr
}
console.log(quickSort([3,4,5,2,1,6,8,4]));