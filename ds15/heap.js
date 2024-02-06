class  MaxBinaryHeap{
          constructor()
          {
                    this.values = []
          }
          insert(element)
          {
                    this.values.push(element)
                    this.bubbleUp()
                   

          }
          bubbleUp()
          {
                    let index = this.values.length - 1
                    let element = this.values[index]
                    while(index > 0)
                    {
                              let parentIndex = Math.floor((index-1)/2)
                              let parent = this.values[parentIndex]
                              if(element <= parent) break 
                              this.values[parentIndex] = element 
                              this.values[index] = parent 
                              index = parentIndex 
                    }


          }

          extractMax()
          {
                    const max = this.values[0]
                    const end = this.values.pop()
                    if(this.values.length > 0)
                    {
                              this.values[0] = end 
                              this.sinkDown()
                    }
                    return max 
          }
          sinkDown()
          {
                    let index = 0 
                    const length = this.values.length 
                    const element = this.values[0]
                    while(true)
                    {
                              let leftChildIdx = 2 * index + 1 
                              let rightChildIdx = 2 * index + 2 
                              let leftChild,rightChild 
                              let swap = null 
                              if(leftChildIdx <  length )
                              {
                                        leftChild = this.values[leftChildIdx]
                                        if(leftChild > element)
                                        {
                                                  swap = leftChildIdx 
                                        }
                              } 
                              if(rightChildIdx < length)
                              {
                                        rightChild = this.values[rightChildIdx]
                                        if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild))
                                        {
                                                  swap = rightChildIdx
                                        }
                              }
                              if(swap === null) break 
                              this.values[index] = this.values[swap]
                              this.values[swap] = element 
                              index = swap
                    }
          }
        
          isMaxHeap(arr)
          {
            let n = arr.length
            for(let i=0; i<arr.length; i++)
            {
                let leftChildIdx = 2 * n + 1
                let rightChildIdx = 2 * n + 2
                if(leftChildIdx < n && arr[leftChildIdx] > arr[i]) return false 
                if(rightChildIdx < n && arr[rightChildIdx] > arr[i]) return false 
                return true 
            }
          }
          convertToMinHeap()
          {

            let startIdx = Math.floor((this.values.length - 2)/2)
            for(let i = startIdx; i>=0; i--)
            {
                this.minheapify(i)
            }

             

          }
          buildHeap(arr) {
            for (let item of arr) {
                this.insert(item);
            }
            return this.values;
        }
        
          minheapify(index)
          {
            let leftChildIdx  = 2*index + 1 
            let rightChildIdx= 2*index + 2
            let smallest = index 
            let element = this.values[smallest]
            if(leftChildIdx < this.values.length && this.values[leftChildIdx] < this.values[smallest] )
            {
                smallest = leftChildIdx 
            }
            if(rightChildIdx < this.values.length && this.values[rightChildIdx] < this.values[smallest])
            {
                smallest = rightChildIdx 
            }
            if(smallest !== index)
            {
                this.values[index] = this.values[smallest]
                this.values[smallest] = element 
                this.minheapify(smallest)
                
            }

          }

          findKthLargestElement(nums,k)
          {
            const heap = new MaxBinaryHeap()
            for(let num of nums)
            {
                heap.insert(num)
                
            }
            for(let i=0; i<k-1; i++)
            {
                heap.extractMax()
            }
            return heap.extractMax()
          }
    
          
          
        
}

let heap = new MaxBinaryHeap()
console.log(heap.insert(20));
heap.insert(30)
heap.insert(10)
heap.insert(15) 
heap.insert(12)
heap.insert(40)
heap.extractMax()


console.log(heap.values);

console.log(heap.values);
console.log('max heap')
console.log(heap.isMaxHeap([2,3,4,1,32,4,5]));
console.log(heap.convertToMinHeap());
console.log(heap.values);

console.log(heap.findKthLargestElement([2,3,4,2,1,5,6],3));
// console.log(heap.buildHeap([10,2,5,73,2]));