// class Node{
//           constructor(val)
//           {
//                     this.val = val 
//                     this.next = null 
//           }
// }
// class singlyLinkedList{
//           constructor()
//           {
//                     this.head = null 
//                     this.tail = null 
//                     this.length = 0
//           }
//           isEmpty(){
//                     return this.length === 0
//           }
//           push(val)
//           {
//                     let node = new Node(val) 
//                     if(this.isEmpty())
//                     {
//                               this.head = node 
//                               this.tail = node 
                              
//                     }
//                     this.tail.next = node 
//                     this.tail = node 
//                     this.length++ 
//                     return this 

//           }
//           print()
//           {
//                     if(this.isEmpty())
//                     {
//                               return 'Your list is empty'
//                     }
//                     let curr = this.head 
//                     let listValue = ''
//                     while(curr)
//                     {
//                               listValue += `${curr.val} `
//                               curr = curr.next

//                     }
//                     console.log(listValue)
//           }
// }

// const list = new singlyLinkedList()
// list.push('hi')
// list.push('sayeed')
// list.print()

// pop

class Node{
          constructor(val)
          {
                    this.val = val
                    this.next = null 
          }
}
class singlyLinkedList{
          constructor()
          {
                    this.head = null 
                    this.tail = null 
                    this.length = 0
          }
          push(val)
                    {
                              let node = new Node(val) 
                              if(this.length === 0)
                              {
                                        this.head = node 
                                        this.tail = node 
                                        
                              }
                              this.tail.next = node 
                              this.tail = node 
                              this.length++ 
                              return this 
          
                    }

          pop()
          {
                   
                    if(!this.head) return undefined 
                    let curr = this.head 
                    let newTail = curr 
                    if (!curr.next) {
                              this.head = null;
                              this.tail = null;
                              this.length = 0;
                              return curr; 
                          }
                    while(curr.next)
                    {
                              newTail = curr 
                              curr = curr.next
                    }
                    this.tail = newTail 
                    this.tail.next = null 
                    this.length-- 
                    return curr
          }
          shift()
          {
                    if(!this.head) return undefined 
                    let curr = this.head 
                    this.head = curr.next 
                    this.length-- 
                    if(this.length === 0)
                    {
                              this.tail = null
                    }
                    return curr 
          }
          unshift(val)
          {
                    let node = new Node(val)
                    if(!this.head) 
                    {
                              this.head = node 
                              this.tail = this.head 
                    }else{
                    let curr = this.head 
                    this.head = node 
                    this.head.next = curr 
                    }this.length++

          }
          getSize()
          {
                    return this.length 
          }
          get(index)
          {
                    if(index < 0 || index >= this.length ) return null 
                    var counter = 0
                    var curr = this.head 
                    while(counter !== index)
                    {
                              curr = curr.next 
                              counter++ 
                    }
                    return curr
                 
          }
          set(index,val)
          {
                  
                    let findNode = this.get(index)
                    if(findNode)
                    {
                              findNode.val = val
                              return true 
                    }
                    return false 
          }
          insert(index,value)
          {
                    if(index < 0 || index > this.length)
                    {
                              return false 
                    }
                    if(index === this.length)
                    {
                              return this.push(value)
                    }
                    if( index == 0 )
                    {
                              return this.unshift(value)
                    }
                   
                              let findNode = this.get(index - 1)
                              console.log(findNode)
                              let node = new Node(value)
                              if(findNode)
                              {
                                        let nextNode = findNode.next 
                                        findNode.next = node 
                                        node.next = nextNode 
                                        this.length++
                                        
                                        

                                        
                                        return true 
                              }
                    

          }
          remove(index)
          {
                    if(index < 0 || index > this.length) return false
                    if(index > this.length) return this.pop()
                    if(index === 0) return this.shift()
                    let prevIndex = this.get(index - 1)
                    let removeIndex = this.get(index)
                    if(removeIndex)
                    {
                              let nextNode = removeIndex.next 
                              prevIndex.next = nextNode 
                              this.length--
                              return true
                    }

          }
          reverse()
          {
                    let prev = null
                    let node = this.head 
                    this.head = this.tail 
                    this.tail = node
                    let next
                    for(let i=0; i<this.length; i++)
                    {
                              next = node.next 
                              node.next = prev 
                              prev = node 
                              node = next 
                              
                    }
                    return this 
                    
                     
          }
          printArray()
          {
                    if(this.length === 0)
                    {
                              return `list is empty`
                    }
                    let curr = this.head 
                    let arr = []
                    while(curr)
                    {
                              arr.push(curr.val)
                              curr = curr.next 
                    }
                    return console.log(arr)
          }
          print()
                    {
                              if(this.length === 0)
                              {
                                        return 'Your list is empty'
                              }
                              let curr = this.head 
                              let listValue = ''
                              while(curr)
                              {
                                        listValue += `${curr.val} `
                                        curr = curr.next
          
                              }
                              console.log(listValue)
                    }
}

const list = new singlyLinkedList()
list.push('hi')
list.push('sayeed')
list.unshift('hello')
console.log(list.get(2));
console.log(list.set(2,'sayeedsafvan'));
console.log(list.getSize());
console.log(list.insert(3,'sachu'));
list.remove(1)
list.reverse()
list.printArray()
