class Node{
          constructor(val)
          {
                    this.val = val 
                    this.next = null 
                    this.prev = null 
          }

}
class DoublyLinkedList{
          constructor()
          {
                    this.head = null 
                    this.tail = null 
                    this.length = 0
          }
          isEmpty()
          {
                    return this.length === 0
          }
          getSize()
          {
                    return this.length 
          }
          push(val)
          {
                    let node = new Node(val)
                    if(this.isEmpty())
                    {
                              this.head = node 
                              this.tail = node 
                    
                    }else{
                             this.tail.next = node 
                             node.prev = this.tail
                             this.tail = node 
                             
                    }
                    this.length++
                    return this
          }
          pop()
          {
                    let removed
                    if(this.isEmpty())
                    {
                              return undefined 
                    }
                    else
                    {
                              removed = this.tail
                             let newTail = this.tail.prev 
                              newTail.next = null 
                              this.tail = newTail 
                    }
                    this.length-- 
                    return removed 
          }
          shift()
          {
                    let shiftingElement
                    if(this.isEmpty())
                    {
                              return undefined 
                    }
                    if(this.length === 1)
                    {
                              this.head = null 
                              this.tail = null
                              return console.log('the list has been cleared')
                    }
                    else
                    {
                              shiftingElement = this.head 
                              shiftingElement.next.prev = null 
                              this.head = shiftingElement.next 
                              shiftingElement.next = null 
                    }
                    this.length -= 1 
                    return shiftingElement
          }
          unshift(value)
          {
                    let node = new Node(value)
                    if(this.isEmpty())
                    {
                              this.head = node 
                              this.tail = node 
                    }
                    else{
                              this.head.prev = node 
                              node.next = this.head
                              this.head = node 
                             
                    }
                    this.length++ 
                    return this 
          }
          get(index)
          {
                    if(index < 0 || index > this.length)
                    {
                              return false 
                    }
                 
                              if(index <= (this.length)/2)
                              {
                              let curr = this.head
                              let count = 0
                              while(count !== index)
                              {
                                        curr = curr.next 
                                        count++
                              } 
                              return curr 
                              }else
                              {
                                        let curr = this.tail 
                                        let count = this.length - 1
                                        while(count !== index)
                                         {
                                                  curr = curr.prev 
                                                  count--
                                         }               
                                         return curr 
                              }
                    
          }
          set(value,index)
          {let foundnode
                    if(this.isEmpty())
                    {
                              return `list is empty`
                    }
                    else
                    {
                    if(index >= this.length)
                    {
                              return this.push(value)
                    }
                    foundnode = this.get(index)
                    if(foundnode)
                    {
                              foundnode.val = value 
                              return true 
                    }
                    return false 
                    }

          }
          insert(value,index)
          {
                    let node = new Node(value)
                    if(index < 0 || index > this.length )
                    {
                              return false
                    }
                    if(this.isEmpty())
                    {
                              this.head = node 
                              this.tail . node 

                    }
                    else{
                              let findNode
                              if(index == 0) return this.unshift(value)
                              if(index == this.length) return this.push(value)
                                findNode = this.get(index)
                                        let previous = findNode.prev
                                        findNode.prev = node 
                                        node.next = findNode 
                                        node.prev = previous 
                                        previous.next = node 
                                        this.length++
                                        return true 



                              
                    }
          }
          remove(index)
          {
                    if(index < 0 || index >= this.length)
                    {
                              return false 
                    }
                    if(index === 0) return this.shift()
                    if(index === this.length - 1) return this.pop()
                    let findNode = this.get(index)
                    if(findNode)
                    {
                              let previous = findNode.prev 
                              let next = findNode.next 
                              previous.next = next 
                              next.prev = previous 
                              findNode.prev = null 
                              findNode.next = null 
                              return findNode 
                    }
                    return false 
                    

          }
          print()
          {
                    if(this.isEmpty())
                    {
                              return `its emptyy`
                    }
                    let listvalue = ''
                    let curr = this.head 
                    while(curr)
                    {
                              listvalue += `${curr.val} `
                              curr = curr.next 
                    }
                    console.log(listvalue)
          }
}

const list = new DoublyLinkedList()
list.push(20)
list.push(30)
list.set(20,2)
list.insert(10,2)
list.remove(4)
list.print()