// linked list node and linked list class basic decleration

// class node{
//           constructor(value)
//           {
//                     this.value = value
//                     this.next = null
//           }
// }

// class linkedList {
//           constructor()
//           {
//                     this.haed = null
//                     this.size = 0
//           }

//           isEmpty()
//           {
//                     return this.size === 0
//           }
//           getSize()
//           {
//                     return this.size
//           }
// }
// const list = new linkedList()
// console.log(list.isEmpty())
// console.log(list.getSize())

// linked list prepend and print

// class Node
// {
//           constructor(value)
//           {
//                     this.value = value
//                     this.next = null
//           }
// }
// class LinkedList{
//           constructor(){

//                     this.head = null
//                     this.size = 0
//           }
//           isEmpty()
//           {
//                     return this.size === 0
//           }
//           getSize()
//           {
//                     return this.size
//           }
//           prepend(value)
//           {
//                     const node = new Node(value)
//                     if(this.isEmpty())
//                     {
//                       this.head = node
//                     }else{
//                           node.next = this.head
//                           this.head = node
//                     }
//                     this.size ++

//           }
//           print()
//           {
//                     if(this.isEmpty())
//                     {
//                               console.log('The linked list is empty')
//                     }else{
//                               let curr = this.head
//                               let listValues = ''
//                               while(curr)
//                               {
//                                         listValues += `${curr.value} `
//                                         curr = curr.next
//                               }
//                               console.log(listValues)
//                     }
//           }
// }
// const list = new LinkedList()
// list.prepend(10)

// list.print()

// append

// class Node{
//   constructor(value)
//   {
//     this.value = value
//     this.next = null
//   }

// }
// class LinkedList
// {
//   constructor()
//   {
//     this.head = null
//     this.size = 0
//   }
//   isEmpty()
//   {
//     return this.size === 0
//   }
//   getSize()
//   {
//     return this.size
//   }
//   prepend(value)
//   {
//     const node = new Node(value)
//     if(this.isEmpty())
//     {
//       this.head = node
//     }else{
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   append(value)
//   {
//     const node = new Node(value)
//     if(this.isEmpty())
//     {
//       this.head = node
//     }
//     else{
//       let prev = this.head
//       while(prev.next)
//       {
//         prev = prev.next
//       }
//       prev.next = node
//     }
//     this.size++
//   }
//   print()
//   {
//     if(this.isEmpty())
//     {
//       console.log('linked list is empty')
//     }
//     else{
//       let curr = this.head
//       let listValues = ''
//       while(curr)
//       {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues)
//     }
//   }
// }

// const list = new LinkedList()
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.prepend(50)
// list.append(40)
// list.append(70)
// list.print()

// insert
// class Node{
//   constructor(value)
//   {
//     this.value = value
//     this.next = null
//   }
// }

// class LinkedList{
//   constructor()
//   {
//     this.head = null
//     this.size = 0
//   }
//   isEmpty()
//   {
//     return this.size === 0
//   }
//   getSize()
//   {
//     return this.size
//   }
//   prepend(value)
//   {
//     const node = new Node(value)

//     if(this.isEmpty())
//     {
//       this.head = node
//     }
//     else{
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   append(value)
//   {
//     const node = new Node(value)
//     if(this.isEmpty())
//     {
//       this.head = node
//     }
//     else{
//       let prev = this.head
//       while(prev.next)
//       {
//         prev = prev.next
//       }
//       prev.next = node
//     }
//     this.size++
//   }
//   insert(value,index)
//   {
//     if(index < 0 || index > this.size)
//     {
//       console.log('invalid index')
//       return
//     }
//     else if(index === 0)
//     {
//       this.prepend(value)
//     }
//     else{
//       const node = new Node(value)
//       let prev = this.head
//       for(let i=0; i< index-1; i++)
//     {
//       prev = prev.next
//     }
//     node.next = prev.next
//     prev.next = node
//     this.size++
//     }
//   }
//   print()
//   {
//     if(this.isEmpty())
//     {
//       console.log('list is empty')
//     }
//     else{
//       let curr = this.head
//        let listValue = ''
//       while(curr)
//       {
//         listValue += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValue)
//     }

//   }
// }

// const list = new LinkedList()
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.prepend(50)
// list.append(40)
// list.append(70)
// list.insert(5,3)
// list.print()

// removeFrom

// class Node{
//   constructor(value)
//   {
//     this.value = value
//     this.next = null
//   }

// }

