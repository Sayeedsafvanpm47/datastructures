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
//           bubbleUp()
//           {
//                     let index = this.values.length - 1 
//                     let element = this.values[index]
//                     while(index > 0)
//                     {
//                               let parentIdx = Math.floor((index-1)/2)
//                               let parent = this.values[parentIdx]
//                               if(element <= parent) break
//                               this.values[index] = parent 
//                               this.values[parentIdx] = element   
//                     }
//           }
//           extractMax()
//           {
//                     let max = this.values[0]
//                     let end = this.values.pop()
//                     if(this.values.length > 0)
//                     {
//                               this.values[0] = end 
//                               this.sinkDown()
//                     }
//                     return max 
//           }
//           sinkDown()
//           {
//                     let index = 0 
//                     let element = this.values[0]
//                     let length = this.values.length 
                   
//                     while(true)
//                     {
//                               let l = 2 * index + 1 
//                               let r = 2 * index + 2 
//                               let leftChild, rightChild 
//                               let swap = null
                           
//                               if(l< length)
//                               {
//                                         leftChild = this.values[l]
//                                         if(leftChild > element)
//                                         {
//                                                   swap = l 
//                                         }
//                               }
//                               if(r < length)
//                               {
//                                         rightChild = this.values[r]
//                                         if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild))
//                                         {
//                                                   swap = r
//                                         }
//                               }
//                               if(swap === null) break 
//                               this.values[index] = this.values[swap]
//                               this.values[swap] = element 
//                               index = swap 
//                     }
//           }
//           convertToMin()
//           {
//                     let startIndex = Math.floor((this.values.length - 1)/2) 
//                     for(let i=startIndex; i>=0; i--)
//                     {
//                               this.minHeapify(i)
//                     }
//           }
//           minHeapify(index)
//           {
//                     let leftChildIdx = 2 * index + 1 
//                     let rightChildIdx = 2 * index + 2
//                     let smallest = index 
//                     let element = this.values[index]
//                     let length = this.values.length 
//                     if(leftChildIdx < length && this.values[leftChildIdx] < this.values[smallest])
//                     {
//                               smallest = leftChildIdx 
//                     }
//                     if(rightChildIdx < length && this.values[rightChildIdx] < this.values[smallest])
//                     {
//                               smallest = rightChildIdx 
//                     }
//                     if(smallest !== index)
//                     {
//                               this.values[index] = this.values[smallest]
//                               this.values[smallest] = element 
//                               this.minHeapify(smallest)
                            
//                     }
//           }
//           convertToMax()
//           {
//                     let startIdx = Math.floor((this.values.length - 1)/2)
//                     for(let i = startIdx; i>=0 ; i--)
//                     {
//                               this.maxHeapify(i)
//                     }
                    
//           }
//           maxHeapify(index)
//           {
//                     let l = 2 * index + 1 
//                     let r = 2 * index + 2
//                     let smallest = index 
//                     let element = this.values[index]
                    
//                     if(l < this.values.length && this.values[l] > this.values[smallest])
//                     {
//                               smallest = l 
//                     }
//                     if(r < this.values.length && this.values[r] > this.values[smallest])
//                     {
//                               smallest = r 

//                     }
//                     if(smallest !== index)
//                     {
//                               this.values[index] = this.values[smallest]
//                               this.values[smallest] = element 
//                               this.maxHeapify(smallest)
//                     }
//           }
          
// }

// const heap = new MaxBinaryHeap()
// heap.insert(30)
// heap.insert(20)
// heap.insert(15)
// heap.insert(12)
// heap.insert(10)
// heap.insert(25)
// console.log(heap.values);
// console.log(heap.extractMax());
// heap.convertToMin()
// console.log(heap.values);
// heap.convertToMax()
// console.log(heap.values);

// class Heap {
//           constructor() {
//               this.values = [];
//           }
      
