// class Node{
//           constructor(value)
//           {
//                     this.value = value 
//                     this.next = null 
//           }
// }
// class Stack {
//            constructor()
//            {
//                     this.first = null 
//                     this.last = null 
//                     this.length = 0 
//            }
//            getSize()
//            {
//                     return this.length 
//            }
           
//            push(value)
//            {
//                     var node = new Node(value) 
//                     if(!this.first){
//                               this.first = node 
//                               this.last = node 
//                     }else{
//                               let temp = this.first 
//                               this.first = node 
//                               this.first.next = temp 
//                     }
//                     return ++this.length
//            }
//            pop()
//            {
//                     if(!this.first) return null 
//                     if(this.first == this.last)
//                     {
//                               this.last = null 
//                     }
//                     let temp = this.first        
//                     this.first = this.first.next 
//                     this.length-- 
//                     return temp 

//            }
// }
// const stack = new Stack()
// stack.push(30)
// stack.push(40)
// console.log(stack.push(50));
// console.log(stack.pop());
// console.log(stack.getSize());

// array based stack 

class Stack{
          constructor()
          {
                    this.items = []
          }
          push(element)
          {
                  this.items.push(element)
          } 
          pop()
          {
                    if(this.isEmpty()) return null 
          
                    return this.items.pop()
          }
          peek()
          {
                    if(this.isEmpty()) return null 
                    return console.log(`This is the top most item : ${this.items[this.items.length - 1]}`);
          }
          isEmpty()
          {
                    return this.items.length === 0
          }
          getSize()
          {
                    return this.items.length 
          }
          print()
          {
                    return this.items.forEach((item,index) => console.log(`${item} at index ${index}`))
          }
}
function reverseStack(stack)
{
          const reversed = [];

        
          while (!stack.isEmpty()) {
            reversed.push(stack.pop());
          }
        
     
          while (reversed.length !== 0) {
            stack.push(reversed.shift());
          }

}
const stack = new Stack()
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.pop()
stack.peek()
stack.print()
reverseStack(stack)
stack.print()