// class LinkedList{
//   constructor()
//   {
//     this.head = null
//     this.size = 0
//   }
//   isEmpty()
//   {
//     return this.size === 0
//   }
//   getSize()
//   {
//     return this.size
//   }
//   prepend(value)
//   {
//     const node = new Node(value)
//     if(this.isEmpty())
//     {
//       this.head = node
//     }
//     else{
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   append(value)
//   {
//     const node = new Node(value)
//     if(this.isEmpty())
//     {
//       this.head = node
//     }
//     else
//     {
//       let prev = this.head
//       while(prev.next)
//       {
//         prev = prev.next

//       }
//       prev.next = node
//     }
//     this.size++
//   }
//   insert(value,index)
//   {
//     const node = new Node(value,index)
//     if(index < 0 || index > this.size)
//     {
//       return
//     }
//     else if(index === 0)
//     {
//       this.prepend(value)
//     }
//     else
//     {
//       let prev = this.head
//       for(let i=0; i< index - 1; i++)
//       {
//         prev = prev.next
//       }
//       node.next = prev.next
//       prev.next = node
//       this.size++
//     }
//   }
//   removeFrom(index)
//   {

//     let removedNode
//     if(index < 0 || index > this.size)
//     {
//       return null
//     }

//     if(index === 0)
//     {
//       removedNode = this.head
//       this.head = this.head.next
//     }
//     else{
//       let prev = this.head
//       for(let i = 0; i < index - 1; i++)
//     {
//       prev = prev.next
//     }
//     removedNode = prev.next
//     prev.next = removedNode.next

//     }
//     this.size--
//     return removedNode
//   }
//   print()
//   {
//     if(this.isEmpty())
//     {
//       console.log('the list is empty')
//     }else
//     {
//       let listValue = ''
//       let curr = this.head
//       while(curr)
//       {
//         listValue += `${curr.value } `
//         curr = curr.next
//       }
//       console.log(listValue)
//     }
//   }
// }

// const list = new LinkedList()
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.prepend(50)
// list.append(40)
// list.append(70)
// list.insert(5,3)
// list.print()

// list.removeFrom(3)
// list.print()

// remove value

// class Node{
//           constructor(value)
//           {
//                     this.value = value
//                     this.next = null
//           }
// }

// class LinkedList {
//           constructor()
//           {
//                     this.head = null
//                     this.size = 0
//           }
//           isEmpty()
//           {
//                     return this.size === 0
//           }
//           getSize()
//           {
//                     return this.size
//           }
//           prepend(value)
//           {
//                     const node = new Node(value)
//                     if(this.isEmpty())
//                     {
//                               this.head = node
//                     }
//                     else
//                     {
//                               node.next = this.head
//                               this.head = node
//                     }
//                     this.size++

//           }
//           append(value)
//           {
//                     const node = new Node(value)
//                     if(this.isEmpty())
//                     {
//                               this.head = node
//                     }
//                     else
//                     {
//                               let prev = this.head
//                               while(prev.next)
//                               {
//                                         prev = prev.next
//                               }
//                               prev.next = node

//                     }
//                     this.size++
//           }
//           insert(value,index)
//           {
//                     const node = new Node(value,index)
//                     if(this.isEmpty())
//                     {
//                               return null
//                     }
//                     else
//                     {
//                               if(index < 0 || index > this.size)
//                               {
//                                         return null
//                               }
//                               else if(index === 0)
//                               {
//                                         this.prepend(value)
//                               }
//                               else
//                               {
//                                         let prev = this.head
//                                         for(let i=0; i < index - 1; i++)
//                                         {
//                                           prev = prev.next

//                                         }
//                                         node.next = prev.next
//                                         prev.next = node
//                               }
//                               this.size++
//                     }
//           }
//           removeFrom(index){
//                     let removeNode
//                     if(this.isEmpty())
//                     {
//                               return null
//                     }
//                     else
//                     {
//                               if(index < 0 || index > this.size)
//                               {
//                                         return null
//                               }
//                               else if(index === 0)
//                               {
//                                         removeNode = this.head
//                                         this.head = this.head.next

//                               }
//                               else{
//                                         let prev = this.head
//                                         for(let i=0; i<index-1; i++)
//                                         {
//                                                   prev = prev.next
//                                         }
//                                         removeNode = prev.next
//                                         prev.next = removeNode.next
//                               }
//                               this.size--
//                               return removeNode

//                     }
//           }
//           removeValue(value)
//           {
//                     let removedNode
//                     if(this.isEmpty())
//                     {
//                               return null
//                     }
//                     else
//                     {
//                              if(this.head.value === value)
//                              {
//                               this.head = this.head.next
//                               this.size--
//                               return value
//                              }
//                              else{
//                               let prev = this.head
//                               while(prev.next && prev.next.value !== value)
//                               {
//                                         prev = prev.next
//                               }
//                               if(prev.next)
//                               {
//                                         removedNode = prev.next
//                                         prev.next = removedNode.next
//                                         this.size--
//                                         return value
//                               }
//                               return null

