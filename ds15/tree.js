class Node{
          constructor(value)
          {
                    this.value = value 
                    this.children = []
          }
}
class Tree{
          constructor()
          {
                    this.root = null 
          }
          insert(value,parent)
          {
                    let node = new Node(value)
                    if(!this.root){
                              this.root = node 
                    }
                    else {
                              if(parent !== null)
                              {
                                        let findParent = this.findNode(this.root,parent)
                                        if(findParent)
                                        {
                                                  findParent.children.push(node)
                                        }else{
                                                  return false 
                                        }
                              }else 
                              {
                                        return false 
                              }
                    }
                    return this 
          }
          findNode(node,value)
          {
                    if(node.value === value)
                    {
                              return node 
                    }
                    for(let item of node.children)
                    {
                              let foundNode = this.findNode(item,value)
                              if(foundNode)
                              {
                                        return foundNode 
                              }

                    }
                    return null 
          }
          preOrder() {
                    const result = [];
                    this._preOrder(this.root, result);
                    return result;
                  }
                
                  _preOrder(node, result) {
                    if (node) {
                      result.push(node.value);
                      for (const child of node.children) {
                        this._preOrder(child, result);
                      }
                    }
                  }
                  inOrder() {
                    const result = [];
                    this._inOrder(this.root, result);
                    return result;
                  }
                
                  _inOrder(node, result) {
                    if (node) {
                      for (const child of node.children) {
                        this._inOrder(child, result);
                      }
                      result.push(node.value);
                    }
                  }
                
                  postOrder() {
                    const result = [];
                    this._postOrder(this.root, result);
                    return result;
                  }
                
                  _postOrder(node, result) {
                    if (node) {
                      for (const child of node.children) {
                        this._postOrder(child, result);
                      }
                      
                    }
                    result.push(node.value);
                  }
                  bfs() {
                    const result = [];
                    if (!this.root) {
                      return result;
                    }
                
                    const queue = [this.root];
                    while (queue.length > 0) {
                      const currentNode = queue.shift();
                      result.push(currentNode.value);
                
                      for (const child of currentNode.children) {
                        queue.push(child);
                      }
                    }
                
                    return result;
                  }
                }
                

let tree = new Tree()
console.log(tree.insert(10));
tree.insert(20,10)
tree.insert(30,10)
tree.insert(40,20)
tree.insert(50,20)
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
console.log(tree.bfs());