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
//                     let node = new Node(value)
//                     if(this.length === 0){
//                               this.first = node 
//                               this.last = node 

//                     }
//                     else 
//                     {
                            
//                               this.last.next = node 
//                               this.last = node
//                     }
//                    this.length++
//                    return this
//           }
//           dequeue()
//           {
//                     if(this.length === 0) return null 
//                     let prev = this.first.next 
//                     let removed = this.first 
//                     this.first = prev 
//                     this.length--
//                     return removed.value
//           }
//           reverseArray(arr,k)
//           {
//                     let arr2 = [];
//                     for (let i = 0; i < k; i++) {
//                         arr2[i] = this.dequeue(); 
//                     }
//                     console.log(arr2);
              
//                     arr2.reverse();
           
//                     for (let i = 0; i < k; i++) {
//                         this.enqueue(arr2[i]);
//                     }
                
                  
//                     return this;
//           }
//           print()
//           {
//                 let list = ''
//                 let curr = this.first 
//                 while(curr !== null)
//                 {
//                     list += curr.value + " " 
//                     curr = curr.next 
//                 }    
//                 console.log(list)
//           }
// }

// const queue = new Queue()
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// console.log(queue.enqueue(70));

// console.log(queue.reverseArray(4));

// queue.print()



// function Queue() {
//     this.items = [];
//   }
  
//   Queue.prototype.enqueue = function(value) {
//     this.items.push(value);
//   };
  
//   Queue.prototype.dequeue = function() {
//     if (this.isEmpty()) return null;
//     return this.items.shift();
//   };
  
//   Queue.prototype.isEmpty = function() {
//     return this.items.length === 0;
//   };
  
//   Queue.prototype.size = function() {
//     return this.items.length;
//   };
  
//   function reverseQueue(queue) {
//     const stack = [];
  
//     while (!queue.isEmpty()) {
//       stack.push(queue.dequeue());
//     }
  
//     while (stack.length !== 0) {
//       queue.enqueue(stack.pop());
//     }
//   }
  

//   const q = new Queue();
//   q.enqueue(2);
//   q.enqueue(4);
//   q.enqueue(6);
//   q.enqueue(8);
//   q.enqueue(10);
  
//   console.log("Original Queue:", q.items);
//   reverseQueue(q);
//   console.log("Reversed Queue:", q.items);
  





class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        return this.items.shift();
      } else {
        return null;
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log("Queue items:", this.items);
    }
  }
  
  function reverseQueue(queue) {
    const stack = [];
  
    while (!queue.isEmpty()) {
      stack.push(queue.dequeue());
    }
  
    while (stack.length !== 0) {
      queue.enqueue(stack.pop());
    }
  }
  
  // Example usage:
  const q = new Queue();
  q.enqueue(2);
  q.enqueue(4);
  q.enqueue(6);
  q.enqueue(8);
  q.enqueue(10);
  
  console.log("Original Queue:");
  q.print();
  
  reverseQueue(q);
  
  console.log("Reversed Queue:");
  q.print();
  
  