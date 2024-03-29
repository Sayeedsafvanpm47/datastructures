// // queue

// class Queue {
//           constructor()
//           {
//                     this.items = []
//           }
//           enqueue(element)
//           {
//                     this.items.push(element)
//           }
//           dequeue()
//           {
//                     return this.items.shift()
//           }
//           size()
//           {
//                     return this.items.length
//           }
//           isEmpty()
//           {
//                     return this.items.length === 0
//           }
//           peek()
//           {
//            if(!this.isEmpty())
//            {
//                     return this.items[0]
//            }
//            return null
//           }
//           print()
//           {
//                     return console.log(this.items.toString())
//           }
// }

// const queue = new Queue()

// console.log(queue.size())
// console.log(queue.isEmpty())
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log(queue.size())
// queue.print()
// queue.dequeue()
// queue.print()
// console.log(queue.peek())

// queue implementation optmized!

// class Queue {
//           constructor()
//           {
//                     this.items = {}
//                     this.rear = 0
//                     this.front = 0
//           }
//           enqueue(element)
//           {
//                     this.items[this.rear] = element
//                     this.rear++
//           }
//           dequeue()
//           {
//                     const item = this.items[this.front]
//                     delete this.items[this.front]
//                     this.front++
//                     return item
//           }
//           isEmpty()
//           {
//                     return this.rear - this.front === 0
//           }
//           peek()
//           {
//                     return this.items[this.front]
//           }
//           size()
//           {
//                     return this.rear - this.front
//           }
//           print()
//           {
//                     return console.log(this.items)
//           }
// }
// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// queue.print()

// queue.dequeue()
// queue.print()
// console.log(queue.peek())
// console.log(queue.size());
// console.log(queue.isEmpty());

// circular queue

// class circularQueue{
//           constructor(capacity)
//           {
//                     this.items = new Array
//                     this.capacity = capacity
//                     this.front = -1
//                     this.rear = -1
//                     this.currentLength = 0
//           }
//           isFull()
//           {
//                     return this.currentLength === this.capacity
//           }
//           isEmpty()
//           {
//                     return this.currentLength === 0
//           }
//           enqueue(element){
//                     if(!this.isFull())
//                     {
//                               this.rear = (this.rear + 1) % this.capacity
//                               this.items[this.rear] = element
//                               this.currentLength += 1
//                               if(this.front === -1)
//                               {
//                                         this.front = this.rear
//                               }
//                     }
//           }
//           dequeue()
//           {
//                     if(this.isEmpty())
//                     {
//                               return null
//                     }
//                     const item = this.items[this.front]
//                     this.items[this.front] = null
//                     this.front = (this.front + 1) % this.capacity
//                     this.currentLength -= 1
//                     if(this.isEmpty())
//                     {
//                               this.front = -1
//                               this.rear = -1
//                     }
//                     return item

//           }
//           peek()
//           {
//                     if(!this.isEmpty())
//                     {
//                               return this.items[this.front]
//                     }
//                     return null
//           }
//           print()
//           {
//                     if(this.isEmpty())
//                     {
//                               console.log('queue is empty')
//                     }else{
//                               let i
//                               let str = ''
//                               for(i = this.front; i !== this.rear; i = (i+1) % this.capacity )
//                               {
//                                         str += this.items[i] + " "
//                               }
//                               str += this.items[i]
//                               console.log(str)
//                     }
//           }
// }

// const queue = new circularQueue(5)
// console.log(queue.isFull())
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// queue.print()
// queue.dequeue()
// queue.print()

// console.log(queue.peek())
// queue.enqueue(50)
// queue.print()