//           minHeapify(arr, i, n) {
//               let smallest = i;
//               const l = 2 * i + 1;
//               const r = 2 * i + 2;
      
//               if (l < n && arr[l] < arr[smallest]) {
//                   smallest = l;
//               }
      
//               if (r < n && arr[r] < arr[smallest]) {
//                   smallest = r;
//               }
      
//               if (smallest !== i) {
//                   [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
//                   this.minHeapify(arr, smallest, n);
//               }
//           }
//           maxHeapify(arr,i,n)
//           {
//                     let largest = i 
//                     let l = 2 * i + 1 
//                     let r = 2 * i + 2 
//                     if(l < n && arr[l] > arr[largest]) largest = l 
//                     if(r < n && arr[r] > arr[largest]) largest = r 
//                     if(largest !== i) 
//                     {
//                               let temp = arr[i]
//                               arr[i] = arr[largest]
//                               arr[largest] = temp 
//                               this.maxHeapify(arr,largest,n)
//                     }
//           }
      
//           buildMinHeap(arr) {
//               const n = arr.length;
//               for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//                   this.minHeapify(arr, i, n);
//               }
//           }
//           buildMaxHeap(arr)
//           {
//                     const n = arr.length 
//                     for(let i=Math.floor((n-1)/2); i>=0; i--)
//                     {
//                               this.maxHeapify(arr,i,n)
//                     }
//           }
      
//           heapSort(arr) {
//               const n = arr.length;
//               this.buildMinHeap(arr);
      
//               for (let i = n - 1; i > 0; i--) {
//                   [arr[0], arr[i]] = [arr[i], arr[0]];
//                   this.minHeapify(arr, 0, i);
//               }
      
//               return arr;
//           }
//           heapSortMax(arr) {
//                     const n = arr.length;
//                     this.buildMaxHeap(arr);
            
//                     for (let i = n - 1; i > 0; i--) {
//                         [arr[0], arr[i]] = [arr[i], arr[0]];
//                         this.maxHeapify(arr, 0, i);
//                     }
            
//                     return arr;
//                 }
//                 checkIfMinHeap(arr) {
//                     let n = arr.length;
//                     for (let i =0; i < n; i++) {
//                         let l = 2 * i + 1;
//                         let r = 2 * i + 2;
//                         if (l < n && arr[l] < arr[i]) return false;
//                         if (r < n && arr[r] < arr[i]) return false;
//                     }
//                     return true;
//                 }
                
//       }
      
//       const heapSortInstance = new Heap();
//       console.log(heapSortInstance.heapSort([3, 4, 6, 3, 1, 5, 7, 4, 2, 6, 8]));
//       console.log(heapSortInstance.heapSortMax([3, 4, 6, 3, 1, 5, 7, 4, 2, 6, 8]));
//       console.log(heapSortInstance.checkIfMinHeap([10, 12, 30, 15]));

// class Node{
//           constructor()
//           {
//                     this.children = {}
//                     this.isEndOfWord = false 
//           }

// }

// class Trie{
//           constructor()
//           {
//                     this.root = new Node()
//           }
//           insert(word)
//           {
//                     let node = this.root 
//                     for(let char of word)
//                     {
//                               if(!node.children[char])
//                               {
//                                         node.children[char] = new Node()

//                               }
//                               node = node.children[char]
                             
//                     }
//                     node.isEndOfWord = true
//           }
//           find(word)
//           {
//                     let node = this.root 
//                     for(let char of word)
//                     {
//                               if(!node.children[char]) return false 
//                               node = node.children[char]
//                     }
//                     return node.isEndOfWord 
//            }
//            startsWith(prefix)
//            {
//                     let node = this.root 
//                     for(let char of prefix)
//                     {
//                               if(!node.children[char]) return false 
//                               node = node.children[char]
//                     }
//                     return true 
//            }
//          getWordsWithPrefix(prefix)
//          {
//           let result = []
//           let node  = this.root 
//           function helper(node,word)
//           {
//                     if(node.isEndOfWord) result.push(word)
//                     for(let char in node.children)
//           {
//                     helper(node.children[char],word+char)
//           }


