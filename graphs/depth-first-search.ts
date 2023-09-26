/**
 * Na teoria dos grafos, busca em profundidade é um algoritmo usado para realizar uma busca ou travessia numa árvore, estrutura de árvore ou grafo. Intuitivamente, o algoritmo começa num nó raiz e explora tanto quanto possível cada um dos seus ramos, antes de retroceder
 * @see https://pt.wikipedia.org/wiki/Busca_em_profundidade
 */

class Graph {
  private V: number;

  //Array de listas para
  // Representação da lista de adjacências
  private adj: any[];

  constructor(v: number) {
    this.V = v;
    this.adj = new Array(v);

    for (let i = 0; i < v; ++i) {
      this.adj[i] = [];
    }
  }
  //function para adicionar um limite/edge ao grafo
  addEdge(v: number, w: number): void {
    this.adj[v].push(w);
  }

  DFSUtil(v: number, visited: boolean[]): void {
    visited[v] = true;
    console.log(`${v} `);

    //Recorre para todos os vértices adjacentes a este
    // vértice
    for (let i of this.adj[v].values()) {
      let n = i;
      if (!visited[n]) {
        this.DFSUtil(n, visited);
      }
    }
  }
  // function para fazer a pesquisa profunda transversal
  // aqui se faz a chamada para o DFSUtil()
  DFS(v: number) {
    /*
    marcando todos os vertices como nao visitados
    */
    let visited: boolean[] = new Array(this.V);
    this.DFSUtil(v, visited);
  }
}

function main() {
  let g = new Graph(4);

  g.addEdge(0, 1);
  g.addEdge(0, 2);
  g.addEdge(1, 2);
  g.addEdge(2, 0);
  g.addEdge(2, 3);
  g.addEdge(3, 3);

  console.log("Seguindo a busca profunda, iniciando no vertice 2");

  g.DFS(2);
}

main();
