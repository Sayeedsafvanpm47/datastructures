class Graph{
          constructor()
          {
                    this.adjacencyList = {}
          }
          addVertex(vertex)
          {
                    if(!this.adjacencyList[vertex])
                    this.adjacencyList[vertex] = []
          }
          addEdge(vertex1,vertex2)
          {
                    if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
                    {
                              throw new Error('vertex error')
                    }
                    if(!this.adjacencyList[vertex1].includes(vertex2))
                    {
                              this.adjacencyList[vertex1].push(vertex2)
                    }
                    if(!this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex2].push(vertex1)
          }
           removeEdge(vertex1,vertex2)
           {
                    if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false 
                    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v!==vertex2)
                    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v !== vertex1)

           }
           removeVertex(vertex)
           {
                    if(!this.adjacencyList[vertex]) return false 
                    while(this.adjacencyList[vertex].length)
                    {
                              let adjacent = this.adjacencyList[vertex].pop()
                              this.removeEdge(vertex,adjacent)
                    }
                    delete this.adjacencyList[vertex]
           }
           DFSR(start)
           {
                    let result = []
                    let visited = {}
                    let adjacencyList = this.adjacencyList 
                    dfs(start)
                    function dfs(vertex)
                    {
                              if(!vertex) return null 
                              visited[vertex] = true 
                              result.push(vertex)
                              adjacencyList[vertex].forEach(neighbors => {
                                        if(!visited[neighbors])
                                        {
                                                  return dfs(neighbors)
                                        }
                              })
                    }
                    return result 

           }
           BFS(start)
           {
                    let queue = [start]
                    let result = []
                    let visited = {}
                    visited[start] = true 
                    let currentVertex 
                    while(queue.length)
                    {
                              currentVertex = queue.shift()
                              result.push(currentVertex)
                              this.adjacencyList[currentVertex].forEach(neighbor => {
                                        if(!visited[neighbor])
                                        {
                                                  visited[neighbor] = true 
                                                 queue.push(neighbor)
                                        }
                              })
                    }
                    return result 

           }
           DFSI(start)
           {
                    let stack = [start]
                    let result = []
                    let visited = {}
                    visited[start] = true 
                    let currentVertex 
                    while(stack.length)
                    {
                     currentVertex = stack.pop()
                     result.push(currentVertex)
                     this.adjacencyList[currentVertex].forEach(neighbor => {
                              if(!visited[neighbor])
                              {
                                        stack.push(neighbor)
                                        visited[neighbor] = true 
                              }
                     })
                    }
                    return result 

           }
}


let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
console.log(graph.adjacencyList);
console.log(graph.DFSR('A'));
console.log(graph.BFS('A'));
console.log(graph.DFSI('A'));