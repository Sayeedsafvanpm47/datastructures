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
                    var node = new Node(value)
                    if(this.root === null)
                    {
                              this.root = node 
                              return this 
                    }
                    else 
                    {
                              let curr = this.root 
                              while(true)
                              {
                                      if(value == curr.value) return false  
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
                                      }
                                      else if(value > curr.value)
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
          BSTFind(value)
          {
                    if(this.root == null) return false 
                    var curr = this.root 
                    let found = false 
                    while(!found && curr)
                    {
                              if(value < curr.value)
                              {
                                        curr = curr.left 
                              }else if(value > curr.value)
                              {
                                        curr = curr.right 
                              }else{
                                        found = true 
                              }

                    }
                    if(!found) return false 
                    return curr 
          }
          BFS()
          {
                    let node = this.root 
                    let queue = [], data = []
                    queue.push(node)
                    while(queue.length)
                    {
                              node = queue.shift()
                              data.push(node.value)
                              if(node.left) queue.push(node.left)
                              if(node.right) queue.push(node.right)
                    }
          return data 
          }
          preorder()
          {
                    let data = []
                    function traverse(node)
                    {
                              data.push(node.value)
                              if(node.left) traverse(node.left)
                              if(node.right) traverse(node.right)

                    }
                    traverse(this.root)
                    return data 

          }
          postOrder()
          {
                    let data = []
                    function traverse(node)
                    {
                              if(node.left) traverse(node.left)
                          
                    if(node.right) traverse(node.right)
                    data.push(node.value)
                    }
          traverse(this.root)
          return data 
          }
          inorder()
          {
                    let data = []
                    function traverse(node)
                    {
                              if(node.left){ traverse(node.left)}
                              data.push(node.value)
                               if(node.right) {traverse(node.right)}

                    }
                    traverse(this.root)
                    return data 
          }
          findMin(root) {
                    if (!root.left) {
                        return root.value;
                    } else {
                        return this.findMin(root.left);
                    }
                }
                
                findMax(root) {
                    if (!root.right) {
                        return root.value;
                    } else {
                        return this.findMax(root.right);
                    }
                }
                
          delete(value)
          {
                    this.root = this.deleteNode(this.root,value)
          }
          deleteNode(root,value)
          {
                    if(root === null)
                    {
                              return root 
                    }
                    if(value < root.value)
                    {
                              root.left = this.deleteNode(root.left,value)
                    }else if(value > root.value)
                    {
                              root.right = this.deleteNode(root.right,value)
                    }else 
                    {
                              if(!root.left && !root.right) return null 
                          if(!root.left)
                              {
                                        return root.right
                              }else if(!root.right) return root.left 
                             
                                        root.value = this.findMin(root.right)
                                        root.right = this.deleteNode(root.right,root.value)
                         
                    }
        return root
          }
          isValidBST(root)
          {
                    function checker(node,min,max)
                    {
                     
                     if(!node) return true
                     if(node.value <= min || node.value >= max) return false  
                     return checker(node.left,min,node.value) && checker(node.right,node.value,max)

                    }
                    return checker(root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)
          }

    
                  
                  findClosest(target)
                  {
                     let closest = this.root.value
                     let node = this.root 
                     while(node)
                     {
                              if(target === node.value) return false 
                              if(Math.abs(target - node.value) < Math.abs(target - closest))
                              {
                                        closest = node.value 
                              }
                              if(target < node.value)
                              {
                                        node = node.left 
                              }else if(target > node.value)
                              {
                                        node = node.right 
                              }
                     }
                     return closest
                  }
                  maxDepth(root)
                  {
                    function calc(node)
                    {
                              if(!node) return 0 
                              return Math.max(1+calc(node.left),1+calc(node.right))
                    }
                    return calc(root)
                  }
                   LCA(root,n1,n2)
                  {
                    if(root === null) return null 
                    if(root.value > n1 && root.value > n2)
                    return this.LCA(root.left,n1,n2)
                    if(root.value < n1 && root.value < n2)
                    return this.LCA(root.right,n1,n2)

                    return root.value 
                  }
}


let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(8)
bst.insert(15)
bst.insert(6)
bst.insert(12)
bst.insert(13)
bst.insert(17)
bst.insert(14)
console.log(bst.BFS());
console.log(bst.preorder());
console.log(bst.postOrder());
console.log(bst.findMin(bst.root));
console.log('closest value : ');
console.log(bst.findClosest(5));
console.log(bst.findMax(bst.root));
console.log(bst.maxDepth(bst.root));
console.log('lca');
console.log(bst.LCA(bst.root,40,48));
bst.delete(10)
bst.delete(40)
console.log(bst.inorder());
console.log(bst.isValidBST(bst.root)

);

