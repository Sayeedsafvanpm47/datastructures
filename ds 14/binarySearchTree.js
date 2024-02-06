class Node{
          constructor(value)
          {
                    this.value = value 
                    this.left = null 
                    this.right = null 
          }
}
class BinarySearchTree{
          constructor()
          {
                    this.root = null 
          }
          insert(value)
          {
                    let node = new Node(value)
                    if(this.root === null)
                    {
                              this.root = node 
                    }else
                    {
                              let curr = this.root 
                              while(true)
                              {
                                        if(value < curr.value)
                                        {
                                                  if(curr.left === null)
                                                  {
                                                            curr.left = node 
                                                            return this 
                                                  }else
                                                  {
                                                            curr = curr.left 
                                                  }
                                        }else if(value > curr.value)
                                        {
                                                  if(curr.right === null) 
                                                  {
                                                            curr.right = node 
                                                            return this
                                                  }else
                                                  {
                                                            curr = curr.right 
                                                  }
                                        }
                              }
                    }
          }
          find(value)
          {
                    if(this.root === null) return false 
                    let curr = this.root
                    let found = false  
                    while(curr && !found)
                    {
                              if(value < curr.value)
                              {
                                        curr = curr.left 
                              }else if(value > curr.value)
                              {
                                        curr = curr.right 
                              }else
                              {
                                        found = true 
                              }
                    }
                    if(!found) return false 
                    return curr 
          }
          printInOrder() {
                    function traverse(node) {
                        if (node) {
                            traverse(node.left);
                            console.log(node.value);
                            traverse(node.right);
                        }
                    }
            
                    traverse(this.root);
                }
}
const tree = new BinarySearchTree()
console.log(tree.insert(10))

console.log(tree.insert(15));
tree.insert(5)
tree.insert(20)
tree.insert(3)
tree.insert(56)
tree.insert(28)
console.log(tree.insert(23))
console.log(tree.find(23))
tree.printInOrder()