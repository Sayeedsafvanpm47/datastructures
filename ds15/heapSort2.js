// class MaxBinaryHeap{
//           constructor()
//           {
//                     this.values = []
//           }
//           insert(element)
//           {
//                     this.values.push(element)
//                     this.bubbleUp()
//           }
//     bubbleUp()
//     {
//           let index = this.values.length - 1
//           let element = this.values[index]
//           while(index > 0)
//           {
//                     let parentIdx = Math.floor((index-1)/2)
//                     let parent = this.values[parentIdx]
//                     if(element <= parent) break 
//                     this.values[parentIdx] = element 
//                     this.values[index] = parent 
//                     index = parentIdx 
//           }
          
//     }
//     extractMax()
//     {
//            let max = this.values[0]
//            let end = this.values.pop()
//            if(this.values.length > 0)
//            {
//                     this.values[0] = end 
//                     this.sinkDown()
//            }
//           return max 
//     }
//     sinkDown()
//     {
//           let index = 0 
        
//           let length = this.values.length 
//           let element = this.values[0]

//           while(true)
//           {
//                     let leftChildIdx = 2 * index + 1
//                     let rightChildIdx = 2 * index + 2 
//                     let leftChild,rightChild 
//                     let swap = null
//                     if(leftChildIdx < length)
//                     {
//                               leftChild = this.values[leftChildIdx]
//                               if(leftChild > element)
//                               {
//                                         swap = leftChildIdx 
//                               }
//                     }
//                     if(rightChildIdx < length)
//                     {
//                               rightChild = this.values[rightChildIdx]
//                               if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild))
//                               {
//                                         swap = rightChildIdx 
//                               }
//                     }
//                     if(swap === null) break
//                     this.values[index] = this.values[swap]
                  
//                     index = swap 
                 
//           }
    
        
//     }
//     minHeapify(arr,n,i)
//     {
//           let smallest = i 
//           let leftChildIdx = 2 * i + 1 
//           let rightChildIdx = 2 * i + 2
//           if( leftChildIdx < n && arr[leftChildIdx] < arr[smallest])
//           {
//                     smallest = leftChildIdx 
//           }
//           if(rightChildIdx < n && arr[rightChildIdx] < arr[smallest])
//           {
//                     smallest = rightChildIdx 
//           }
//           if(smallest !== i)
//           {
//                     let temp = arr[i]
//                     arr[i] = arr[smallest]
//                     arr[smallest] = temp 
//                     this.minHeapify(arr,n,smallest)
//           }
         
//     }
//     maxHeapify(arr,n,i)
//     {
//           let leftChildIdx = 2 * i + 1 
//           let rightChildIdx = 2 * i + 2 
//           let largest = i

//           if(leftChildIdx < n && arr[leftChildIdx] > arr[largest])
//           {
//                     largest = leftChildIdx 
//           }
//           if(rightChildIdx < n && arr[rightChildIdx] > arr[largest])
//           {
//                     largest = rightChildIdx 
//           }
//           if(largest !== i)
//           {
//                     let temp = arr[i]
//                     arr[i] = arr[largest]
//                     arr[largest] = temp 
//                     this.maxHeapify(largest)
//           }
//     }
//     heapSort(arr, n) {
//           for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
//               this.minHeapify(arr, n, i);
//           }
//           for (let i = n - 1; i > 0; i--) {
//               let temp = arr[0];
//               arr[0] = arr[i];
//               arr[i] = temp;
//               this.minHeapify(arr, n, 0);
//           }
//           return arr 
//       }
//       heapSortplus(arr,n)
//       {
//           for(let i= Math.floor((n-1)/2); i>= 0; i--)
//           {
//                     this.maxHeapify(arr,n,i)
//           }

//           for(let i=n-1; i>0; i--)
//           {
//                     let temp = arr[0]
//                     arr[0] = arr[i]
//                     arr[i] = temp 
//                     this.maxHeapify(arr,n,0)
//           }
//           return arr 
//       }
    

// }


// const heap = new MaxBinaryHeap()
// heap.insert(10)
// heap.insert(20)
// heap.insert(24)
// heap.insert(30)
// heap.insert(40)
// heap.insert(54)
// heap.insert(60)
// heap.insert(36)
// heap.insert(38)
// console.log(heap.values);
// console.log(heap.extractMax());
// console.log(heap.values);

// console.log(heap.values);
// const arr = [4, 10,3, 5, 1,3];
// const n = arr.length;

// console.log(heap.heapSort(arr, n));
// console.log(heap.heapSortplus(arr,n));


function heapSort(arr)
{
    let n = arr.length 
    for(let i= Math.floor((n-1)/2); i>=0; i--)
    {
        heapify(arr,i,n)
    }
    for(let i=(n-1); i>0; i--)
    {
        let temp = arr[0]
        arr[0] = arr[i]
        arr[i] = temp 
        heapify(arr,0,i)
    }
    function heapify(arr, i, n) {
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        let largest = i;
        let elem = arr[i];
    
        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest !== i) {
            arr[i] = arr[largest];
            arr[largest] = elem;
            heapify(arr, largest, n);
        }
    }
    
    return arr 
}

console.log(heapSort([2,3,1,5,7,8,4,2]));