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
//                     if(!this.first)
//                     {
//                               this.first = node 
//                               this.last = node 
//                     }else{
//                               this.last.next = node 
//                               this.last = node 
//                     }
//                     return ++this.length 

//           }
//           dequeue()
//           {
//                     if(!this.first) return null 
//                     let temp = this.first 
//                     if(this.first == this.last) 
//                     {
//                               this.last = null 
//                     }
//                     this.first = this.first.next 
//                     this.length-- 
//                     return temp 
//           }
// }

// const queue = new Queue 
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());


// priority queue

// class PriorityQueue{
//           constructor()
//           {
//                     this.items = []
//           }
//           enqueue(item,priority)
//           {
//                     const queueElement = {item,priority}
//                     let added = false 
//                     for(let i=0; i<this.items.length; i++)
//                     {
//                               if(queueElement.priority < this.items[i].priority)
//                               {
//                                         this.items.splice(i,0,queueElement)
//                                         added = true
//                                         break
//                               }

//                     }
//                     if(!added)
//                     {
//                               this.items.push(queueElement)
//                     }
                    
//           }
//           dequeue()
//           {
//                   return this.items.shift()

//           }
//           isEmpty()
//           {
//                     return this.items.length === 0
//           }
//           getSize()
//           {
//                     return this.items.length 
//           }
//           print()
//           {
//                     return this.items.forEach(item => console.log(item))
//           }
// }
// const queue = new PriorityQueue()
// queue.enqueue('task1',3)
// queue.enqueue('task2',1)
// queue.enqueue('task3',2)
// queue.print()

// linked list based priority queue

// class Node{
//           constructor(value,priority)
//           {
//                     this.value = value 
//                     this.priority = priority;
//                     this.next = null 
//           }
// }
// class PriorityQueue{
//           constructor()
//           {
//                     this.first = null 
//                     this.last = null 
//                     this.length = 0
//           }
//           isEmpty()
//           {
//                     return this.length === 0
//           }
//           enqueue(element,priority)
//           {
//                     const newNode = new Node(element, priority);

//                     if (this.isEmpty()) {
//                       this.first = newNode;
//                       this.last = newNode;
//                     } else {
//                       if (priority < this.first.priority) {
//                         newNode.next = this.first;
//                         this.first = newNode;
//                       } else {
//                         let curr = this.first;
//                         while (curr.next !== null && priority >= curr.next.priority) {
//                           curr = curr.next;
//                         }
//                         newNode.next = curr.next;
//                         curr.next = newNode;
//                         if (newNode.next === null) {
//                           this.last = newNode;
//                         }
//                       }
//                     }
//                     this.length++;
//                     return this.length;
//           }
//           print()
//           {
//                     let curr = this.first 
//                     let list = ''
//                     while(curr !== null)
//                     {
//                       list += `item : ${curr.value} & priority : ${curr.priority}, `
//                       curr = curr.next 
//                     }
//                     console.log(list)
//           }
// }

// let q = new PriorityQueue();
// q.enqueue(20, 2);
// q.enqueue(30, 1);
// q.enqueue(40, 4);
// q.enqueue(40, 3);
// q.print()




// array implementation 

class CircularQueue{
          constructor(size)
          {
                    this.maxSize = size 
                    this.queue = new Array(size)
                    this.front = -1
                    this.rear = -1

          }
          enqueue(value)
          {
                    if(this.isFull())
                    {
                              return console.log('bro queue is full, cant add more : )')
                    }
                    else 
                    {
                              if(this.isEmpty())
                              {
                                        this.front = 0
                                        this.rear = 0
                              }
                              else
                              {
                                        this.rear = (this.rear + 1) % this.maxSize
                              }
                              this.queue[this.rear] = value 
                              return true 
                    }
          }
          dequeue()
          {
                    if(this.isEmpty()) return null 
                    let removed = this.queue[this.front]
                    if(this.front === this.rear) 
                    {
                              this.front = -1
                              this.rear = -1
                    } 
                    else
                    {
                              this.front = (this.front + 1) % this.maxSize
                    }
                    return removed
          }
          isFull()
          {
                    return ((this.rear + 1) % this.maxSize === this.front && this.front !== -1)
          }
          isEmpty()
          {
                    return this.front == -1
          }
          print()
          {
                    if(this.isEmpty()) return null 
                    let display = []
                    let i = this.front 
                    while(i !== this.rear)
                    {
                              display.push(this.queue[i])
                              i = (i+1) % this.maxSize 
                    }
                    display.push(this.queue[this.rear])
                    console.log(display)
          }

}
const q = new CircularQueue(4)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.enqueue(5)

q.print()