//           }
//           for(let char of prefix)
//           {
//                     if(!node.children[prefix]) return false 
//                     node = node.children[char]
//           }
//           helper(node,prefix)
//           return result
//          }
//          deleteWord(word)
//          {
        
//           function deleteWord(node,index)
//           {
//                     if(index === word.length)
//                     {
//                               if(!node.isEndOfWord) return false 
//                               node.isEndOfWord = false 
//                               return Object.keys(node.children).length === 0
//                     }
//                     const char = word[index]
//                     if(!node.children[char]) return false 
//                     const shouldDelete = deleteWord(node.children[char],index + 1)
//                     if(shouldDelete)
//                     {
//                               delete node.children[char]
//                               return Object.keys(node.children).length === 0
//                     }
//                     return false 
//           }
//           deleteWord(this.root,0)
//          }
// }

// let trie = new Trie()
// trie.insert('sayeed')
// trie.insert('syd')
// trie.insert('sachu')
// console.log(trie.find('sachu'));
// console.log(trie.getWordsWithPrefix('s'));
// trie.deleteWord('sayeed')
// console.log(trie.getWordsWithPrefix('s'));




// class Graph{
//           constructor()
//           {
//               this.adjacencyList = {}
//           }
//           insertVertex(vertex)
//           {
//                     if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
//           }
//           insertEdge(vertex1,vertex2)
//           {
//                     if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false 
//                     if(!this.adjacencyList[vertex1].includes(vertex2))
//                     this.adjacencyList[vertex1].push(vertex2) 
//                     if(!this.adjacencyList[vertex2].includes(vertex1))
//                     this.adjacencyList[vertex2].push(vertex1)
//           }
//           removeEdge(vertex1,vertex2)
//           {
//                     this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
//                     this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!== vertex1)
//           }
//           removeVertex(vertex)
//           {
                    
//                  while(this.adjacencyList[vertex].length) {
//                               let v2 = this.adjacencyList[vertex].pop()
//                               this.removeEdge(vertex,v2)
//           }
//                     delete this.adjacencyList[vertex]

//           }
//           display()
//           {
//                     for(let vertex in this.adjacencyList)
//                     {
//                               let edges = this.adjacencyList[vertex].join(',')
//                               console.log(`${vertex} -> ${edges}`);
//                     }
//           }
//           DFSI(start)
//           {
//                     let stack = [start]
//                     let result = []
//                     let visited = {}
//                     visited[start] = true 
//                     let current 
//                     while(stack.length)
//                     {
//                           current = stack.pop()
//                               result.push(current)
//                               this.adjacencyList[current].forEach( neighbor => {
//                                         if(!visited[neighbor])
//                                         {
//                                                   visited[neighbor] = true 
//                                                   stack.push(neighbor)
//                                         }
//                               })

//                     }
//                     return result 

//           }
//           BFSI(start)
//           {
//                     let queue = [start]
//                     let result = []
//                     let visited = {}
//                     visited[start] = true 
//                     let current 
//                     while(queue.length)
//                     {
//                                current = queue.shift()
//                               result.push(current)
//                               this.adjacencyList[current].forEach(neighbor => {
//                                         if(!visited[neighbor])
//                                         {
//                                                   visited[neighbor] = true 
//                                                   queue.push(neighbor)
//                                         }
//                               })
//                     }
//                     return result 
//           }
//           hasEdge(vertex1,vertex2)
//           {
//                     return (this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2].includes(vertex1))
//           }
// }

