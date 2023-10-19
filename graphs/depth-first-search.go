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

func (g *Graph) DFSUtil(v int, visited []bool) {
	visited[v] = true
	fmt.Println(v)
	for _, n := range g.adj[v] {
		if !visited[n] {
			g.DFSUtil(n, visited)
		}
	}
}

func (g *Graph) DFS(v int) {
	visited := make([]bool, g.V)

	g.DFSUtil(v, visited)
}

func main() {
	g := newGrapth(10)
	g.addEdge(0, 1)
	g.addEdge(0, 2)
	g.addEdge(1, 2)
	g.addEdge(2, 0)
	g.addEdge(2, 3)
	g.addEdge(3, 3)

	fmt.Println("Seguindo a busca progunda iniciando no vertice 2")
	g.DFS(2)
}
