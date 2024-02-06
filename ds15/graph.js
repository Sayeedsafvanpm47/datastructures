class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      throw new Error("One or both vertices do not exist in the graph.");
    }
    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (!this.adjacencyList[vertex2].includes(vertex1))
      this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      throw new Error("One or both vertices do not exist in the graph.");
    }
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex)
  {
          while(this.adjacencyList[vertex].length)
          {
                    const adjacencyVertex = this.adjacencyList[vertex].pop()
                    this.removeEdge(vertex,adjacencyVertex)

          }
          delete this.adjacencyList[vertex]
  }
  displayGraph() {
          for (const vertex in this.adjacencyList) {
            const edges = this.adjacencyList[vertex].join(", ");
            console.log(`${vertex} -> ${edges}`);
          }
        }
      
        hasEdge(vertex1, vertex2) {
          if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            throw new Error("One or both vertices do not exist in the graph.");
          }
      
          return (
            this.adjacencyList[vertex1].includes(vertex2) &&
            this.adjacencyList[vertex2].includes(vertex1)
          );
        }
      
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
console.log(graph.adjacencyList);
graph.displayGraph();
console.log(graph.hasEdge("A", "B")); // true
console.log(graph.hasEdge("A", "C")); 
graph.removeEdge("C", "B");
console.log(graph.adjacencyList);
graph.removeVertex('C')
console.log(graph.adjacencyList);