//                              }
//                     }
//           }
//           print()
//           {
//                     if(this.isEmpty())
//                     {
//                               console.log('the linked list is empty')
//                     }
//                     else
//                     {
//                               let listValues = ''
//                               let curr = this.head
//                               while(curr)
//                               {
//                                         listValues += `${curr.value} `
//                                         curr = curr.next
//                               }
//                               console.log(listValues)
//                     }
//           }
// }

// const list = new LinkedList()
// list.prepend(20)
// list.prepend(40)
// list.append(50)
// list.insert(3,2)
// list.removeFrom(2)
// console.log(list.getSize())
// list.removeValue(20)
// list.print()

// time complexity, removing head = constant, but removing any node has linear time complexity

// search

// class Node{
//           constructor(value)
//           {
//                     this.value = value
//                     this.next = null
//           }
// }

// class LinkedList{
//           constructor()
//           {
//                     this.head = null
//                     this.size = 0
//           }
//           isEmpty()
//           {
//                     return this.size === 0
//           }
//           getSize()
//           {
//                     return this.size
//           }
//           prepend(value)
//           {
//                     const node = new Node(value)
//                     if(this.isEmpty())
//                     {
//                     this.head = node
//                     }
//                     else
//                     {
//                       node.next = this.head
//                       this.head = node
//                     }
//                     this.size++
//           }
//           append(value)
//           {
//                     const node = new Node(value)
//                     if(this.isEmpty())
//                     {
//                               this.head = node
//                     }
//                     else
//                     {
//                               let prev = this.head
//                               while(prev.next)
//                               {
//                                         prev = prev.next
//                               }
//                               prev.next = node

//                     }
//                     this.size++
//           }
//           insert(value,index)
//           {
//                     const node = new Node(value,index)
//                     if(index < 0 || index > this.size)
//                     {
//                               return null
//                     }
//                     else if(index === 0)
//                     {
//                               this.prepend(value)
//                     }else
//                     {
//                               let prev = this.head
//                               for(let i=0; i<index-1; i++)
//                               {
//                                         prev = prev.next
//                               }
//                               node.next = prev.next
//                               prev.next = node
//                     }
//           }
//           removeFrom(index)
//           {
//                     let removedNode
//                     if(index <0 || index > this.size)
//                     {
//                               return null
//                     }
//                     else if(index === 0)
//                     {
//                               removedNode = this.head
//                              this.head = this.head.next

//                     }
//                     else
//                     {
//                               let prev = this.head
//                               for(let i=0; i<index-1; i++)
//                               {
//                                         prev = prev.next
//                               }
//                               removedNode = prev.next
//                               prev.next = removedNode.next
//                     }
//                     this.size--
//                     return removedNode
//           }
//           removeValue(value)
//           {
//                     let removedNode
//                     if(this.isEmpty())
//                     {
//                               return null
//                     }
//                     else{
//                              if(this.head.value === value)
//                              {
//                               this.head = this.head.next
//                               this.size--
//                               return value

//                              }else{
//                               let prev = this.head
//                               while(prev.next && prev.next.value !== value)
//                               {
//                                         prev = prev.next
//                               }
//                               if(prev.next)
//                               {
//                                 removedNode = prev.next
//                                 prev.next = removedNode.next
//                                 return value
//                               }
//                               return null

//                              }
//                     }
//           }
//           search(value)
//           {
//                     if(this.isEmpty())
//                     {
//                               return -1
//                     }
//                     else
//                     {
//                               let curr = this.head
//                               let i = 0
//                                while(curr){
//                                         if(curr.value === value)
//                                         {
//                                                   return `index is ${i} and value is ${value} `

//                                         }
//                                         curr = curr.next
//                                         i++
//                                }
//                                return -1

//                     }
//           }
//           print()
//           {
//                     if(this.isEmpty())
//                     {
//                               console.log('list is empty')
//                     }
//                     else
//                     {
//                               let curr = this.head
//                               let listValues = ''
//                               while(curr)
//                               {
//                                         listValues += `${curr.value} `
//                                         curr = curr.next
//                               }
//                               console.log(listValues)
//                     }
//           }
// }

// const list = new LinkedList()
// list.prepend(20)
// list.prepend(40)
// list.append(50)
// list.insert(10,0)
// list.removeFrom(3)
// list.removeValue(20)
// list.append(70)
// console.log(list.search(10))
// list.print()