// let graph = new Graph()
// graph.insertVertex('A')
// graph.insertVertex('B')
// graph.insertVertex('C')
// graph.insertVertex('D')
// graph.insertVertex('E')
// graph.insertEdge('A','B')
// graph.insertEdge('A','E')
// graph.insertEdge('B','C')
// graph.insertEdge('D','C')
// graph.insertEdge('D','E')
// console.log(graph.adjacencyList);
// console.log(graph.display());
// console.log(graph.DFSI('A'));
// console.log(graph.BFSI('A'));
// console.log(graph.hasEdge('A','C'));
class Node{
          constructor(element)
          {
                    this.value = element
                    this.left = null 
                    this.right = null 
          }
}
class BST{
          constructor()
          {
                    this.root = null 
          }
          insert(value)
          {
                    const node = new Node(value)
                    if(this.root === null) 
                    {
                              this.root = node 
                    }else 
                    {
                              let curr = this.root
                              while(true)
                              {
                                        if(value === curr.value) return false 
                                        if(value < curr.value){
                                        if(curr.left === null )
                                        {
                                                  curr.left = node 
                                         return this          

                                        }else curr = curr.left 
                              }else if(value > curr.value) {
                                        if(curr.right === null) {
                                                  curr.right = node 
                                                  return this 
                                        }else curr = curr.right 
                              }
                                        
                              }
                    }
          }
          search(value)
          {
                    let curr = this.root 
                    let found = false 
                    let pos = null
                    let i = 0
                    while(!found && curr !== null)
                    {
                              if(value === curr.value) return `Found ${curr.value} at ${i+1} on ${pos} of tree`
                              else if(value < curr.value)
                              {
                                        curr = curr.left 
                                        pos = 'right'
                                        i++
                              }else if(value > curr.value)
                              {
                                        curr = curr.right 
                                        pos = 'left'
                                        i++
                              }else{
                                        found = true 
                              }
                              
                    }
                    if(!found) return false 
                   
          }
          BFS()
          {
                    let node = this.root 
                    let queue = []
                    let result = []
                    queue.push(node)
                    while(queue.length)
                    {
                           let curr = queue.shift()
                           result.push(curr.value)
                           if(curr.left !== null) queue.push(curr.left)
                           if(curr.right !== null) queue.push((curr.right))

                    }
                    return result 
                    


          }
          preOrder()
          {
                    let result = []
                    function traversal(node)
                    {
                              result.push(node.value)
                              if(node.left) traversal(node.left)
                              if(node.right) traversal(node.right)

                    }
                    traversal(this.root)
                    return result
          }
          postOrder()
          {
                    let result = []
                    function traversal(node)
                    {

                              if(node.left) traversal(node.left)
                              if(node.right) traversal(node.right)
                              result.push(node.value)
                    }
                    traversal(this.root)
                    return result 
          }
          inOrder()
          {
                    let result = []
                    function traversal(node)
                    {
                              if(node.left) traversal(node.left)
                              result.push(node.value)
                    if(node.right) traversal(node.right)
                    }
          traversal(this.root)
          return result
          }
          delete(value)
          {
                    this.root = this.deleteHelper(this.root,value)
          }
          deleteHelper(root,value)
          {
                    if(!root) return null 
                    if(value < root.value)
                    {
                              root.left = this.deleteHelper(root.left,value)

                    }
                    else if(value > root.value)
                    {
                              root.right = this.deleteHelper(root.right,value)
                    }else 
                    {
                              if(!root.left && !root.right) return null 
                              if(!root.left) return root.right 
                              if(!root.right) return root.left 
                              root.value = this.findMin(root.right)
                              root.right = this.deleteHelper(root.right,root.value)
                    }
                    return root 

          }
          findMin(root)
          {
                    if(!root.left) return root.value 
                    else this.findMin(root.left)
          }
}

let bst = new BST()
bst.insert(20)
bst.insert(40)
bst.insert(10)
bst.insert(17)
bst.insert(13)
bst.delete(17)
console.log(bst.search(17));
console.log(bst.BFS());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.inOrder());
