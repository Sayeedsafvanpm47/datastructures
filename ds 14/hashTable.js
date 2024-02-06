// class HashTable{
//           constructor(size=53)
//           {
//                     this.keymap = new Array(size)
//           }
//           _hash(key)
//           {
//                     let total = 0
//                     let prime = 31 
//                     for(let i=0; i<Math.min(key.length,100); i++)
//                     {
//                               let char = key[i]
//                               let value = char.charCodeAt(0) - 96
//                               total = (total * prime + value ) % this.keymap.length 

//                     }
//                     return total 

//           }
//           set(key,value)
//           {
//                     let index = this._hash(key)
//                     if(!this.keymap[index])
//                     {
//                               this.keymap[index] = []
//                     }
//                     this.keymap[index].push([key,value])
//           }
//           get(key)
//           {
//                     let index = this._hash(key)
//                     if(this.keymap[index])
//                     {
//                               for(let i=0; i<this.keymap[index].length;i++)
//                               {
//                                         if(this.keymap[index][i][0] === key)
//                                         {
//                                                   return this.keymap[index][i][1]
//                                         }
//                               }

//                     }
//                     return undefined 
//           }
//           values()
//           {
//                     let valuesArr = []
//                     for(let i=0; i<this.keymap.length; i++)
//                     {
//                               if(this.keymap[i])
//                               {
//                                         for(let j=0; j<this.keymap[i].length;j++)
//                                         {
//                                                   if(!valuesArr.includes(this.keymap[i][j][1]))
//                                                   {
//                                                             valuesArr.push(this.keymap[i][j][1])
//                                                   }
//                                         }
//                               }
//                     }
//                     return valuesArr 
//           }
//           keys()
//           {
//                     let keysArr = []
//                     for(let i=0; i<this.keymap.length; i++)
//                     {
//                               if(this.keymap[i])
//                               {
//                                         for(let j=0; j<this.keymap[i].length; j++)
//                                         {
//                                                   if(!keysArr.includes(this.keymap[i][j][0]))
//                                                   {
//                                                             keysArr.push(this.keymap[i][j][0])
//                                                   }
//                                         }
//                               }
                              
//                     }
//                     return keysArr 
//           }
// }
// const hash = new HashTable()
// hash.set('hi','hello')
// hash.set('hop','hey')
// hash.set('hopi','yoo')
// hash.set('hopii','broop')
// hash.set('heiiy','suei')
// console.log(hash.get('hopi'));
// console.log(hash.keys());
// console.log(hash.values());
// hash.keys().forEach((key)=>{
//           console.log(hash.get(key))
// })


// problems


class HashTable{
          constructor(size = 53)
          {
                    this.keyMap = new Array(size) 
          }
          _hash(key)
          {
                    let total = 0 
                    let prime = 31 
                    for(let i=0; i<Math.min(key.length,100); i++)
                    {
                              let char = key[i]
                              let values = char.charCodeAt(0) - 96 
                              total = (total * prime + values) % this.keyMap.length 
                    }
                    return total 
          }
          set(key,value)
          {
                    let index = this._hash(key)
                    if(!this.keyMap[index])
                    {
                              this.keyMap[index] = []


                    }
                    this.keyMap[index].push([key,value])
          }
          get(key)
          {
                    let index = this._hash(key)
                    if(this.keyMap[index])
                    {
                              for(let i=0; i<this.keyMap[index].length; i++)
                              {
                                        if(this.keyMap[index][i][0] === key)
                                        {
                                                  return this.keyMap[index][i][1]
                                        }
                              }
                    }
                    return undefined 
          }
          values()
          {
                    let valuesArray = []
                    for(let i=0; i<this.keyMap.length; i++)
                    {
                              if(this.keyMap[i]){
                              for(j=0; j<this.keyMap[i].length; j++)
                              {
                                        if(!valuesArray.includes(this.keyMap[i][j][1]))
                                        {
                                                  valuesArray.push(this.keyMap[i][j][1])
                                        }
                              }
                    }
                    }
                    return valuesArray
          }
          keys()
          {
                    let keysArray = []
                    for(let i=0; i<this.keyMap.length; i++)
                    {
                              if(this.keyMap[i])
                              {
                                        for(let j=0; j<this.keyMap[i].length; j++)
                                        {
                                                  if(!keysArray.includes(this.keyMap[i][j][0]))
                                                  {
                                                            keysArray.push(this.keyMap[i][j][0])
                                                  }

                                        }
                              }
                              
                    }
                    return keysArray 
          }
          duplicates()
          {
                    const checked = {}
                    const duplicates = []
                    for(let i=0; i<this.keyMap.length; i++)
                    {
                              if(this.keyMap[i])
                              {
                                        for(let j=0; j<this.keyMap[i].length; j++)
                                        {
                                                  const key = this.keyMap[i][j][0]
                                                  if(checked[key])
                                                  {
                                                    if(!duplicates.includes(key))
                                                    {
                                                            duplicates.push(key)
                                                    }

                                                  }else
                                                  {
                                                            checked[key] = true 
                                                  }
                                        }
                              }
                    }
                    return duplicates 
          }
          groupAnagrams(word) {
                    let anagrams = {}
                    for(let word of words)
                    {
                              let sorted = word.split('').sort().join()
                              if(!anagrams[sorted])
                              {
                                        anagrams[sorted] = [word]
                              }else
                              {
                                        anagrams[sorted].push(word)
                              }
                    }
                    let result = []
                    for(let key in anagrams)
                    {
                              result.push(anagrams[key])
                    }
                    return result 
          }
          wordFrequencyCounter(text)
          {
                    const words = text.toLowerCase().match(/[a-zA-Z]+/g) || []
                    const frequencyCounter = {}
                    for(let word of words)
                    {
                              if(!frequencyCounter[word])
                              {
                                        frequencyCounter[word] = 1
                              }else
                              {
                                        frequencyCounter[word]++ 
                              }
                    }
                    return frequencyCounter
          }
}
 
const myHashTable = new HashTable();
const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const groupedAnagrams = myHashTable.groupAnagrams(words);
console.log("Grouped Anagrams:", groupedAnagrams);
const text = "Hello, how are you? This is a test. Hello, test.";

const wordFrequencies = myHashTable.wordFrequencyCounter(text);
console.log("Word Frequencies:", wordFrequencies);