// reverse the linked list

// class Node{
//           constructor(value)
//           {
//                     this.value = value
//                     this.next = null
//           }
// }
// class LinkedList{
//           constructor()
//           {
//                     this.head = null
//                     this.size = 0
//           }
//           isEmpty()
//           {
//                     return this.size === 0
//           }
//           getSize()
//           {
//                     return this.size
//           }
//           prepend(value)
//           {
//                     const node = new Node(value)
//                     if(this.isEmpty())
//                     {
//                               this.head = node
//                     }
//                     else
//                     {
//                               node.next = this.head
//                               this.head = node
//                     }
//                     this.size++
//           }
//           append(value)
//           {
//                     const node = new Node(value)
//                     if(this.isEmpty())
//                     {
//                               this.head = node
//                     }
//                     else
//                     {
//                               let prev = this.head
//                               while(prev.next)
//                               {

//                                         prev = prev.next
//                               }

//                               prev.next = node

//                     }
//                     this.size++
//           }
//           insert(value,index)
//           {
//                     const node = new Node(value)
//                     if(index < 0 || index > this.size)
//                     {
//                               return null
//                     }
//                     else if(index === 0)
//                  {
//                     this.prepend(value)
//                  }
//                  else
//                  {
//                     let prev = this.head
//                     for(let i=0; i<index -1; i++){
//                               prev = prev.next
//                     }
//                    node.next = prev.next
//                     prev.next = node
//                  }
//                  this.size++

//           }
//           removeFrom(index)
//           {
//                     let removedNode
//                     if(index<0 || index > this.size)
//                     {
//                               return null
//                     }
//                     else if(index === 0)
//                     {
//                               removedNode = this.head
//                               this.head = this.head.next

//                     }
//                     else
//                     {
//                               let prev = this.head
//                               for(let i=0; i< index-1; i++)
//                               {
//                                         prev = prev.next
//                               }
//                               removedNode = prev.next
//                               prev.next = removedNode.next

//                     }
//                     this.size--
//                     return removedNode

//           }
//           removeValue(value)
//           {
//                     if(this.isEmpty())
//                     {
//                               return null
//                     }
//                     else
//                     {
//                               let prev = this.head
//                               while(prev.next && prev.next.value !== value)
//                               {
//                                         prev  = prev.next
//                               }
//                               removedNode = prev.next
//                               prev.next = removedNode.next
//                     }
//                     this.size--
//                      return removedNode
//           }
//           search(value)
//           {
//                     if(this.isEmpty())
//                     {
//                               return -1
//                     }
//                     else{
//                               let curr = this.head
//                               let i = 0
//                               while(curr)
//                               {
//                                         if(curr.value === value)
//                                         {
//                                                   return `The value : ${curr.value} is at ${i}`
//                                         }
//                                         i++
//                                         curr = curr.next
//                               }
//                               return -1

//                     }

//           }
//           reverse()
//           {
//                     let prev = null
//                     let curr = this.head
//                     while(curr)
//                     {
//                               let next = curr.next
//                               curr.next = prev
//                               prev = curr
//                               curr = next

//                     }
//                     this.head = prev
//           }
//           print()
//           {
//                     if(this.isEmpty())
//                     {
//                               console.log('the list is empty')
//                     }
//                     else
//                     {
//                               let curr = this.head
//                               let listValue = ''
//                               while(curr)
//                               {
//                                         listValue += `${curr.value} `
//                                         curr = curr.next
//                               }
//                               console.log(listValue)
//                     }
//           }
// }
// const list = new LinkedList()
// list.prepend(20)
// list.prepend(40)
// list.prepend(50)
// list.reverse()
// list.print()

// using tail

