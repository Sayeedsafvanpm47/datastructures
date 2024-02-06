function binarySearch(arr,value,newnumber)
{
          let left = 0
          let right = arr.length - 1 
          while(left <= right)
          {
                    let mid = Math.floor((left+right)/2)
                    if(arr[mid] == value)
                    {
                        arr[mid] = newnumber 
                    }
                    if(value < arr[mid])
                    {
                              right = mid-1
                    }else
                    {
                              left = mid+1
                    }
          }
          return arr 
}
console.log(binarySearch([1,2,3,4,5],5,2));


function sumOfArray(arr)
{
 
 let sorted = arr.sort((a,b) => b-a)
 return arr[0] + arr[1]



}
console.log(sumOfArray([1,2,3,4]))

class Node{
          constructor(value)
          {
                    this.value = value 
                    this.next = null 

          }
}
class SinglyLinkedList{
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
                              this.tail.next = node 
                              this.tail = node 
                    }
                    this.length++ 
                    return this 
          }
          get(value)
          {
                    if(this.length === 0) return null 
                    if(this.length === 1) return head 
                    else {
                              let index = 0
                              let curr = this.head 
                              count = 0
                             if(value == curr)
                             {
                              return console.log(curr.value)
                             }
                             index++
                             return 
                    }

          }
       
          print()
          {
                    if(this.length === 0)
                    {
                              return `the list is empty`
                    }else 
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

const list = new SinglyLinkedList()
list.push(20)
list.push(30)
list.print()