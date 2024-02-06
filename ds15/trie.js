class Node{
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
                    for(let char of word)
                    {
                              if(!node.children[char]) return false 
                              node = node.children[char]
                    }
                    return node.isEndOfWord 
          }
          startsWithPrefix(word)
          {
                    let node = this.root 
                    for(let char of word)
                    {
                              if(!node.children[char]) return false 
                              node = node.children[char]
                    }
                    return true 
          }
          getWordsWithPrefix(word)
          {
                    let result = []
                    let node = this.root 
                    for(let char of word)
                    {
                              if(!node.children[char]) return result 
                              node = node.children[char]
                    }
                    function getWordsHelper(node,word)
                    {
                              if(node.isEndOfWord) result.push(word)

                              for(let char in node.children)
                              {
                                        getWordsHelper(node.children[char],word+char)

                              }
                    }
                    getWordsHelper(node,word)
                    return result 
          }
          deleteWord(word)
          {
              deleteHelper(this.root,0)
              function deleteHelper(node,index)
              {
                    if(index === word.length) 
                    {
                              if(!node.isEndOfWord) return false 
                              node.isEndOfWord = false 
                              return Object.keys(node.children).length === 0 
                    }
                    const char = word[index]
                    if(!node.children[char]) return false 
                    const shouldDelete = deleteHelper(node.children[char],index+1)
                    if(shouldDelete)
                    {
                              delete node.children[char]
                             return Object.keys(node.children).length === 0
                    }
                    return false 

              }

          }
}

let trie = new Trie()
trie.insert('apple')
trie.insert('app')
console.log(trie.find('ap'));
console.log(trie.startsWithPrefix('sp'));
console.log(trie.getWordsWithPrefix('ap'));
console.log(trie.deleteWord('app'));
console.log(trie.getWordsWithPrefix('ap'));