/*
Na teoria dos grafos, busca em largura é um algoritmo de busca em grafos utilizado para realizar uma busca ou travessia num grafo
e estrutura de dados do tipo árvore.

Intuitivamente, você começa pelo vértice raiz e explora todos os vértices vizinhos.

@see https://pt.wikipedia.org/wiki/Busca_em_largura
*/


package main

import "fmt"

type Graph struct {
	V   int
	adj [][]int
}

func newGrapth(v int) *Graph {
	g := &Graph{
		V:   v,
		adj: make([][]int, v),
	}

	for i := 0; i < v; i++ {
		g.adj[i] = make([]int, 0)
	}
	return g
}

func (g *Graph) addEdge(v, w int) {
  g.adj[v] = append(g.adj[v], w)
}

func (g* Graph) BFS(startIndex int) {
  visited := make([]bool, g.V)
  queue := make([]int, 0)

  visited[startIndex] = true
  queue = append(queue, startIndex)

  for len(queue) != 0 {
    s := queue[0]
    queue = queue[1:]

    fmt.Printf("%d ", s)

    for _, n := range g.adj[s] {
      if !visited[n] {
        visited[n] = true
        queue = append(queue, n)
      }
    }
  }

}

func main() {
	g := newGrapth(10)
	g.addEdge(0, 1)
	g.addEdge(0, 2)
	g.addEdge(1, 2)
	g.addEdge(2, 0)
	g.addEdge(2, 3)
	g.addEdge(3, 3)

	fmt.Println("Following is Breadth First Traversal (starting from vertex 2)")
	g.BFS(2)
}



