// function same(arr1,arr2)
// {
//           if(arr1.length !== arr2.length) return 'poda mira'
//           let obj1 = {}, obj2 = {}
//           for(let item of arr1)
//           {
//                     obj1[item] = (obj1[item]||0) + 1 
//           }
//           for(let item of arr2)
//           {
//                     obj2[item] = (obj2[item] || 0) + 1
//           }
//           for(let key in obj1)
//           {
//                     if(!(obj2.hasOwnProperty(key ** 2)))
//                     {
//                               return false

//                     }
//                     if(obj1[key] !== obj2[key ** 2])
//                     {
//                               return false  
//                     }
          
//           }
//           return true 
// }
// console.log(same([1,2,3,4],[1,4,9,16]));

// function checkCount(arr)
// {
// let i =0;
//  for(let j=1; j<arr.length; j++)
//  {
//           if(arr[i] !== arr[j])
//           {
//                     i++ 
//                     arr[i] = arr[j]
//           }
//  }
//  return i + 1 

// }
// console.log(checkCount([1,2,2,2,3,3,3,4,5,5,6,7,8]))

// arr = [1,2,3,4,5,3,4,5,6]

// function subArray(arr,num)
// {
//           if(arr.length < num)
//           {
//                     return null 
//           }
//           let sum  = 0
//           let tempsum = 0
//           for(let i=0; i<num; i++)
//           {
//                     sum += arr[i]
//           }
//           tempsum = sum 
//           for(let i=num; i<arr.length; i++)
//           {
//                 tempsum = sum - arr[i-num] + arr[i]
//                 sum = Math.max(sum,tempsum)
//           }
//           return sum

// }
// console.log(subArray([1,2,3,0],2));

// function fibonnacci(num)
// {
//           if(num == 0)
//           {
//                     return 0
//           }
//           if(num == 1)
//           {
//                     return 1 
//           }
//           return fibonnacci(num-1) + fibonnacci(num-2)
// }
// console.log(fibonnacci(2));

// class Node{
//           constructor(value)
//           {
//                     this.value = value 
//                     this.next = null 
//           }


// }

// class Sll{
//           constructor()
//           {
//                     this.head = null 
//                     this.tail = null 
//                     this.length = 0
//           }
//           push(value)
//           {
//           let node = new Node(value)
//           if(this.length === 0)
//           {
//                     this.head = node 
//                     this.tail = node 
//           }else {
//           this.tail.next = node 
//           this.tail = node
//           } 
//           this.length++ 
//           return this
//           }
//           pop()
//           {
//                     if(!this.head) return undefined 
//                     let curr = this.head 
//                     let newTail = curr 
                   
//                     while(curr.next)
//                     { 
//                               newTail = curr;
//                               curr = curr.next 
//                     }
                  
//                     this.tail = newTail 
//                     this.tail.next = null 
//                     this.length-- 
//                     return curr

//           }
//           shift()
//           {
//                     if(this.length === 0) return null 
//                     let curr = this.head 
//                     this.head = curr.next 
//                     curr.next =  null 
//                     this.length--
//                     return curr 
//           }
//           unshift(value)
//           {
//                     const node = new Node(value)
//                     if(this.length === 0)
//                     {
//                               this.head = node
//                               this.tail = node 
//                     }
//                     else
//                     {
//                               let curr = this.head 
//                               this.head = node 
//                               node.next = curr 
//                     }
//                     this.length++
//                     return this 
//           }
//           get(index)
//           {
//                     if(index < 0 || index > this.length) return null 
//                     else
//                     {
//                               let count = 0 
//                               let curr = this.head 
//                               while(count !== index)
//                               {
//                                  curr = curr.next 
//                                  count++
//                               }
//                               return curr 
//                     }
//           }
//           set(value,index)
//           {
                   
//                     if(index < 0 || index > this.length)
//                     {
//                               return null 
//                     }
//                     else
//                     {
//                               let findValue = this.get(index)
//                               if(findValue)
//                               {
//                                         findValue.value = value 
//                               }
//                               return findValue 
//                     }
                    
//           }
//           insert(value,index)
//           {
//                     if(index < 0 || index > this.length) return null 
//                     if(index === 0) return this.unshift(value)
//                     else if(index === this.length) return this.push(value)
//                     else {
//           let node = new Node(value)
//                     let findValue = this.get(index - 1)
//                     if(findValue)
//                     {
//                               let next = findValue.next
//                               findValue.next = node
//                               node.next = next 

//                     }
//                     }
//                     this.length++
//                     return this

//           }
//           reverse()
//           {
//                     let curr = this.head 
//                     this.head = this.tail 
//                     this.tail = curr 
//                     let prev = null 
//                     let next 
//                    for(let i=0; i<this.length; i++)
//                     {
//                               next = curr.next 
//                               curr.next = prev 
//                               prev = curr 
//                               curr = next
//                     }
//                     return this
//           }
//           print()
//           {
//                     if(this.length === 0)
//                     {
//                               console.log('empty')

//                     }
//                     let list = ''
//                     let curr = this.head 
//                     while(curr)
//                     {
//                               list += `${curr.value} `
//                               curr = curr.next
//                     }
//                     console.log(list)
//           }
// }

// const list = new Sll()
// list.push(20)
// list.push(30)
// list.push(40)
// list.pop()
// list.shift()
// list.shift()
// list.unshift(20) 
// list.unshift(20)
// list.unshift(20)
// console.log(list.get(2));
// list.set(30,2)
// list.insert(4,3)
// list.insert(5,4)
// list.reverse()




// list.print()

class Node{
          constructor(value)
          {
                    this.value = value 
                    this.next = null 
                    this.prev = null 
          }
}
class Dll{
          constructor()
          {
                    this.head = null 
                    this.tail = null 
                    this.length = 0 
          }
          push(value)
          {
                    const node = new Node(value)
                    if(this.length === 0)
                    {
                              this.head = node 
                              this.tail = node 
                    }
                    else
                    {
                              let curr = this.head 
                              while(curr)
                              {
                                        curr = curr.next 
                              }
                           
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
                    if(this.length === 0) return null 
                    if(this.length == 1) {
                              removed = this.head
                              this.length-- 
                              this.head = null 
                              this.tail = null 
                              return removed
                             

                    }else
                    {
                              let curr = this.tail.prev  
                              this.tail = curr  
                               removed = this.tail
                               removed.prev = null 
                               removed.next = null 
                              
                               
                               
                    }
                    this.length-- 
                               return removed 
          }
          removeMid()
          {
                let slowPtr = this.head 
                let fastPtr = this.head
                let prev = null 
                while(fastPtr && fastPtr.next)
                {
                    fastPtr = fastPtr.next.next 
                    prev = slowPtr 
                    slowPtr = slowPtr.next 
                }
                prev.next = slowPtr.next 
                return this 
          }
          get(index)
          {
                    if(index < 0 || index > this.length) return null 
                  
                              if(index < this.length/2)
                              {
                                        let curr = this.head 
                                        let count = 0
                                        while(count !== index)
                                        {
                                                  curr = curr.next 
                                                  count ++
                                        }
                                        return curr

                              }
                              else
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
          print()
          {
                    if(this.length === 0)
                    {
                              return null 
                    }
                    else
                    {
                              let list = ''
                              let curr = this.head 
                              while(curr)
                              {
                                        list += `${curr.value} `
                                        curr = curr.next
                              }
                              console.log(list)
                    }
          }
}

const list = new Dll()
list.push(210)
list.push(29)
list.push(210)
list.push(29)
list.push(210)
console.log(list.get(4));

list.print()