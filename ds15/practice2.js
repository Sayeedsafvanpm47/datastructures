class Node {
    constructor()
    {
        this.children = {}
        this.isEndOfWord = false 
    }
}
class Trie{
  constructor()
  {
    this.root = new Node()
  }
  insert(word)
  {
    let node = this.root 
    for(let char of word)
    {
        if(!node.children[char])
        {
            node.children[char] = new Node()
        }
        node = node.children[char]
    }
    node.isEndOfWord = true 
  }
  find(word)
  {
    let node = this.root 
    for(let char of word){
        if(!node.children[char])
        {
            return false 
        }
        node = node.children[char]
    }
    return node.isEndOfWord 
  }
  starts(word)
  {
    let node = this.root 
    for(let char of word)
    {
        if(!node.children[char]) return false 
        node = node.children[char]
    }
    return true 
  }
  get(word)
  {
    let node = this.root 
    let result = []
    for(let char of word)
    {
        if(!node.children[char])
        return result 
       node = node.children[char]
    }helper(node,word)
    function helper(node,char)
    {
        if(node.isEndOfWord) result.push(char)
        for(let c in node.children)
    {
        helper(node.children[c],char+c)
    }
    
    }
    return result 
  }
  deleteWord(word)
  {
    helper(this.root,0)
    function helper(root,index)
    {
        if(word.length === index)
        {
            if(!root.isEndOfWord) return false 
            root.isEndOfWord = false 
            return Object.keys(root.children).length === 0
        }
        let char = word[index]
        if(!root.children[char]) return false 
        let shouldDelete = helper(root.children[char],index+1)
        if(shouldDelete)
        {
            delete root.children[char]
            return Object.keys(root.children).length === 0
        }
        return false 
    }
  }
}

let t = new Trie()
t.insert('apple')
t.insert('app')
console.log(t.find('app'));
console.log(t.find('apple'));
console.log(t.get('ap'));
t.deleteWord('app')
console.log(t.get('ap'));