class Node{
          constructor(value)
          {
                    this.value = value
                    this.next = null
          }
}
class LinkedList{
          constructor(){
                    this.head = null
                    this.tail = null
                    this.size = 0
          }
          isEmpty()
          {
                    return this.size === 0
          }
          getSize()
          {
                    return this.size
          }
          prepend(value)
          {
                    const node = new Node(value)
                    if(this.isEmpty())
                    {
                              this.head = node
                              this.tail = node
                    }
                    else
                    {
                              node.next = this.head
                              this.head = node
                    }
                    this.size++
          }
          append(value)
          {
                    const node = new Node(value)
                    if(this.isEmpty())
                    {
                              this.head = node
                              this.tail = node
                    }
                    else{
                              this.tail.next = node
                              this.tail = node
                    }
                    this.size++
          }
          removeFromFront()
          {
                    if(this.isEmpty())
                    {
                              return null
                    }
                    const value = this.head.value
                    this.head = this.head.next
                    this.size--
                    return value

          }
          removeFromEnd()
          {
                    if(this.isEmpty())
                    {
                              return null
                    }
                    const value = this.tail.value
                    if(this.size === 1)
                    {
                              this.head = null
                              this.tail = null
                    }
                    else
                    {
                              let prev = this.head
                              while(prev.next !== this.tail)
                              {
                                        prev = prev.next
                              }
                              prev.next = null
                              this.tail = prev
                    }
                    this.size--
                    return value
          }
          print()
          {
                    if(this.isEmpty())
                    {
                              console.log('the linked list is empty')
                    }
                    else
                    {
                              let curr = this.head
                              let listValue = ''
                              while(curr)
                              {
                                listValue += `${curr.value} `
                                curr = curr.next
                              }
                              console.log(listValue)
                    }
          }
}

 const list = new LinkedList()
 list.prepend(20)
 list.prepend(30)
 list.prepend(40)
 list.append(4)
 list.removeFromEnd()
 list.removeFromFront()
 list.print()

// doubly linked list

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }
// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head.prev = node;
//       this.head = node;
//     }
//     this.size++;
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       node.prev = this.tail;
//       this.tail = node;
//     }
//     this.size++;
//   }
//   print() {
//     if (this.isEmpty()) {
//       return console.log("linked list is empty");
//     } else {
//       let curr = this.head;
//       let linkedList = "";
//       while (curr) {
//         linkedList += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(linkedList);
//     }
//   }
//   insert(value, index) {
//     const node = new Node(value);
//     if (index < 0 || index > this.size) {
//       return null;
//     } else if (index === 0) {
//       this.prepend(value);
//     } else {
//       let previous = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         previous = previous.next;
//       }
//       let nextNode = previous.next;
//       node.next = nextNode;

//       node.prev = prev;
//       if (nextNode !== null) {
//         nextNode.prev = node;
//       }
//       previous.next = node;
//     }
//     this.size++;
//   }
//   removeFrom(index) {
//     let removedNode;
//     if (index < 0 || index > this.size - 1) {
//       return -1;
//     } else {
//       if (index === 0) {
//         removedNode = this.head;
//         this.head = removedNode.next;
//         if (this.head !== null) {
//           this.head.prev = null;
//         }
//         if (this.size === 1) {
//           this.tail = null;
//         }
//       } else if (index === this.size - 1) {
//         removedNode = this.tail;
//         this.tail = removedNode.prev;
//         this.tail.next = null;
//       } else {
//         let previous = this.head;
//         for (let i = 0; i < index - 1; i++) {
//           previous = previous.next;
//         }

//         removedNode = previous.next;
//         let nextNode = removedNode.next;
//         previous.next = nextNode;
//         nextNode.prev = previous;
//       }
//       this.size--;
//       return removedNode;
//     }
//   }
//   removeValue(value) {
//     if (this.isEmpty()) {
//       return -1;
//     } else {
//       let previous = null;
//       let current = this.head;
//       while (current !== null && current.value !== value) {
//         previous = current;
//         current = current.next;
//       }
//       if (current !== null) {
//         if (previous === null) {
//           this.head = current.next;
//           if (this.head !== null) {
//             this.head.prev = null;
//           }
//           if (this.size === 1) {
//             this.tail = null;
//           }
//         } else {
//           let nextNode = current.next;
//           previous.next = nextNode;
//           if (nextNode !== null) {
//             nextNode.prev = previous;
//           } else {
//             this.tail = previous;
//           }
//         }

//         this.size--;
//         return current;
//       }
//     }
//   }
//   search(value) {
//     if (this.isEmpty()) {
//       return console.log("list is empty");
//     } else {
//       let current = this.head;
//       let i = 0;

//       while (current) {
//         if (current.value === value) {
//           return i;
//         }
//         current = current.next;
//         i++;
//       }
//       return -1;
//     }
//   }
//   reverse() {
//     if (this.isEmpty()) {
//       console.log("The list is empty");
//     } else {
//       let current = this.head;
//       let temp = null;

//       while (current !== null) {
//         temp = current.prev;
//         current.prev = current.next;
//         current.next = temp;
//         current = current.prev;
//       }
//       temp = this.head;
//       this.head = this.tail;
//       this.tail = temp;
//     }
//   }
// }
// const list = new DoublyLinkedList();
// list.prepend(20);
// list.prepend(40);
// list.append(59);

// console.log(list.search(59));
// list.reverse();
// list.print();
